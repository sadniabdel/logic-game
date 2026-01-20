// Smart Solver using Beam Search with Early Evaluation
class SmartSolver {
    constructor() {
        this.running = false;
    }

    async solve(levelData, timeoutMs = 30000, onProgress = null) {
        this.running = true;
        const startTime = Date.now();

        const availableInstructions = levelData.activeInstructions || [];
        const functionLengths = (levelData.functions || [{ length: 12 }]).map(f => f.length);

        // Analyze level to guide search
        const analysis = this.analyzeLevel(levelData);

        // Build instruction set with priorities
        const instructions = this.buildPrioritizedInstructions(availableInstructions, analysis);

        let tested = 0;
        const beamWidth = 100; // Keep top 100 programs at each step

        // Start with empty programs
        let beam = [functionLengths.map(() => [])];

        // Progressively build programs
        const maxTotalInstr = Math.min(functionLengths.reduce((a, b) => a + b, 0), 8);

        for (let depth = 1; depth <= maxTotalInstr; depth++) {
            if (!this.running) return { solved: false, tested, cancelled: true };
            if (Date.now() - startTime > timeoutMs) return { solved: false, tested, timeout: true };

            const candidates = [];

            // For each program in beam, try adding one instruction
            for (const program of beam) {
                // Try adding instruction to each function
                for (let funcIdx = 0; funcIdx < functionLengths.length; funcIdx++) {
                    if (program[funcIdx].length >= functionLengths[funcIdx]) continue;

                    // Try each instruction
                    for (const instr of instructions) {
                        if (!this.running) return { solved: false, tested, cancelled: true };
                        if (Date.now() - startTime > timeoutMs) return { solved: false, tested, timeout: true };

                        const newProgram = program.map((f, i) =>
                            i === funcIdx ? [...f, instr] : [...f]
                        );

                        // Early evaluation
                        const eval_result = this.evaluateProgram(levelData, newProgram);
                        tested++;

                        if (tested % 500 === 0 && onProgress) {
                            onProgress(tested, `depth ${depth}, beam ${candidates.length}`);
                            await new Promise(resolve => setTimeout(resolve, 0));
                        }

                        if (eval_result.solved) {
                            return { solved: true, program: newProgram, steps: eval_result.steps, tested };
                        }

                        if (eval_result.promising) {
                            candidates.push({
                                program: newProgram,
                                score: eval_result.score,
                                fitness: eval_result.fitness
                            });
                        }
                    }
                }
            }

            // Select top candidates for next beam
            candidates.sort((a, b) => b.fitness - a.fitness);
            beam = candidates.slice(0, beamWidth).map(c => c.program);

            if (beam.length === 0) {
                // Dead end, restart with different strategy
                break;
            }
        }

        return { solved: false, tested };
    }

    analyzeLevel(levelData) {
        const analysis = {
            stars: levelData.stars,
            hasConditionals: (levelData.activeInstructions || []).some(i => i.startsWith('C')),
            hasFunctions: (levelData.activeInstructions || []).some(i => i.startsWith('F')),
            hasPaint: (levelData.activeInstructions || []).some(i => i.startsWith('P')),
            boardSize: levelData.board.length,
            startPos: { x: levelData.player.x, y: levelData.player.y },
            startDir: levelData.player.direction
        };

        // Find star positions and colors
        analysis.starPositions = [];
        analysis.tileColors = new Set();

        for (let y = 0; y < levelData.board.length; y++) {
            for (let x = 0; x < levelData.board[y].length; x++) {
                const tile = levelData.board[y][x];
                if (tile > 3) {
                    analysis.starPositions.push({ x, y, color: tile % 4 });
                }
                if (tile > 0) {
                    analysis.tileColors.add(tile % 4);
                }
            }
        }

        return analysis;
    }

