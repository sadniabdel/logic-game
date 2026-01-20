#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Instruction codes
const INST = {
    NO: 0, FW: 1, TL: 2, TR: 3,
    P1: 4, P2: 5, P3: 6,
    F0: 7, F1: 8, F2: 9
};

const COND = { C1: 1, C2: 2, C3: 3 };

function nameToCode(name) {
    if (INST[name] !== undefined) return INST[name];
    if (COND[name] !== undefined) return COND[name] * 100;
    return null;
}

function encodeInstruction(cond, opcode) {
    return (cond || 0) * 100 + opcode;
}

function decodeInstruction(instr) {
    const cond = Math.floor(instr / 100);
    const opcode = instr % 100;
    return { cond, opcode };
}

function instructionToString(instr) {
    const { cond, opcode } = decodeInstruction(instr);
    const opcodeNames = { 0: 'NO', 1: 'FW', 2: 'TL', 3: 'TR', 4: 'P1', 5: 'P2', 6: 'P3', 7: 'F0', 8: 'F1', 9: 'F2' };
    const condNames = { 0: '', 1: 'C1+', 2: 'C2+', 3: 'C3+' };
    return condNames[cond] + opcodeNames[opcode];
}

// Build legal instruction set from activeInstructions
function buildInstructionSet(activeInstructions) {
    const opcodes = [];
    const conds = [];

    for (const name of activeInstructions) {
        if (INST[name] !== undefined) opcodes.push(INST[name]);
        if (COND[name] !== undefined) conds.push(COND[name]);
    }

    const instructionSet = [];

    // Unconditional opcodes
    for (const op of opcodes) {
        instructionSet.push(encodeInstruction(0, op));
    }

    // Conditional opcodes
    for (const cond of conds) {
        for (const op of opcodes) {
            instructionSet.push(encodeInstruction(cond, op));
        }
    }

    return instructionSet;
}

// Execute program using stack-based model
function executeProgram(levelData, programFunctions, maxSteps = 10000) {
    let state = {
        x: levelData.player.x,
        y: levelData.player.y,
        dir: levelData.player.direction,
        stars: levelData.stars,
        board: levelData.board.map(row => [...row]),
        stack: [...programFunctions[0]], // Start with F0
        steps: 0
    };

    while (state.steps < maxSteps && state.stack.length > 0) {
        // Win condition
        if (state.stars === 0) {
            return { solved: true, steps: state.steps };
        }

        // Stack overflow check
        if (state.stack.length > 100) {
            return { solved: false };
        }

        // Pop instruction from front of stack
        const instr = state.stack.shift();
        state.steps++;

        const { cond, opcode } = decodeInstruction(instr);

        // Check condition
        if (cond > 0) {
            const tileValue = state.board[state.y][state.x];
            const tileColor = tileValue % 4;
            if (tileColor !== cond) {
                continue; // Skip this instruction
            }
        }

        // Execute opcode
        switch (opcode) {
            case INST.FW: {
                // JSON direction encoding: 0=left, 1=up, 2=right, 3=down
                const dx = [-1, 0, 1, 0];
                const dy = [0, -1, 0, 1];
                const newX = state.x + dx[state.dir];
                const newY = state.y + dy[state.dir];

                if (newX < 0 || newX >= 16 || newY < 0 || newY >= 16) {
                    return { solved: false }; // Out of bounds
                }

                const targetCell = state.board[newY][newX];
                if (targetCell === 0) {
                    return { solved: false }; // Void tile
                }

                state.x = newX;
                state.y = newY;

                // Collect star
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
                    // Prepend function instructions to stack
                    state.stack = [...programFunctions[funcIndex], ...state.stack];
                }
                break;
            }
        }
    }

    // Check if won
    if (state.stars === 0) {
        return { solved: true, steps: state.steps };
    }

    return { solved: false };
}

