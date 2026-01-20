// Advanced Solver combining best techniques from:
// - Zolver: Constraint propagation
// - arnfaldur/RobozzleSolver: Prioritized iterative deepening with dynamic limits
// - EA solvers: Multi-objective fitness

class AdvancedSolver {
    constructor() {
        this.running = false;
        this.INST = { NO: 0, FW: 1, TL: 2, TR: 3, P1: 4, P2: 5, P3: 6, F0: 7, F1: 8, F2: 9 };
    }

    async solve(levelData, timeoutMs = 30000, onProgress = null) {
        this.running = true;
        const startTime = Date.now();

        const availableInstructions = levelData.activeInstructions || [];
        const functionLengths = (levelData.functions || [{ length: 12 }]).map(f => f.length);

        // Build instruction set
        const instructions = this.buildInstructions(availableInstructions);

        let tested = 0;
        let bestSolution = null;

        // Prioritized iterative deepening on multiple dimensions
        // Limits: {maxInstructions, maxSteps, maxTouches}
        const priorityQueue = [];

        // Start with minimal limits
        priorityQueue.push({ maxInstr: 1, maxSteps: 50, cost: 1 });

        const explored = new Set();

        while (priorityQueue.length > 0 && this.running) {
            if (Date.now() - startTime > timeoutMs) {
                return bestSolution || { solved: false, tested, timeout: true };
            }

            // Sort by cost (lower is better)
            priorityQueue.sort((a, b) => a.cost - b.cost);
            const limits = priorityQueue.shift();

            const key = `${limits.maxInstr}_${limits.maxSteps}`;
            if (explored.has(key)) continue;
            explored.add(key);

            if (onProgress) {
                onProgress(tested, `instr=${limits.maxInstr}, steps=${limits.maxSteps}`);
                await new Promise(resolve => setTimeout(resolve, 0));
            }

            // Try to find solution with these limits
            let deaths = 0;
            let attempts = 0;

            const result = this.searchWithLimits(
                levelData,
                instructions,
                functionLengths,
                limits,
                (prog, success) => {
                    tested++;
                    attempts++;
                    if (!success) deaths++;

                    if (tested % 200 === 0 && onProgress) {
                        onProgress(tested, `instr=${limits.maxInstr}, steps=${limits.maxSteps}`);
                    }

                    return Date.now() - startTime < timeoutMs && this.running;
                }
            );

            if (result.solved) {
                // Found a solution! But keep searching for better ones with fewer instructions
                if (!bestSolution || result.instrCount < bestSolution.instrCount) {
                    bestSolution = result;
                }

                // Add tighter limits to find shorter solution
                if (result.instrCount > 1) {
                    priorityQueue.push({
                        maxInstr: result.instrCount - 1,
                        maxSteps: limits.maxSteps,
                        cost: (result.instrCount - 1) * 1000 + limits.maxSteps
                    });
                }
            } else {
                // No solution found - expand limits intelligently
                const deathRatio = attempts > 0 ? deaths / attempts : 1;

                if (deathRatio < 0.5 && limits.maxInstr < functionLengths.reduce((a, b) => a + b, 0)) {
                    // Low death rate - programs fail due to lack of instructions
                    // Increase instruction count
                    priorityQueue.push({
                        maxInstr: limits.maxInstr + 1,
                        maxSteps: limits.maxSteps,
                        cost: (limits.maxInstr + 1) * 1000 + limits.maxSteps
                    });
                }

                if (deathRatio > 0.3 && limits.maxSteps < 500) {
                    // High death rate - programs fail due to execution limits
                    // Increase step limit
                    priorityQueue.push({
                        maxInstr: limits.maxInstr,
                        maxSteps: limits.maxSteps + 50,
                        cost: limits.maxInstr * 1000 + limits.maxSteps + 50
                    });
                }

                // Also try increasing both (diagonal expansion)
                if (limits.maxInstr < 10 && limits.maxSteps < 200) {
                    priorityQueue.push({
                        maxInstr: limits.maxInstr + 1,
                        maxSteps: limits.maxSteps + 50,
                        cost: (limits.maxInstr + 1) * 1000 + limits.maxSteps + 50
                    });
                }
            }

            // Limit queue size
            if (priorityQueue.length > 20) {
                priorityQueue.length = 20;
            }
        }

        return bestSolution || { solved: false, tested };
    }

