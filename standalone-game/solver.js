// Auto Solver

class Solver {
    constructor() {
        this.running = false;
    }

    buildInstructionSet(activeInstructions) {
        const INST = { NO: 0, FW: 1, TL: 2, TR: 3, P1: 4, P2: 5, P3: 6, F0: 7, F1: 8, F2: 9 };
        const COND = { C1: 1, C2: 2, C3: 3 };

        const opcodes = [];
        const conds = [];

        for (const name of activeInstructions) {
            if (INST[name] !== undefined) opcodes.push(INST[name]);
            if (COND[name] !== undefined) conds.push(COND[name]);
        }

        const instructionSet = [];

        // Unconditional opcodes
        for (const op of opcodes) {
            instructionSet.push(op);
        }

        // Conditional opcodes
        for (const cond of conds) {
            for (const op of opcodes) {
                instructionSet.push(cond * 100 + op);
            }
        }

        return instructionSet;
    }

    * generatePrograms(instructionSet, functionLengths, maxTotalInstructions) {
        const numFuncs = functionLengths.length;

        function* genFunc(funcIndex, totalUsed) {
            if (funcIndex === numFuncs) {
                if (totalUsed > 0) {
                    yield Array(numFuncs).fill([]);
                }
                return;
            }

            const maxLen = Math.min(functionLengths[funcIndex], maxTotalInstructions - totalUsed);

            for (let len = 0; len <= maxLen; len++) {
                function* genInstructions(currentLen, seq) {
                    if (currentLen === 0) {
                        for (const rest of genFunc(funcIndex + 1, totalUsed + len)) {
                            const result = [...rest];
                            result[funcIndex] = seq;
                            yield result;
                        }
                        return;
                    }

                    for (const instr of instructionSet) {
                        yield* genInstructions(currentLen - 1, [...seq, instr]);
                    }
                }

                yield* genInstructions(len, []);
            }
        }

        yield* genFunc(0, 0);
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
            const INST = { NO: 0, FW: 1, TL: 2, TR: 3, P1: 4, P2: 5, P3: 6, F0: 7, F1: 8, F2: 9 };

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
                    if (programFunctions[funcIndex]) {
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

    async solve(levelData, timeoutMs = 30000, onProgress = null) {
        this.running = true;
        const startTime = Date.now();

        const availableInstructions = levelData.activeInstructions || [];
        const functionLengths = (levelData.functions || [{ length: 12 }]).map(f => f.length);

        // Empty program test
        if (availableInstructions.length === 0) {
            const emptyProgram = functionLengths.map(() => []);
            const result = this.executeProgram(levelData, emptyProgram);
            if (result.solved) {
                return { solved: true, program: emptyProgram, steps: result.steps, tested: 1 };
            }
            return { solved: false, tested: 1 };
        }

        const instructionSet = this.buildInstructionSet(availableInstructions);
        let tested = 0;

        // Iterative deepening
        for (let maxTotal = 1; maxTotal <= 12; maxTotal++) {
            if (!this.running) {
                return { solved: false, tested, cancelled: true };
            }

            for (const program of this.generatePrograms(instructionSet, functionLengths, maxTotal)) {
                if (!this.running) {
                    return { solved: false, tested, cancelled: true };
                }

                if (Date.now() - startTime > timeoutMs) {
                    return { solved: false, tested, timeout: true };
                }

                const result = this.executeProgram(levelData, program);
                tested++;

                if (tested % 10000 === 0 && onProgress) {
                    onProgress(tested, maxTotal);
                    // Allow UI to update
                    await new Promise(resolve => setTimeout(resolve, 0));
                }

                if (result.solved) {
                    return { solved: true, program, steps: result.steps, tested };
                }
            }
        }

        return { solved: false, tested };
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

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Solver };
}