    buildPrioritizedInstructions(activeInstructions, analysis) {
        const INST = { NO: 0, FW: 1, TL: 2, TR: 3, P1: 4, P2: 5, P3: 6, F0: 7, F1: 8, F2: 9 };
        const COND = { C1: 1, C2: 2, C3: 3 };

        const instructions = [];

        // Always prioritize movement
        if (activeInstructions.includes('FW')) instructions.push(INST.FW);
        if (activeInstructions.includes('TL')) instructions.push(INST.TL);
        if (activeInstructions.includes('TR')) instructions.push(INST.TR);

        // Add function calls if available and stars > 1 (recursion likely needed)
        if (analysis.hasFunctions && analysis.stars > 1) {
            if (activeInstructions.includes('F0')) instructions.push(INST.F0);
            if (activeInstructions.includes('F1')) instructions.push(INST.F1);
            if (activeInstructions.includes('F2')) instructions.push(INST.F2);
        }

        // Add conditionals if available
        if (analysis.hasConditionals) {
            // Only add conditional combinations that match tile colors
            for (const name of activeInstructions) {
                if (name.startsWith('C')) {
                    const condNum = parseInt(name[1]);
                    // Combine with movement
                    if (activeInstructions.includes('FW')) instructions.push(COND[name] * 100 + INST.FW);
                    if (activeInstructions.includes('TL')) instructions.push(COND[name] * 100 + INST.TL);
                    if (activeInstructions.includes('TR')) instructions.push(COND[name] * 100 + INST.TR);

                    // Combine with paint if available
                    if (analysis.hasPaint) {
                        if (activeInstructions.includes('P1')) instructions.push(COND[name] * 100 + INST.P1);
                        if (activeInstructions.includes('P2')) instructions.push(COND[name] * 100 + INST.P2);
                        if (activeInstructions.includes('P3')) instructions.push(COND[name] * 100 + INST.P3);
                    }

                    // Combine with function calls
                    if (analysis.hasFunctions) {
                        if (activeInstructions.includes('F0')) instructions.push(COND[name] * 100 + INST.F0);
                        if (activeInstructions.includes('F1')) instructions.push(COND[name] * 100 + INST.F1);
                    }
                }
            }
        }

        // Add paint if needed
        if (analysis.hasPaint) {
            if (activeInstructions.includes('P1')) instructions.push(INST.P1);
            if (activeInstructions.includes('P2')) instructions.push(INST.P2);
            if (activeInstructions.includes('P3')) instructions.push(INST.P3);
        }

        return instructions;
    }

    evaluateProgram(levelData, programFunctions) {
        const INST = { NO: 0, FW: 1, TL: 2, TR: 3, P1: 4, P2: 5, P3: 6, F0: 7, F1: 8, F2: 9 };

        let state = {
            x: levelData.player.x,
            y: levelData.player.y,
            dir: levelData.player.direction,
            stars: levelData.stars,
            board: levelData.board.map(row => [...row]),
            stack: programFunctions[0] ? [...programFunctions[0]] : [],
            steps: 0,
            visited: new Set(),
            starsCollected: 0
        };

        const maxSteps = 200;
        const initialStars = state.stars;
        let positions = [];

        while (state.steps < maxSteps && state.stack.length > 0 && state.stack.length <= 100) {
            // Check win condition
            if (state.stars === 0) {
                return { solved: true, steps: state.steps, promising: true, score: 1000, fitness: 1000 };
            }

            // Track position
            positions.push({ x: state.x, y: state.y });
            state.visited.add(`${state.x},${state.y}`);

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
            switch (opcode) {
                case INST.FW: {
                    const dx = [-1, 0, 1, 0];
                    const dy = [0, -1, 0, 1];
                    const newX = state.x + dx[state.dir];
                    const newY = state.y + dy[state.dir];

                    if (newX < 0 || newX >= 16 || newY < 0 || newY >= 16) {
                        return { solved: false, promising: false, score: 0, fitness: 0 };
                    }

                    const targetCell = state.board[newY][newX];
                    if (targetCell === 0) {
                        return { solved: false, promising: false, score: 0, fitness: 0 };
                    }

                    state.x = newX;
                    state.y = newY;

                    if (targetCell > 3) {
                        state.board[newY][newX] -= 4;
                        state.stars--;
                        state.starsCollected++;
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

        // Calculate fitness score
        const starsCollected = initialStars - state.stars;
        const uniquePositions = state.visited.size;
        const terminated = state.stack.length === 0;

        let fitness = 0;
        fitness += starsCollected * 100; // Collecting stars is most important
        fitness += uniquePositions * 2;  // Exploring is good
        fitness -= state.steps * 0.1;    // Prefer shorter programs

        if (terminated) fitness -= 50;   // Penalize early termination
        if (state.stack.length > 100) fitness -= 100; // Penalize stack overflow

        const promising = starsCollected > 0 || uniquePositions > 3;

        return {
            solved: false,
            promising,
            score: starsCollected,
            fitness
        };
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
