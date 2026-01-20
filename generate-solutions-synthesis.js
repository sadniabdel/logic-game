#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Instruction encoding
const INST = {
    NO: 0, FW: 1, TL: 2, TR: 3,
    P1: 4, P2: 5, P3: 6,
    F0: 7, F1: 8, F2: 9,
    C1: 100, C2: 200, C3: 300
};

const INST_NAMES = {
    0: 'NO', 1: 'FW', 2: 'TL', 3: 'TR',
    4: 'P1', 5: 'P2', 6: 'P3',
    7: 'F0', 8: 'F1', 9: 'F2',
    100: 'C1', 200: 'C2', 300: 'C3'
};

// Convert instruction name to code
function nameToCode(name) {
    return INST[name] !== undefined ? INST[name] : null;
}

// Deep clone state
function cloneState(state) {
    return {
        x: state.x,
        y: state.y,
        dir: state.dir,
        stars: state.stars,
        board: state.board.map(row => [...row]),
        functions: state.functions.map(f => ({...f, instructions: [...f.instructions]})),
        instructionPointer: state.instructionPointer,
        callStack: [...state.callStack],
        steps: state.steps
    };
}

// Execute a single instruction
function executeInstruction(state, instruction, maxSteps = 10000) {
    const {x, y, dir, board, stars} = state;
    const newState = cloneState(state);

    // Check step limit
    if (newState.steps >= maxSteps) {
        return null;
    }
    newState.steps++;

    const currentColor = board[y][x] % 4 || (board[y][x] > 3 ? board[y][x] - 4 : 0);

    // Handle conditional instructions
    if (instruction >= 100) {
        const requiredColor = instruction === 100 ? 1 : (instruction === 200 ? 2 : 3);
        if (currentColor !== requiredColor) {
            return newState; // Skip next instruction
        }
        return newState;
    }

    switch (instruction) {
        case INST.NO:
            return newState;

        case INST.FW: {
            const dx = [-1, 0, 1, 0];
            const dy = [0, -1, 0, 1];
            const newX = x + dx[dir];
            const newY = y + dy[dir];

            if (newX < 0 || newX >= 16 || newY < 0 || newY >= 16) {
                return null; // Out of bounds
            }

            const targetCell = board[newY][newX];
            if (targetCell === 0) {
                return null; // Can't move to empty cell
            }

            newState.x = newX;
            newState.y = newY;

            // Pick up star if present
            if (targetCell > 3) {
                newState.board[newY][newX] -= 4;
                newState.stars--;
            }

            return newState;
        }

        case INST.TL:
            newState.dir = (dir + 3) % 4;
            return newState;

        case INST.TR:
            newState.dir = (dir + 1) % 4;
            return newState;

        case INST.P1:
            newState.board[y][x] = (board[y][x] > 3 ? 5 : 1);
            return newState;

        case INST.P2:
            newState.board[y][x] = (board[y][x] > 3 ? 6 : 2);
            return newState;

        case INST.P3:
            newState.board[y][x] = (board[y][x] > 3 ? 7 : 3);
            return newState;

        case INST.F0:
        case INST.F1:
        case INST.F2: {
            const funcIndex = instruction - INST.F0;
            newState.callStack.push({
                functionIndex: state.instructionPointer.functionIndex,
                instructionIndex: state.instructionPointer.instructionIndex + 1
            });
            newState.instructionPointer = {
                functionIndex: funcIndex,
                instructionIndex: 0
            };
            return newState;
        }

        default:
            return newState;
    }
}

// Execute a program (function definitions)
function executeProgram(levelData, functions, maxSteps = 10000) {
    let state = {
        x: levelData.player.x,
        y: levelData.player.y,
        dir: levelData.player.direction,
        stars: levelData.stars,
        board: levelData.board.map(row => [...row]),
        functions: functions,
        instructionPointer: { functionIndex: 0, instructionIndex: 0 },
        callStack: [],
        steps: 0
    };

    while (state.steps < maxSteps) {
        // Check win condition
        if (state.stars === 0) {
            return { solved: true, steps: state.steps };
        }

        const {functionIndex, instructionIndex} = state.instructionPointer;
        const currentFunction = state.functions[functionIndex];

        // If we've finished this function
        if (instructionIndex >= currentFunction.instructions.length) {
            if (state.callStack.length === 0) {
                // Program finished without collecting all stars
                return { solved: false };
            }
            // Return from function call
            state.instructionPointer = state.callStack.pop();
            continue;
        }

        const instruction = currentFunction.instructions[instructionIndex];

        // Execute instruction
        const newState = executeInstruction(state, instruction, maxSteps);

        if (newState === null) {
            // Invalid move or step limit
            return { solved: false };
        }

        state = newState;

        // Move to next instruction if not a function call
        if (instruction < INST.F0 || instruction > INST.F2) {
            state.instructionPointer.instructionIndex++;
        }
    }

    return { solved: false };
}