    searchWithLimits(levelData, instructions, funcLengths, limits, progressCallback) {
        const program = funcLengths.map(() => []);
        let foundSolution = null;

        // Depth-first search with constraint propagation
        const search = (funcIdx, totalInstr, constraints) => {
            if (foundSolution) return; // Already found solution

            if (funcIdx >= funcLengths.length) {
                // Program complete - test it
                if (!progressCallback(program, false)) return;

                const result = this.executeProgram(levelData, program, limits.maxSteps);

                if (result.solved) {
                    foundSolution = {
                        solved: true,
                        program: program.map(f => [...f]),
                        steps: result.steps,
                        instrCount: totalInstr
                    };
                    progressCallback(program, true);
                    return;
                }

                return;
            }

            const maxLen = Math.min(funcLengths[funcIdx], limits.maxInstr - totalInstr);

            // Try all valid lengths for this function
            for (let len = 0; len <= maxLen; len++) {
                if (foundSolution) return;

                // Fill this function
                this.fillFunctionDFS(
                    program,
                    funcIdx,
                    len,
                    instructions,
                    constraints,
                    () => {
                        // After filling, recurse to next function
                        search(funcIdx + 1, totalInstr + len, constraints);
                    }
                );

                if (foundSolution) return;
            }
        };

        search(0, 0, { leftTurns: 0, rightTurns: 0, terminated: false });

        return foundSolution || { solved: false };
    }

    fillFunctionDFS(program, funcIdx, targetLen, allInstructions, initialConstraints, onComplete) {
        if (targetLen === 0) {
            onComplete();
            return;
        }

        program[funcIdx] = [];

        const search = (pos, constraints) => {
            if (pos >= targetLen) {
                onComplete();
                return;
            }

            const allowed = this.getValidInstructions(constraints, allInstructions);

            for (const instr of allowed) {
                program[funcIdx][pos] = instr;

                const newConstraints = this.propagateConstraints(constraints, instr);

                if (newConstraints !== null) {
                    search(pos + 1, newConstraints);
                }
            }
        };

        search(0, { ...initialConstraints });
        program[funcIdx] = [];
    }

    propagateConstraints(constraints, instruction) {
        const cond = Math.floor(instruction / 100);
        const opcode = instruction % 100;

        const newConstraints = { ...constraints };

        // Post-call elimination (Zolver)
        if (cond === 0 && (opcode === this.INST.F0 || opcode === this.INST.F1 || opcode === this.INST.F2)) {
            newConstraints.terminated = true;
        }

        // Roundabout elimination (Zolver)
        if (opcode === this.INST.TL) {
            newConstraints.leftTurns++;
            newConstraints.rightTurns = 0;
            if (newConstraints.leftTurns >= 2) {
                newConstraints.noRightTurn = true;
            }
        } else if (opcode === this.INST.TR) {
            newConstraints.rightTurns++;
            newConstraints.leftTurns = 0;
            if (newConstraints.rightTurns >= 2) {
                newConstraints.noLeftTurn = true;
            }
        } else {
            newConstraints.leftTurns = 0;
            newConstraints.rightTurns = 0;
            newConstraints.noLeftTurn = false;
            newConstraints.noRightTurn = false;
        }

        return newConstraints;
    }

    getValidInstructions(constraints, allInstructions) {
        if (constraints.terminated) {
            return []; // Nothing after unconditional call
        }

        let valid = [...allInstructions];

        if (constraints.noLeftTurn) {
            valid = valid.filter(i => i % 100 !== this.INST.TL);
        }
        if (constraints.noRightTurn) {
            valid = valid.filter(i => i % 100 !== this.INST.TR);
        }

        return valid;
    }

