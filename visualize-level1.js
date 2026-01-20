const fs = require('fs');
const level = JSON.parse(fs.readFileSync('assets/zzle-levels/1.json', 'utf8'));

console.log('Level 1 Visualization:\n');
for (let y = 0; y < 16; y++) {
    let row = y.toString().padStart(2, ' ') + ': ';
    for (let x = 0; x < 16; x++) {
        if (x === level.player.x && y === level.player.y) {
            const dirChars = ['^', '>', 'v', '<'];
            row += dirChars[level.player.direction];
        } else if (level.board[y][x] > 3) {
            row += '*';
        } else if (level.board[y][x] > 0) {
            row += '.';
        } else {
            row += ' ';
        }
    }
    console.log(row);
}

console.log('\nPlayer: (' + level.player.x + ', ' + level.player.y + ') facing ' + ['UP', 'RIGHT', 'DOWN', 'LEFT'][level.player.direction]);
