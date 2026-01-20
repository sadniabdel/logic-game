// Constraint-Based Solver (inspired by Zolver)
// Key insight: Most instruction sequences are INVALID
// Use constraint propagation to prune them BEFORE testing

class ConstraintSolver {
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

        // Sort functions by size (largest first - Zolver optimization)
        const funcOrder = functionLengths
            .map((len, idx) => ({ idx, len }))
            .sort((a, b) => b.len - a.len)
            .map(f => f.idx);

        // Iterative deepening by total instructions used
        for (let totalInstr = 1; totalInstr <= functionLengths.reduce((a, b) => a + b, 0); totalInstr++) {
            if (!this.running) return { solved: false, tested, cancelled: true };
            if (Date.now() - startTime > timeoutMs) return { solved: false, tested, timeout: true };

            if (onProgress) {
                onProgress(tested, `depth ${totalInstr}`);
                await new Promise(resolve => setTimeout(resolve, 0));
            }

            // Try to build program with exactly totalInstr instructions
            const result = this.tryBuildProgram(
                levelData,
                instructions,
                functionLengths,
                funcOrder,
                totalInstr,
                (prog) => {
                    tested++;
                    if (tested % 500 === 0 && onProgress) {
                        onProgress(tested, `depth ${totalInstr}`);
                    }
                    return Date.now() - startTime < timeoutMs;
                }
            );

            if (result.solved) {
                return { solved: true, program: result.program, steps: result.steps, tested };
            }

            if (Date.now() - startTime > timeoutMs) {
                return { solved: false, tested, timeout: true };
            }
        }

        return { solved: false, tested };
    }

    tryBuildProgram(levelData, instructions, funcLengths, funcOrder, targetTotal, progressCallback) {
        const program = funcLengths.map(() => []);

        // Recursive generator
        const search = (funcIdx, usedTotal) => {
            if (funcIdx >= funcOrder.length) {
                // All functions filled, test program
                if (usedTotal === targetTotal) {
                    if (!progressCallback()) return { solved: false };

                    const result = this.executeProgram(levelData, program);
                    if (result.solved) {
                        return { solved: true, program: program.map(f => [...f]), steps: result.steps };
                    }
                }
                return { solved: false };
            }

            const realIdx = funcOrder[funcIdx];
            const maxLen = Math.min(funcLengths[realIdx], targetTotal - usedTotal);

            // Try all valid lengths for this function
            for (let len = 0; len <= maxLen; len++) {
                // Build this function with constraints
                const result = this.fillFunction(
                    program,
                    realIdx,
                    len,
                    instructions,
                    (prog) => {
                        // After filling this function, try next function
                        return search(funcIdx + 1, usedTotal + len);
                    }
                );

                if (result.solved) return result;
            }

            return { solved: false };
        };

        return search(0, 0);
    }

    fillFunction(program, funcIdx, targetLen, allInstructions, onComplete) {
        if (targetLen === 0) {
            return onComplete(program);
        }

        // Start with all instructions allowed
        const search = (pos, constraints) => {
            if (pos >= targetLen) {
                return onComplete(program);
            }

            const allowed = this.getValidInstructions(constraints, allInstructions);

            for (const instr of allowed) {
                program[funcIdx][pos] = instr;

                // Calculate new constraints after adding this instruction
                const newConstraints = this.propagateConstraints(constraints, instr, pos, targetLen);

                // If constraints allow continuation, recurse
                if (newConstraints !== null) {
                    const result = search(pos + 1, newConstraints);
                    if (result.solved) return result;
                }

                program[funcIdx][pos] = null;
            }

            return { solved: false };
        };

        return search(0, { leftTurns: 0, rightTurns: 0, lastPaint: null, terminated: false });
    }

    propagateConstraints(constraints, instruction, pos, maxLen) {
        const cond = Math.floor(instruction / 100);
        const opcode = instruction % 100;

        const newConstraints = { ...constraints };

        // OPTIMIZATION 1: Post-call elimination
        // After unconditional function call, function is terminated
        if (cond === 0 && (opcode === this.INST.F0 || opcode === this.INST.F1 || opcode === this.INST.F2)) {
            newConstraints.terminated = true;
        }

        // OPTIMIZATION 2: Post-paint tracking
        // Track last paint to eliminate incompatible conditionals
        if (opcode === this.INST.P1) newConstraints.lastPaint = 1;
        if (opcode === this.INST.P2) newConstraints.lastPaint = 2;
        if (opcode === this.INST.P3) newConstraints.lastPaint = 3;

        // OPTIMIZATION 3: Roundabout elimination
        // Prevent TL+TL+TR or TR+TR+TL patterns
        if (opcode === this.INST.TL) {
            newConstraints.leftTurns++;
            newConstraints.rightTurns = 0;
            // Two left turns = 180 degrees, next can't be right turn
            if (newConstraints.leftTurns >= 2) {
                newConstraints.noRightTurn = true;
            }
        } else if (opcode === this.INST.TR) {
            newConstraints.rightTurns++;
            newConstraints.leftTurns = 0;
            // Two right turns = 180 degrees, next can't be left turn
            if (newConstraints.rightTurns >= 2) {
                newConstraints.noLeftTurn = true;
            }
        } else {
            // Non-turn instruction resets turn counters
            newConstraints.leftTurns = 0;
            newConstraints.rightTurns = 0;
            newConstraints.noLeftTurn = false;
            newConstraints.noRightTurn = false;
        }

        return newConstraints;
    }

    getValidInstructions(constraints, allInstructions) {
        if (constraints.terminated) {
            // After unconditional call, only NO-OP makes sense
            // But we can just skip - return empty
            return [];
        }

        let valid = [...allInstructions];

        // Apply roundabout constraints
        if (constraints.noLeftTurn) {
            valid = valid.filter(i => i % 100 !== this.INST.TL);
        }
        if (constraints.noRightTurn) {
            valid = valid.filter(i => i % 100 !== this.INST.TR);
        }

        // Post-paint optimization: after painting color X,
        // conditionals on other colors are likely useless (unless moving)
        // This is a weak hint, not a hard constraint

        return valid;
    }

    buildInstructions(activeInstructions) {
        const INST = this.INST;
        const COND = { C1: 1, C2: 2, C3: 3 };

        const result = [];

        for (const name of activeInstructions) {
            if (INST[name] !== undefined) {
                // Unconditional instruction
                result.push(INST[name]);
            } else if (name.startsWith('C')) {
                // Conditional - need to combine with opcodes
                const condNum = COND[name];
                // Combine with all available opcodes
                for (const opName of activeInstructions) {
                    if (INST[opName] !== undefined) {
                        result.push(condNum * 100 + INST[opName]);
                    }
                }
            }
        }

        // Remove duplicates
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

            // Check condition
            if (cond > 0) {
                const tileValue = state.board[state.y][state.x];
                const tileColor = tileValue % 4;
                if (tileColor !== cond) {
                    continue;
                }
            }

            // Execute opcode
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