    buildInstructions(activeInstructions) {
        const INST = this.INST;
        const COND = { C1: 1, C2: 2, C3: 3 };

        const result = [];

        // Add unconditional instructions
        for (const name of activeInstructions) {
            if (INST[name] !== undefined) {
                result.push(INST[name]);
            }
        }

        // Add conditional combinations
        for (const name of activeInstructions) {
            if (name.startsWith('C')) {
                const condNum = COND[name];
                for (const opName of activeInstructions) {
                    if (INST[opName] !== undefined) {
                        result.push(condNum * 100 + INST[opName]);
                    }
                }
            }
        }

        return [...new Set(result)];
    }

    executeProgram(levelData, programFunctions, maxSteps = 10000) {
        let state = {
            x: levelData.player.x,
            y: levelData.player.y,
            dir: levelData.player.direction,
            stars: levelData.stars,
            board: levelData.board.map(row => [...row]),
            stack: programFunctions[0] ? [...programFunctions[0]] : [],
            steps: 0
        };

        while (state.steps < maxSteps && state.stack.length > 0) {
            if (state.stars === 0) {
                return { solved: true, steps: state.steps };
            }

            if (state.stack.length > 100) {
                return { solved: false };
            }

            const instr = state.stack.shift();
            state.steps++;

            const cond = Math.floor(instr / 100);
            const opcode = instr % 100;

            if (cond > 0) {
                const tileValue = state.board[state.y][state.x];
                const tileColor = tileValue % 4;
                if (tileColor !== cond) {
                    continue;
                }
            }

            const INST = this.INST;

            switch (opcode) {
                case INST.FW: {
                    const dx = [-1, 0, 1, 0];
                    const dy = [0, -1, 0, 1];
                    const newX = state.x + dx[state.dir];
                    const newY = state.y + dy[state.dir];

                    if (newX < 0 || newX >= 16 || newY < 0 || newY >= 16) {
                        return { solved: false };
                    }

                    const targetCell = state.board[newY][newX];
                    if (targetCell === 0) {
                        return { solved: false };
                    }

                    state.x = newX;
                    state.y = newY;

                    if (targetCell > 3) {
                        state.board[newY][newX] -= 4;
                        state.stars--;
                    }
                    break;
                }

                case INST.TL:
                    state.dir = (state.dir + 3) % 4;
                    break;

                case INST.TR:
                    state.dir = (state.dir + 1) % 4;
                    break;

                case INST.P1:
                    state.board[state.y][state.x] = 1 + (state.board[state.y][state.x] > 3 ? 4 : 0);
                    break;

                case INST.P2:
                    state.board[state.y][state.x] = 2 + (state.board[state.y][state.x] > 3 ? 4 : 0);
                    break;

                case INST.P3:
                    state.board[state.y][state.x] = 3 + (state.board[state.y][state.x] > 3 ? 4 : 0);
                    break;

                case INST.F0:
                case INST.F1:
                case INST.F2: {
                    const funcIndex = opcode - INST.F0;
                    if (programFunctions[funcIndex] && programFunctions[funcIndex].length > 0) {
                        state.stack = [...programFunctions[funcIndex], ...state.stack];
                    }
                    break;
                }
            }
        }

        if (state.stars === 0) {
            return { solved: true, steps: state.steps };
        }

        return { solved: false };
    }

    stop() {
        this.running = false;
    }

    instructionToString(instr) {
        const cond = Math.floor(instr / 100);
        const opcode = instr % 100;
        const opcodeNames = { 0: 'NO', 1: 'FW', 2: 'TL', 3: 'TR', 4: 'P1', 5: 'P2', 6: 'P3', 7: 'F0', 8: 'F1', 9: 'F2' };
        const opcodeName = opcodeNames[opcode] || 'UNKNOWN';

        if (cond > 0) {
            return `C${cond}+${opcodeName}`;
        }
        return opcodeName;
    }
}
