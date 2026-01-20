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

function nameToCode(name) {
    return INST[name] !== undefined ? INST[name] : null;
}

function codeToName(code) {
    return INST_NAMES[code] || 'UNKNOWN';
}

// Execute a program
function executeProgram(levelData, program, maxSteps = 10000) {
    let state = {
        x: levelData.player.x,
        y: levelData.player.y,
        dir: levelData.player.direction,
        stars: levelData.stars,
        board: levelData.board.map(row => [...row]),
        pc: 0, // Program counter
        callStack: [],
        steps: 0
    };

    const functions = program.functions || [];

    while (state.steps < maxSteps) {
        // Win condition
        if (state.stars === 0) {
            return { solved: true, steps: state.steps, program };
        }

        // Get current instruction
        let instruction;
        if (state.callStack.length > 0) {
            const frame = state.callStack[state.callStack.length - 1];
            const func = functions[frame.funcIndex];
            if (!func || frame.pc >= func.length) {
                state.callStack.pop(); // Return from function
                continue;
            }
            instruction = func[frame.pc];
            frame.pc++;
        } else {
            if (!functions[0] || state.pc >= functions[0].length) {
                break; // Program ended
            }
            instruction = functions[0][state.pc];
            state.pc++;
        }

        state.steps++;

        // Handle conditional check
        if (instruction >= 100) {
            const currentColor = state.board[state.y][state.x] % 4 || (state.board[state.y][state.x] > 3 ? state.board[state.y][state.x] - 4 : 0);
            const requiredColor = instruction === 100 ? 1 : (instruction === 200 ? 2 : 3);
            if (currentColor !== requiredColor) {
                // Skip next instruction
                if (state.callStack.length > 0) {
                    state.callStack[state.callStack.length - 1].pc++;
                } else {
                    state.pc++;
                }
            }
            continue;
        }

        // Execute instruction
        switch (instruction) {
            case INST.FW: {
                const dx = [-1, 0, 1, 0];
                const dy = [0, -1, 0, 1];
                const newX = state.x + dx[state.dir];
                const newY = state.y + dy[state.dir];

                if (newX < 0 || newX >= 16 || newY < 0 || newY >= 16) {
                    return { solved: false }; // Out of bounds
                }

                const targetCell = state.board[newY][newX];
                if (targetCell === 0) {
                    return { solved: false }; // Can't move
                }

                state.x = newX;
                state.y = newY;

                // Pick up star
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
                state.board[state.y][state.x] = (state.board[state.y][state.x] > 3 ? 5 : 1);
                break;

            case INST.P2:
                state.board[state.y][state.x] = (state.board[state.y][state.x] > 3 ? 6 : 2);
                break;

            case INST.P3:
                state.board[state.y][state.x] = (state.board[state.y][state.x] > 3 ? 7 : 3);
                break;

            case INST.F0:
            case INST.F1:
            case INST.F2:
                const funcIndex = instruction - INST.F0;
                if (functions[funcIndex] && functions[funcIndex].length > 0) {
                    state.callStack.push({ funcIndex, pc: 0 });
                }
                break;
        }
    }

    return { solved: false };
}

// Generate candidate programs
function* generatePatterns(availableInstructions, maxFuncLength, maxTotalInstructions) {
    const codes = availableInstructions.map(nameToCode).filter(c => c !== null);

    // Pattern 1: Simple sequences in F0
    for (let len = 1; len <= Math.min(maxFuncLength, maxTotalInstructions); len++) {
        function* genSeq(currentLen, seq) {
            if (currentLen === 0) {
                yield { functions: [seq] };
                return;
            }
            for (const code of codes) {
                yield* genSeq(currentLen - 1, [...seq, code]);
            }
        }
        yield* genSeq(len, []);
    }
}

// Solve level
function solveLevel(levelData, timeoutMs = 5000) {
    const startTime = Date.now();

    // Empty instruction set
    const availableInstructions = levelData.activeInstructions || [];
    if (availableInstructions.length === 0) {
        const result = executeProgram(levelData, { functions: [[]] });
        if (result.solved) {
            return { solved: true, solution: [], steps: result.steps };
        }
        return { solved: false };
    }

    const maxFuncLength = levelData.functions && levelData.functions[0] ? levelData.functions[0].length : 12;

    let tested = 0;

    // Try patterns of increasing complexity
    for (let maxInst = 1; maxInst <= maxFuncLength; maxInst++) {
        for (const program of generatePatterns(availableInstructions, maxFuncLength, maxInst)) {
            if (Date.now() - startTime > timeoutMs) {
                console.log(`   [Timeout after testing ${tested} programs]`);
                return { solved: false };
            }

            const result = executeProgram(levelData, program);
            tested++;

            if (result.solved) {
                const solution = program.functions[0].map(codeToName);
                return { solved: true, solution, steps: result.steps, tested };
            }
        }
    }

    console.log(`   [Tested ${tested} programs]`);
    return { solved: false, tested };
}

// Main
function main() {
    console.log('🎮 ZZLE Pattern-Based Solver\n');

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

        const result = solveLevel(levelData, 5000);

        if (result.solved) {
            console.log(`✅ Level ${levelNum}: Solved in ${result.steps} steps (tested ${result.tested} programs)`);
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
    const csvPath = path.join(__dirname, `zzle-solutions-pattern-${timestamp}.csv`);

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
