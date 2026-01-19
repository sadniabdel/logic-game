#!/usr/bin/env node

/**
 * ZZLE Advanced Solutions Generator
 * Handles conditionals, paint operations, and function decomposition
 */

const fs = require('fs');
const path = require('path');

// Instruction mappings
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

// Direction vectors: 0=left, 1=up, 2=right, 3=down
const DX = [-1, 0, 1, 0];
const DY = [0, -1, 0, 1];

/**
 * Deep clone board state
 */
function cloneBoard(board) {
    return board.map(row => [...row]);
}

/**
 * Get state hash for visited tracking
 */
function getStateHash(state) {
    const boardHash = state.board.map(row => row.join(',')).join(';');
    return `${state.x},${state.y},${state.dir},${boardHash},${state.stars}`;
}

/**
 * Check if position is valid and walkable
 */
function isValidPosition(x, y, board) {
    if (x < 0 || x >= 16 || y < 0 || y >= 16) return false;
    return board[y][x] !== 0; // 0 = empty/not walkable
}

/**
 * Execute a single instruction and return new state
 */
function executeInstruction(state, instruction) {
    const {x, y, dir, board, stars, path} = state;
    const newState = {
        x, y, dir,
        board: cloneBoard(board),
        stars,
        path: [...path, INST_NAMES[instruction] || instruction]
    };

    const currentCell = board[y][x];
    const currentColor = currentCell % 4;

    // Handle conditionals
    if (instruction >= 100) {
        const requiredColor = instruction === 100 ? 1 : (instruction === 200 ? 2 : 3);
        if (currentColor !== requiredColor) {
            // Condition failed, skip instruction
            return newState;
        }
        return newState; // Condition passed, continue
    }

    switch (instruction) {
        case INST.FW: {
            // Move forward
            const newX = x + DX[dir];
            const newY = y + DY[dir];

            if (!isValidPosition(newX, newY, board)) {
                return null; // Dead
            }

            newState.x = newX;
            newState.y = newY;

            // Check if we picked up a star
            if (board[newY][newX] > 3) {
                newState.board[newY][newX] -= 4; // Remove star
                newState.stars = stars - 1;
            }
            break;
        }

        case INST.TL:
            newState.dir = (dir + 3) % 4;
            break;

        case INST.TR:
            newState.dir = (dir + 1) % 4;
            break;

        case INST.P1:
            newState.board[y][x] = (board[y][x] > 3 ? 5 : 1); // Paint color 1, preserve star
            break;

        case INST.P2:
            newState.board[y][x] = (board[y][x] > 3 ? 6 : 2); // Paint color 2, preserve star
            break;

        case INST.P3:
            newState.board[y][x] = (board[y][x] > 3 ? 7 : 3); // Paint color 3, preserve star
            break;

        default:
            return newState; // Unknown instruction
    }

    return newState;
}

/**
 * BFS solver with paint and conditional support
 */
function solveLevelAdvanced(levelData, maxSteps = 50) {
    const {board, player, stars} = levelData;

    const initialState = {
        x: player.x,
        y: player.y,
        dir: player.direction,
        board: cloneBoard(board),
        stars: stars,
        path: []
    };

    const queue = [initialState];
    const visited = new Set([getStateHash(initialState)]);

    // Available instructions
    const availableInstructions = [
        INST.FW, INST.TL, INST.TR,
        INST.P1, INST.P2, INST.P3
    ];

    while (queue.length > 0) {
        const current = queue.shift();

        // Check if we won
        if (current.stars === 0) {
            return current.path;
        }

        // Limit search depth
        if (current.path.length >= maxSteps) {
            continue;
        }

        // Try all available instructions
        for (const instruction of availableInstructions) {
            const newState = executeInstruction(current, instruction);

            if (!newState) continue; // Invalid state (dead)

            const hash = getStateHash(newState);
            if (visited.has(hash)) continue;

            visited.add(hash);
            queue.push(newState);
        }

        // Try conditional combinations
        const currentColor = current.board[current.y][current.x] % 4;
        if (currentColor > 0) {
            const conditionals = [INST.C1, INST.C2, INST.C3];
            for (const cond of conditionals) {
                for (const inst of [INST.FW, INST.TL, INST.TR]) {
                    // Execute conditional, then instruction
                    let state = executeInstruction(current, cond);
                    if (state) {
                        state = executeInstruction(state, inst);
                        if (state) {
                            const hash = getStateHash(state);
                            if (!visited.has(hash)) {
                                visited.add(hash);
                                queue.push(state);
                            }
                        }
                    }
                }
            }
        }
    }

    return null; // No solution found
}

