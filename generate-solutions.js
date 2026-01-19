#!/usr/bin/env node

/**
 * ZZLE Solutions Generator
 * Solves all 116 ZZLE levels and exports solutions to CSV
 */

const fs = require('fs');
const path = require('path');

// BFS Pathfinding Algorithm
function solveLevelBFS(levelData) {
    const {board, player, stars} = levelData;
    const start = {x: player.x, y: player.y, dir: player.direction};

    // Find star positions
    const starPositions = [];
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
            if (board[y][x] === 5) {
                starPositions.push({x, y});
            }
        }
    }

    if (starPositions.length === 0) return null;
    const goal = starPositions[0];

    // BFS to find path
    const queue = [{...start, path: []}];
    const visited = new Set([`${start.x},${start.y},${start.dir}`]);

    // Direction vectors: 0=left, 1=up, 2=right, 3=down
    const dx = [-1, 0, 1, 0];
    const dy = [0, -1, 0, 1];

    while (queue.length > 0) {
        const current = queue.shift();

        // Check if reached goal
        if (current.x === goal.x && current.y === goal.y) {
            return current.path;
        }

        // Try moving forward
        const newX = current.x + dx[current.dir];
        const newY = current.y + dy[current.dir];

        // Check if valid move
        if (newY >= 0 && newY < 16 && newX >= 0 && newX < 16) {
            const cell = board[newY][newX];
            if ((cell === 1 || cell === 5) && !visited.has(`${newX},${newY},${current.dir}`)) {
                visited.add(`${newX},${newY},${current.dir}`);
                queue.push({
                    x: newX,
                    y: newY,
                    dir: current.dir,
                    path: [...current.path, 'FW']
                });
            }
        }

        // Try turning left
        const leftDir = (current.dir + 3) % 4;
        if (!visited.has(`${current.x},${current.y},${leftDir}`)) {
            visited.add(`${current.x},${current.y},${leftDir}`);
            queue.push({
                x: current.x,
                y: current.y,
                dir: leftDir,
                path: [...current.path, 'TL']
            });
        }

        // Try turning right
        const rightDir = (current.dir + 1) % 4;
        if (!visited.has(`${current.x},${current.y},${rightDir}`)) {
            visited.add(`${current.x},${current.y},${rightDir}`);
            queue.push({
                x: current.x,
                y: current.y,
                dir: rightDir,
                path: [...current.path, 'TR']
            });
        }
    }

    return null; // No solution found
}

// Main function
async function generateSolutions() {
    console.log('🎮 ZZLE Solutions Generator\n');
    console.log('========================================');

    const levelsDir = path.join(__dirname, 'assets', 'zzle-levels');
    const solutions = [];
    let solved = 0;
    let unsolved = 0;
    let totalSteps = 0;

    // Process all 116 levels
    for (let level = 1; level <= 116; level++) {
        try {
            const levelFile = path.join(levelsDir, `${level}.json`);

            // Check if file exists
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

            // Read and parse level data
            const levelData = JSON.parse(fs.readFileSync(levelFile, 'utf8'));

            // Solve the level
            const solution = solveLevelBFS(levelData);

            const result = {
                level,
                solved: solution !== null,
                steps: solution ? solution.length : 0,
                solution: solution ? solution.join(' ') : 'NO SOLUTION',
                maxAllowed: levelData.functions[0].length,
                playerStartX: levelData.player.x,
                playerStartY: levelData.player.y,
                playerDirection: levelData.player.direction,
                starsCount: levelData.stars
            };

            solutions.push(result);

            if (solution) {
                solved++;
                totalSteps += solution.length;
                console.log(`✅ Level ${level}: Solved in ${solution.length} steps`);
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

    // Create CSV content
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
            `"${row.solution}"`, // Quote to handle spaces
            row.playerStartX,
            row.playerStartY,
            row.playerDirection,
            row.starsCount
        ];
        csvContent += csvRow.join(',') + '\n';
    });

    // Save CSV file
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
    const filename = `zzle-solutions-${timestamp}.csv`;

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

module.exports = { solveLevelBFS, generateSolutions };
