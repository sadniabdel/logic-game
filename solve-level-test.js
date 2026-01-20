#!/usr/bin/env node

const fs = require('fs');

// Test solver on level 1
const levelData = JSON.parse(fs.readFileSync('assets/zzle-levels/1.json', 'utf8'));

console.log('Level 1 data:');
console.log('Player:', levelData.player);
console.log('Stars:', levelData.stars);
console.log('Available instructions:', levelData.activeInstructions);
console.log('Functions:', levelData.functions);
console.log('\nBoard (showing star location):');
for (let y = 0; y < 16; y++) {
    let row = '';
    for (let x = 0; x < 16; x++) {
        if (x === levelData.player.x && y === levelData.player.y) {
            row += 'P ';
        } else if (levelData.board[y][x] > 3) {
            row += '* ';
        } else if (levelData.board[y][x] > 0) {
            row += '. ';
        } else {
            row += '  ';
        }
    }
    console.log(row);
}

console.log('\nAnalysis:');
console.log('- Player at (5,7) facing RIGHT');
console.log('- Path from (5,7) to (10,7)');
console.log('- Star at (10,7)');
console.log('- Available: FW and F0');
console.log('- Function F0 has length 2');
console.log('\nSolution should be: F0 = [FW, F0] (recursive forward loop)');
console.log('This makes F0 call itself, moving forward 5 times to reach the star');
