const fs = require('fs');
const level1 = JSON.parse(fs.readFileSync('assets/zzle-levels/1.json', 'utf8'));

console.log('Testing different direction encodings:\n');

// Try different direction mappings
const mappings = [
    { name: 'Standard (0=up,1=right,2=down,3=left)', dx: [0,1,0,-1], dy: [-1,0,1,0] },
    { name: 'Alt 1 (0=left,1=up,2=right,3=down)', dx: [-1,0,1,0], dy: [0,-1,0,1] },
    { name: 'Alt 2 (0=up,1=left,2=down,3=right)', dx: [0,-1,0,1], dy: [-1,0,1,0] },
    { name: 'Alt 3 (dir as-is: 2=right)', dx: [-1,0,1,0], dy: [0,-1,0,1] },
];

const program = [[1, 7]]; // FW, F0

for (const mapping of mappings) {
    let x = 5, y = 7, dir = 2, stars = 1;
    let stack = [...program[0]];
    let steps = 0;
    
    while (stack.length > 0 && steps < 20) {
        const instr = stack.shift();
        steps++;
        
        if (instr === 1) { // FW
            const newX = x + mapping.dx[dir];
            const newY = y + mapping.dy[dir];
            
            if (newX >= 0 && newX < 16 && newY >= 0 && newY < 16 && level1.board[newY][newX] > 0) {
                x = newX;
                y = newY;
                if (level1.board[y][x] > 3) {
                    stars--;
                }
            } else {
                break; // Death
            }
        } else if (instr === 7) { // F0
            stack = [...program[0], ...stack];
        }
        
        if (stars === 0) {
            console.log('✅ ' + mapping.name);
            console.log('   Final pos: (' + x + ', ' + y + ')');
            break;
        }
    }
}