// Generate all programs up to a certain total length
function* generatePrograms(availableInstructions, functionLengths, totalLength) {
    const funcCount = functionLengths.length;

    function* generate(funcIndex, remaining) {
        if (funcIndex === funcCount) {
            if (remaining === 0) {
                yield functionLengths.map(() => ({ instructions: [] }));
            }
            return;
        }

        const maxLen = Math.min(functionLengths[funcIndex], remaining);

        for (let len = 0; len <= maxLen; len++) {
            // Generate all instruction sequences of length len
            function* genInstructions(currentLen, currentSeq) {
                if (currentLen === 0) {
                    for (const restFuncs of generate(funcIndex + 1, remaining - len)) {
                        const result = [...restFuncs];
                        result[funcIndex] = { instructions: [...currentSeq] };
                        yield result;
                    }
                    return;
                }

                for (const inst of availableInstructions) {
                    yield* genInstructions(currentLen - 1, [...currentSeq, inst]);
                }
            }

            yield* genInstructions(len, []);
        }
    }

    yield* generate(0, totalLength);
}

// Solve a level using program synthesis
function solveLevelSynthesis(levelData, maxProgramLength = 12, maxSteps = 10000) {
    // Parse available instructions
    const availableInstructions = (levelData.activeInstructions || []).map(nameToCode).filter(c => c !== null);

    // If no instructions available, try empty program
    if (availableInstructions.length === 0) {
        const functions = (levelData.functions || []).map(() => ({ instructions: [] }));
        const result = executeProgram(levelData, functions, maxSteps);
        if (result.solved) {
            return { solved: true, solution: [], steps: result.steps };
        }
        return { solved: false };
    }

    const functionLengths = (levelData.functions || []).map(f => f.length || 12);

    // Try programs of increasing length (iterative deepening)
    for (let totalLen = 1; totalLen <= maxProgramLength; totalLen++) {
        let tested = 0;
        const maxTests = 100000; // Limit tests per length

        for (const program of generatePrograms(availableInstructions, functionLengths, totalLen)) {
            const result = executeProgram(levelData, program, maxSteps);

            if (result.solved) {
                // Convert program to instruction sequence
                const solution = program[0].instructions.map(code => INST_NAMES[code]);
                return { solved: true, solution, steps: result.steps };
            }

            tested++;
            if (tested >= maxTests) {
                break;
            }
        }
    }

    return { solved: false };
}

// Main function
function main() {
    console.log('🎮 ZZLE Program Synthesis Solver\n');

    const levelsDir = path.join(__dirname, 'assets', 'zzle-levels');
    const results = [];

    let solvedCount = 0;
    let totalSteps = 0;

    console.log('========================================');

    for (let levelNum = 1; levelNum <= 116; levelNum++) {
        const levelPath = path.join(levelsDir, `${levelNum}.json`);

        if (!fs.existsSync(levelPath)) {
            console.log(`⚠️  Level ${levelNum}: File not found`);
            continue;
        }

        const levelData = JSON.parse(fs.readFileSync(levelPath, 'utf8'));
        const maxAllowed = levelData.functions && levelData.functions[0] ? levelData.functions[0].length : 12;

        const result = solveLevelSynthesis(levelData);

        if (result.solved) {
            console.log(`✅ Level ${levelNum}: Solved in ${result.steps} steps (max: ${maxAllowed})`);
            console.log(`   Solution: ${result.solution.join(', ')}`);
            solvedCount++;
            totalSteps += result.steps;

            results.push({
                level: levelNum,
                solved: true,
                steps: result.steps,
                maxAllowed,
                solution: result.solution.join(','),
                startX: levelData.player.x,
                startY: levelData.player.y,
                startDir: levelData.player.direction,
                stars: levelData.stars
            });
        } else {
            console.log(`❌ Level ${levelNum}: No solution found`);

            results.push({
                level: levelNum,
                solved: false,
                steps: 0,
                maxAllowed,
                solution: 'NO SOLUTION',
                startX: levelData.player.x,
                startY: levelData.player.y,
                startDir: levelData.player.direction,
                stars: levelData.stars
            });
        }
    }

    console.log('========================================');
    console.log(`📊 Statistics:`);
    console.log(`   Total Levels: 116`);
    console.log(`   Solved: ${solvedCount}`);
    console.log(`   Unsolved: ${116 - solvedCount}`);
    if (solvedCount > 0) {
        console.log(`   Average Steps: ${(totalSteps / solvedCount).toFixed(1)}`);
    }
    console.log('========================================\n');

    // Write CSV
    const timestamp = new Date().toISOString().replace(/:/g, '-').split('.')[0];
    const csvPath = path.join(__dirname, `zzle-solutions-synthesis-${timestamp}.csv`);

    let csv = 'Level,Solved,Steps,Max_Allowed,Solution,Start_X,Start_Y,Start_Direction,Stars\n';
    for (const r of results) {
        csv += `${r.level},${r.solved ? 'Yes' : 'No'},${r.steps},${r.maxAllowed},"${r.solution}",${r.startX},${r.startY},${r.startDir},${r.stars}\n`;
    }

    fs.writeFileSync(csvPath, csv);

    console.log(`✅ CSV file generated: ${path.basename(csvPath)}`);
    console.log(`📁 Location: ${csvPath}\n`);
    console.log('🎉 Done!');
}

main();