/**
 * Try to decompose solution into multiple functions
 */
function decomposeIntoFunctions(solution, maxFunctionLength) {
    if (solution.length <= maxFunctionLength) {
        return { F0: solution };
    }

    // Simple decomposition: split into chunks
    const chunks = [];
    for (let i = 0; i < solution.length; i += maxFunctionLength) {
        chunks.push(solution.slice(i, i + maxFunctionLength));
    }

    return {
        F0: chunks[0],
        F1: chunks[1] || [],
        F2: chunks[2] || []
    };
}

async function generateSolutions() {
    console.log('🎮 ZZLE Advanced Solutions Generator\n');
    console.log('========================================');

    const levelsDir = path.join(__dirname, 'assets', 'zzle-levels');
    const solutions = [];
    let solved = 0;
    let unsolved = 0;
    let totalSteps = 0;

    for (let level = 1; level <= 116; level++) {
        try {
            const levelFile = path.join(levelsDir, `${level}.json`);

            if (!fs.existsSync(levelFile)) {
                console.log(`❌ Level ${level}: File not found`);
                solutions.push({
                    level,
                    solved: false,
                    steps: 0,
                    solution: 'FILE NOT FOUND',
                    maxAllowed: 0,
                    playerStartX: 0,
                    playerStartY: 0,
                    playerDirection: 0,
                    starsCount: 0
                });
                unsolved++;
                continue;
            }

            const levelData = JSON.parse(fs.readFileSync(levelFile, 'utf8'));
            const maxSteps = levelData.functions[0].length;

            // Try advanced solver
            const solution = solveLevelAdvanced(levelData, maxSteps);

            const result = {
                level,
                solved: solution !== null,
                steps: solution ? solution.length : 0,
                solution: solution ? solution.join(' ') : 'NO SOLUTION',
                maxAllowed: maxSteps,
                playerStartX: levelData.player.x,
                playerStartY: levelData.player.y,
                playerDirection: levelData.player.direction,
                starsCount: levelData.stars
            };

            solutions.push(result);

            if (solution) {
                solved++;
                totalSteps += solution.length;

                // Check if solution fits in function limit
                const fits = solution.length <= maxSteps;
                const status = fits ? '✅' : '⚠️';
                console.log(`${status} Level ${level}: Solved in ${solution.length} steps (max: ${maxSteps})`);
            } else {
                unsolved++;
                console.log(`❌ Level ${level}: No solution found`);
            }

        } catch (error) {
            console.log(`❌ Level ${level}: Error - ${error.message}`);
            solutions.push({
                level,
                solved: false,
                steps: 0,
                solution: 'ERROR',
                maxAllowed: 0,
                playerStartX: 0,
                playerStartY: 0,
                playerDirection: 0,
                starsCount: 0
            });
            unsolved++;
        }
    }

    // Generate CSV
    console.log('\n========================================');
    console.log('📊 Statistics:');
    console.log(`   Total Levels: 116`);
    console.log(`   Solved: ${solved}`);
    console.log(`   Unsolved: ${unsolved}`);
    console.log(`   Average Steps: ${solved > 0 ? (totalSteps / solved).toFixed(1) : '0'}`);
    console.log('========================================\n');

    const headers = [
        'Level',
        'Solved',
        'Steps',
        'Max_Allowed',
        'Solution',
        'Start_X',
        'Start_Y',
        'Start_Direction',
        'Stars'
    ];

    let csvContent = headers.join(',') + '\n';

    solutions.forEach(row => {
        const csvRow = [
            row.level,
            row.solved ? 'Yes' : 'No',
            row.steps,
            row.maxAllowed,
            `"${row.solution}"`,
            row.playerStartX,
            row.playerStartY,
            row.playerDirection,
            row.starsCount
        ];
        csvContent += csvRow.join(',') + '\n';
    });

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
    const filename = `zzle-solutions-advanced-${timestamp}.csv`;

    fs.writeFileSync(filename, csvContent);

    console.log(`✅ CSV file generated: ${filename}`);
    console.log(`📁 Location: ${path.resolve(filename)}\n`);

    return {
        filename,
        solutions,
        stats: {
            total: 116,
            solved,
            unsolved,
            avgSteps: solved > 0 ? (totalSteps / solved).toFixed(1) : '0'
        }
    };
}

// Run the generator
if (require.main === module) {
    generateSolutions()
        .then(result => {
            console.log('🎉 Done!\n');
            process.exit(0);
        })
        .catch(error => {
            console.error('❌ Fatal error:', error);
            process.exit(1);
        });
}

module.exports = { solveLevelAdvanced, generateSolutions };
