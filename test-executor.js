const fs = require('fs');

// Paste executor code
const INST = { NO: 0, FW: 1, TL: 2, TR: 3, P1: 4, P2: 5, P3: 6, F0: 7, F1: 8, F2: 9 };

function decodeInstruction(instr) {
    const cond = Math.floor(instr / 100);
    const opcode = instr % 100;
    return { cond, opcode };
}

function executeProgram(levelData, programFunctions, maxSteps = 10000) {
    let state = {
        x: levelData.player.x,
        y: levelData.player.y,
        dir: levelData.player.direction,
        stars: levelData.stars,
        board: levelData.board.map(row => [...row]),
        stack: [...programFunctions[0]],
        steps: 0
    };

    while (state.steps < maxSteps && state.stack.length > 0) {
        if (state.stars === 0) {
            return { solved: true, steps: state.steps };
        }

        if (state.stack.length > 100) {
            return { solved: false };
        }

        const instr = state.stack.shift();
        state.steps++;

        const { cond, opcode } = decodeInstruction(instr);

        if (cond > 0) {
            const tileValue = state.board[state.y][state.x];
            const tileColor = tileValue % 4;
            if (tileColor !== cond) {
                continue;
            }
        }

        switch (opcode) {
            case INST.FW: {
                const dx = [0, 1, 0, -1];
                const dy = [-1, 0, 1, 0];
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

            case INST.F0:
            case INST.F1:
            case INST.F2: {
                const funcIndex = opcode - INST.F0;
                if (programFunctions[funcIndex]) {
                    state.stack = [...programFunctions[funcIndex], ...state.stack];
                }
                break;
            }
        }
    }

    if (state.stars === 0) {
        return { solved: true, steps: state.steps };
    }

    return { solved: false };
}

// Test level 1
const level1 = JSON.parse(fs.readFileSync('assets/zzle-levels/1.json', 'utf8'));
const program = [[1, 7]]; // F0 = [FW, F0]

console.log('Testing program [[1, 7]] on level 1:');
const result = executeProgram(level1, program);
console.log('Result:', result);
