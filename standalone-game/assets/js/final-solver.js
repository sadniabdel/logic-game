// Final Solver with Loop Detection and State Caching
// Based on proven techniques from successful solvers

class FinalSolver {
    constructor() {
        this.running = false;
        this.INST = { NO: 0, FW: 1, TL: 2, TR: 3, P1: 4, P2: 5, P3: 6, F0: 7, F1: 8, F2: 9 };
        this.stateCache = new Map();
    }

    async solve(levelData, timeoutMs = 30000, onProgress = null) {
        this.running = true;
        const startTime = Date.now();

        const availableInstructions = levelData.activeInstructions || [];
        const functionLengths = (levelData.functions || [{ length: 12 }]).map(f => f.length);

        const instructions = this.buildInstructions(availableInstructions);
        let tested = 0;

        // Iterative deepening by TOTAL instruction count
        const maxTotal = Math.min(functionLengths.reduce((a, b) => a + b, 0), 10);

        for (let totalInstr = 1; totalInstr <= maxTotal; totalInstr++) {
            if (!this.running) return { solved: false, tested, cancelled: true };
            if (Date.now() - startTime > timeoutMs) return { solved: false, tested, timeout: true };

            this.stateCache.clear(); // Clear cache for each depth

            if (onProgress) {
                onProgress(tested, `depth ${totalInstr}`);
                await new Promise(resolve => setTimeout(resolve, 0));
            }

            // Try to build program with exactly totalInstr instructions
            const result = this.searchDepth(
                levelData,
                instructions,
                functionLengths,
                totalInstr,
                () => {
                    tested++;
                    if (tested % 500 === 0 && onProgress) {
                        onProgress(tested, `depth ${totalInstr}`);
                    }
                    return Date.now() - startTime < timeoutMs && this.running;
                }
            );

            if (result.solved) {
                return { ...result, tested };
            }
        }

        return { solved: false, tested };
    }

    searchDepth(levelData, instructions, funcLengths, targetTotal, progressCallback) {
        const program = funcLengths.map(() => []);

        // Use generators to avoid building all programs in memory
        const search = (funcIdx, usedTotal) => {
            if (funcIdx >= funcLengths.length) {
                if (usedTotal === targetTotal) {
                    if (!progressCallback()) return null;

                    // Test program with loop detection
                    const result = this.executeWithLoopDetection(levelData, program);
                    if (result.solved) {
                        return { solved: true, program: program.map(f => [...f]), steps: result.steps, instrCount: targetTotal };
                    }
                }
                return null;
            }

            const maxLen = Math.min(funcLengths[funcIdx], targetTotal - usedTotal);

            for (let len = 0; len <= maxLen; len++) {
                const result = this.fillFunction(program, funcIdx, len, instructions, funcLengths, () => {
                    return search(funcIdx + 1, usedTotal + len);
                });

                if (result) return result;
            }

            return null;
        };

        return search(0, 0) || { solved: false };
    }

    fillFunction(program, funcIdx, len, instructions, funcLengths, onComplete) {
        if (len === 0) {
            return onComplete();
        }

        program[funcIdx] = [];

        const search = (pos) => {
            if (pos >= len) {
                return onComplete();
            }

            // Try instructions in smart order
            const orderedInstr = this.orderInstructions(instructions, program[funcIdx], pos, funcLengths);

            for (const instr of orderedInstr) {
                program[funcIdx][pos] = instr;

                // Early constraint check
                if (this.isValidSequence(program[funcIdx], pos, funcIdx, funcLengths)) {
                    const result = search(pos + 1);
                    if (result) return result;
                }
            }

            return null;
        };

        const result = search(0);
        program[funcIdx] = [];
        return result;
    }

    orderInstructions(instructions, currentSeq, pos, funcLengths) {
        // Smart ordering: try most likely instructions first
        const ordered = [...instructions];

        // If empty, prefer FW (movement is often first)
        if (pos === 0) {
            ordered.sort((a, b) => {
                const aOp = a % 100;
                const bOp = b % 100;
                // Prioritize: FW > TL/TR > F0/F1 > others
                const priority = { 1: 10, 2: 8, 3: 8, 7: 6, 8: 6, 4: 3, 5: 3, 6: 3 };
                return (priority[bOp] || 0) - (priority[aOp] || 0);
            });
        }

        return ordered;
    }

    isValidSequence(sequence, pos, funcIdx, funcLengths) {
        if (pos === 0) return true;

        const prev = sequence[pos - 1];
        const curr = sequence[pos];

        const prevOp = prev % 100;
        const currOp = curr % 100;

        // Constraint 1: After unconditional function call, nothing makes sense
        if (Math.floor(prev / 100) === 0 && (prevOp === this.INST.F0 || prevOp === this.INST.F1 || prevOp === this.INST.F2)) {
            return false; // Function terminated
        }

        // Constraint 2: Roundabout elimination (TL+TL+TR or TR+TR+TL)
        if (pos >= 2) {
            const prev2 = sequence[pos - 2];
            const prev2Op = prev2 % 100;

            // Two left turns followed by right turn
            if (prev2Op === this.INST.TL && prevOp === this.INST.TL && currOp === this.INST.TR) {
                return false;
            }
            // Two right turns followed by left turn
            if (prev2Op === this.INST.TR && prevOp === this.INST.TR && currOp === this.INST.TL) {
                return false;
            }
        }

        return true;
    }

    executeWithLoopDetection(levelData, programFunctions, maxSteps = 1000) {
        this.stateCache.clear();

        let state = {
            x: levelData.player.x,
            y: levelData.player.y,
            dir: levelData.player.direction,
            stars: levelData.stars,
            board: levelData.board.map(row => [...row]),
            stack: programFunctions[0] ? [...programFunctions[0]] : [],
            steps: 0
        };

        while (state.steps < maxSteps && state.stack.length > 0 && state.stack.length <= 100) {
            // Check win condition
            if (state.stars === 0) {
                return { solved: true, steps: state.steps };
            }

            // LOOP DETECTION: Hash current state
            const stateKey = this.hashState(state);
            if (this.stateCache.has(stateKey)) {
                // Loop detected - program will never terminate
                return { solved: false, loopDetected: true };
            }
            this.stateCache.set(stateKey, true);

            const instr = state.stack.shift();
            state.steps++;

            const cond = Math.floor(instr / 100);
            const opcode = instr % 100;

            // Check condition
            if (cond > 0) {
                const tileValue = state.board[state.y][state.x];
                const tileColor = tileValue % 4;
                if (tileColor !== cond) continue;
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

    hashState(state) {
        // Create unique hash for current game state
        // Include: position, direction, board state, stack (first few instructions)
        const stackPreview = state.stack.slice(0, 5).join(',');
        const boardHash = this.hashBoard(state.board);
        return `${state.x},${state.y},${state.dir},${state.stars},${stackPreview},${boardHash}`;
    }

    hashBoard(board) {
        // Quick board hash - only hash cells that matter
        let hash = '';
        for (let y = 0; y < board.length; y++) {
            for (let x = 0; x < board[y].length; x++) {
                if (board[y][x] > 0) {
                    hash += `${x}${y}${board[y][x]}`;
                }
            }
        }
        return hash;
    }

    buildInstructions(activeInstructions) {
        const INST = this.INST;
        const COND = { C1: 1, C2: 2, C3: 3 };
        const result = [];

        for (const name of activeInstructions) {
            if (INST[name] !== undefined) {
                result.push(INST[name]);
            }
        }

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
