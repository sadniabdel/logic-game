// Auto Solver with Program Synthesis

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

        const unconditional = [];
        const conditional = [];

        // Unconditional opcodes (try these first - simpler)
        for (const op of opcodes) {
            unconditional.push(op);
        }

        // Conditional opcodes (try these later - more complex)
        for (const cond of conds) {
            for (const op of opcodes) {
                conditional.push(cond * 100 + op);
            }
        }

        return { unconditional, conditional, all: [...unconditional, ...conditional] };
    }

    * generatePrograms(instructionSet, functionLengths, maxTotalInstructions, unconditionalOnly = false) {
        const numFuncs = functionLengths.length;

        // Choose which instructions to use
        const instrList = unconditionalOnly ?
            instructionSet.unconditional :
            [...instructionSet.unconditional, ...instructionSet.conditional];

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

                    for (const instr of instrList) {
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

        // Key insight: most solutions use only a small subset of available instructions
        // Try programs using instruction subsets of increasing size
        const allInstr = [...instructionSet.unconditional, ...instructionSet.conditional];
        const maxInstrInSubset = Math.min(allInstr.length, 8);

        for (let subsetSize = 3; subsetSize <= maxInstrInSubset; subsetSize++) {
            // Generate instruction subsets to try
            const subsets = this.generateInstructionSubsets(allInstr, subsetSize, instructionSet.unconditional);

            for (const subset of subsets) {
                if (!this.running) return { solved: false, tested, cancelled: true };
                if (Date.now() - startTime > timeoutMs) return { solved: false, tested, timeout: true };

                // Try all programs using only this subset
                const subsetInstrSet = { unconditional: subset, conditional: [], all: subset };
                const maxDepth = Math.min(functionLengths.reduce((a, b) => a + b, 0), 8);

                for (let depth = 1; depth <= maxDepth; depth++) {
                    let depthCount = 0;
                    const maxPerDepth = 5000;

                    for (const program of this.generatePrograms(subsetInstrSet, functionLengths, depth, false)) {
                        if (!this.running) return { solved: false, tested, cancelled: true };
                        if (Date.now() - startTime > timeoutMs) return { solved: false, tested, timeout: true };

                        const result = this.executeProgram(levelData, program);
                        tested++;
                        depthCount++;

                        if (tested % 1000 === 0 && onProgress) {
                            onProgress(tested, `subset ${subsetSize}, depth ${depth}`);
                            await new Promise(resolve => setTimeout(resolve, 0));
                        }

                        if (result.solved) {
                            return { solved: true, program, steps: result.steps, tested };
                        }

                        if (depthCount >= maxPerDepth) break;
                    }
                }
            }
        }

        return { solved: false, tested };
    }

    * generateInstructionSubsets(allInstr, size, priorityInstr) {
        // Generate useful instruction subsets
        // Priority: include function calls (F0, F1, F2) and movement (FW, TL, TR)
        const funcCalls = allInstr.filter(i => i >= 7 && i <= 9);
        const movement = allInstr.filter(i => i >= 1 && i <= 3);
        const paint = allInstr.filter(i => i >= 4 && i <= 6);
        const conditional = allInstr.filter(i => i >= 100);

        // Strategy 1: Movement + conditionals
        if (size >= 3 && movement.length > 0 && conditional.length > 0) {
            const base = movement.slice(0, Math.min(2, size - 1));
            for (let i = 0; i < Math.min(conditional.length, size - base.length); i++) {
                yield [...base, ...conditional.slice(i, i + size - base.length)];
            }
        }

        // Strategy 2: Movement + paint + conditionals
        if (size >= 4 && movement.length > 0 && paint.length > 0 && conditional.length > 0) {
            yield [...movement.slice(0, 2), ...paint.slice(0, 1), ...conditional.slice(0, size - 3)];
        }

        // Strategy 3: Include function calls for recursive solutions
        if (size >= 4 && funcCalls.length > 0 && movement.length > 0) {
            yield [...movement.slice(0, 2), ...funcCalls.slice(0, Math.min(2, size - 2)), ...conditional.slice(0, Math.max(0, size - 4))];
        }

        // Strategy 4: Random useful subsets
        for (let attempt = 0; attempt < 5; attempt++) {
            const subset = [];
            // Always include at least one movement
            if (movement.length > 0) subset.push(movement[Math.floor(Math.random() * movement.length)]);
            // Fill rest randomly
            while (subset.length < size && allInstr.length > 0) {
                const instr = allInstr[Math.floor(Math.random() * allInstr.length)];
                if (!subset.includes(instr)) subset.push(instr);
            }
            if (subset.length === size) yield subset;
        }
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