// Generate all programs for given function slots
function* generatePrograms(instructionSet, functionLengths, maxTotalInstructions) {
    const numFuncs = functionLengths.length;

    function* genFunc(funcIndex, totalUsed) {
        if (funcIndex === numFuncs) {
            if (totalUsed > 0) {
                yield Array(numFuncs).fill([]);
            }
            return;
        }

        const maxLen = Math.min(functionLengths[funcIndex], maxTotalInstructions - totalUsed);

        // Try lengths from 0 to maxLen for this function
        for (let len = 0; len <= maxLen; len++) {
            function* genInstructions(currentLen, seq) {
                if (currentLen === 0) {
                    // Generate rest of functions
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

// Solve level
function solveLevel(levelData, timeoutMs = 30000) {
    const startTime = Date.now();

    const availableInstructions = levelData.activeInstructions || [];
    const functionLengths = (levelData.functions || [{ length: 12 }]).map(f => f.length);

    // Empty program test
    if (availableInstructions.length === 0) {
        const emptyProgram = functionLengths.map(() => []);
        const result = executeProgram(levelData, emptyProgram);
        if (result.solved) {
            return { solved: true, program: emptyProgram, steps: result.steps, tested: 1 };
        }
        return { solved: false, tested: 1 };
    }

    const instructionSet = buildInstructionSet(availableInstructions);
    let tested = 0;

    // Iterative deepening by total instruction count
    for (let maxTotal = 1; maxTotal <= 12; maxTotal++) {
        for (const program of generatePrograms(instructionSet, functionLengths, maxTotal)) {
            if (Date.now() - startTime > timeoutMs) {
                return { solved: false, tested };
            }

            const result = executeProgram(levelData, program);
            tested++;

            if (result.solved) {
                return { solved: true, program, steps: result.steps, tested };
            }
        }
    }

    return { solved: false, tested };
}

// Main
function main() {
    console.log('🎮 ZZLE Correct Stack-Based Solver\n');

    const levelsDir = path.join(__dirname, 'assets', 'zzle-levels');
    const results = [];

    let solvedCount = 0;
    let totalSteps = 0;

    console.log('========================================');

    for (let levelNum = 1; levelNum <= 20; levelNum++) { // Test first 20 levels only
        const levelPath = path.join(levelsDir, `${levelNum}.json`);

        if (!fs.existsSync(levelPath)) {
            console.log(`⚠️  Level ${levelNum}: File not found`);
            continue;
        }

        const levelData = JSON.parse(fs.readFileSync(levelPath, 'utf8'));
        const functionLengths = (levelData.functions || [{ length: 12 }]).map(f => f.length);

        console.log(`Testing level ${levelNum}...`);
        const result = solveLevel(levelData, 30000);

        if (result.solved) {
            console.log(`✅ Level ${levelNum}: Solved in ${result.steps} steps (tested ${result.tested} programs)`);

            // Format solution
            const solutionLines = result.program.map((func, i) => {
                if (func.length === 0) return null;
                return `F${i}=[${func.map(instructionToString).join(', ')}]`;
            }).filter(x => x);

            console.log(`   ${solutionLines.join(' ; ')}`);

            solvedCount++;
            totalSteps += result.steps;

            results.push({
                level: levelNum,
                solved: true,
                steps: result.steps,
                functionLengths: functionLengths.join(','),
                solution: solutionLines.join(' | '),
                startX: levelData.player.x,
                startY: levelData.player.y,
                startDir: levelData.player.direction,
                stars: levelData.stars
            });
        } else {
            console.log(`❌ Level ${levelNum}: No solution found (tested ${result.tested} programs)`);

            results.push({
                level: levelNum,
                solved: false,
                steps: 0,
                functionLengths: functionLengths.join(','),
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
    const csvPath = path.join(__dirname, `zzle-solutions-stack-${timestamp}.csv`);

    let csv = 'Level,Solved,Steps,Function_Lengths,Solution,Start_X,Start_Y,Start_Direction,Stars\n';
    for (const r of results) {
        csv += `${r.level},${r.solved ? 'Yes' : 'No'},${r.steps},"${r.functionLengths}","${r.solution}",${r.startX},${r.startY},${r.startDir},${r.stars}\n`;
    }

    fs.writeFileSync(csvPath, csv);

    console.log(`✅ CSV file generated: ${path.basename(csvPath)}`);
    console.log(`📁 Location: ${csvPath}\n`);
    console.log('🎉 Done!');
}

main();
