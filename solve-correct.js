#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Instruction codes
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

// An instruction is either a simple action or [condition, action]
// Examples: FW, [C1, FW], [C2, P3], etc.
// Each counts as 1 instruction slot

function executeProgram(levelData, program, maxSteps = 10000) {
    let state = {
        x: levelData.player.x,
        y: levelData.player.y,
        dir: levelData.player.direction,
        stars: levelData.stars,
        board: levelData.board.map(row => [...row]),
        pc: 0,
        callStack: [],
        steps: 0
    };

    const functions = program.functions || [];

    while (state.steps < maxSteps) {
        // Win condition
        if (state.stars === 0) {
            return { solved: true, steps: state.steps };
        }

        // Get current instruction
        let instruction;
        if (state.callStack.length > 0) {
            const frame = state.callStack[state.callStack.length - 1];
            const func = functions[frame.funcIndex];
            if (!func || frame.pc >= func.length) {
                state.callStack.pop();
                continue;
            }
            instruction = func[frame.pc];
            frame.pc++;
        } else {
            if (!functions[0] || state.pc >= functions[0].length) {
                break;
            }
            instruction = functions[0][state.pc];
            state.pc++;
        }

        state.steps++;

        // Instruction can be a single code or [condition, action]
        let condition = null;
        let action = instruction;

        if (Array.isArray(instruction)) {
            condition = instruction[0];
            action = instruction[1];
        }

        // Check condition if present
        if (condition !== null) {
            const currentColor = state.board[state.y][state.x] % 4 || (state.board[state.y][state.x] > 3 ? state.board[state.y][state.x] - 4 : 0);
            const requiredColor = condition === 100 ? 1 : (condition === 200 ? 2 : 3);
            if (currentColor !== requiredColor) {
                // Condition failed, skip this instruction
                continue;
            }
        }

        // Execute action
        switch (action) {
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
                const funcIndex = action - INST.F0;
                if (functions[funcIndex] && functions[funcIndex].length > 0) {
                    state.callStack.push({ funcIndex, pc: 0 });
                }
                break;
        }
    }

    return { solved: false };
}

// Generate instruction combinations
function generateInstructionSet(availableInstructionNames) {
    const codes = availableInstructionNames.map(nameToCode).filter(c => c !== null);

    const actions = codes.filter(c => c < 100); // FW, TL, TR, P1, P2, P3, F0, F1, F2
    const conditions = codes.filter(c => c >= 100); // C1, C2, C3

    const instructionSet = [...actions]; // Simple actions

    // Add conditional actions (only for FW, TL, TR, P1, P2, P3)
    const conditionalActions = actions.filter(a => a >= INST.FW && a <= INST.P3);
    for (const cond of conditions) {
        for (const act of conditionalActions) {
            instructionSet.push([cond, act]);
        }
    }

    return instructionSet;
}

function instructionToString(inst) {
    if (Array.isArray(inst)) {
        return `${INST_NAMES[inst[0]]}+${INST_NAMES[inst[1]]}`;
    }
    return INST_NAMES[inst];
}

// Generate programs
function* generatePrograms(instructionSet, maxLength) {
    function* gen(currentLength, seq) {
        if (currentLength === 0) {
            yield { functions: [seq] };
            return;
        }
        for (const inst of instructionSet) {
            yield* gen(currentLength - 1, [...seq, inst]);
        }
    }

    for (let len = 1; len <= maxLength; len++) {
        yield* gen(len, []);
    }
}

// Solve level
function solveLevel(levelData, timeoutMs = 10000) {
    const startTime = Date.now();

    const availableInstructions = levelData.activeInstructions || [];
    if (availableInstructions.length === 0) {
        const result = executeProgram(levelData, { functions: [[]] });
        if (result.solved) {
            return { solved: true, solution: [], steps: result.steps };
        }
        return { solved: false };
    }

    const instructionSet = generateInstructionSet(availableInstructions);
    const maxLength = levelData.functions && levelData.functions[0] ? levelData.functions[0].length : 12;

    let tested = 0;

    for (const program of generatePrograms(instructionSet, maxLength)) {
        if (Date.now() - startTime > timeoutMs) {
            return { solved: false, tested };
        }

        const result = executeProgram(levelData, program);
        tested++;

        if (result.solved) {
            const solution = program.functions[0].map(instructionToString);
            return { solved: true, solution, steps: result.steps, tested };
        }
    }

    return { solved: false, tested };
}

// Main
function main() {
    console.log('🎮 ZZLE Solver (Corrected Conditional Logic)\n');

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

        const result = solveLevel(levelData, 10000);

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
                solution: result.solution.join(' ; '),
                startX: levelData.player.x,
                startY: levelData.player.y,
                startDir: levelData.player.direction,
                stars: levelData.stars
            });
        } else {
            console.log(`❌ Level ${levelNum}: No solution found (tested ${result.tested || 0} programs)`);

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
    const csvPath = path.join(__dirname, `zzle-solutions-final-${timestamp}.csv`);

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
