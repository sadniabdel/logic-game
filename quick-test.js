const fs = require('fs');
const level1 = JSON.parse(fs.readFileSync('assets/zzle-levels/1.json', 'utf8'));

console.log('Level 1:');
console.log('Player:', level1.player);
console.log('Stars:', level1.stars);
console.log('Functions:', level1.functions);
console.log('Active:', level1.activeInstructions);
console.log('\nExpected solution: F0=[FW, F0] (recursive forward loop)');

// Test execution
const program = [[1, 7]]; // F0 = [FW, F0]
let stack = [...program[0]];
let x = 5, y = 7, dir = 2, stars = 1;
let steps = 0;

console.log('\nExecuting F0=[FW, F0]:');
while (stack.length > 0 && steps < 20) {
    const instr = stack.shift();
    steps++;
    console.log(`Step ${steps}: instr=${instr}, pos=(${x},${y}), stars=${stars}, stack_len=${stack.length}`);
    
    if (instr === 1) { // FW
        x++; // dir=2 is right
        if (level1.board[y][x] > 3) {
            stars--;
            console.log('  Collected star!');
        }
    } else if (instr === 7) { // F0
        stack = [...program[0], ...stack]; // Prepend F0
        console.log('  Called F0, prepended to stack');
    }
    
    if (stars === 0) {
        console.log('\n✅ WON!');
        break;
    }
}
