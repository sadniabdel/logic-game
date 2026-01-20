// Game Engine with Correct Rules Implementation

const INST = {
    NO: 0, FW: 1, TL: 2, TR: 3,
    P1: 4, P2: 5, P3: 6,
    F0: 7, F1: 8, F2: 9
};

const INST_NAMES = {
    0: 'NO', 1: 'FW', 2: 'TL', 3: 'TR',
    4: 'P1', 5: 'P2', 6: 'P3',
    7: 'F0', 8: 'F1', 9: 'F2'
};

class GameEngine {
    constructor() {
        this.levelData = null;
        this.state = null;
        this.initialState = null;
        this.running = false;
        this.animationSpeed = 200; // ms per step
    }

    loadLevel(levelData) {
        this.levelData = levelData;
        this.reset();
    }

    reset() {
        if (!this.levelData) return;

        this.state = {
            x: this.levelData.player.x,
            y: this.levelData.player.y,
            dir: this.levelData.player.direction,
            stars: this.levelData.stars,
            board: this.levelData.board.map(row => [...row]),
            stack: [],
            steps: 0,
            status: 'ready', // ready, running, won, failed
            message: ''
        };

        this.initialState = JSON.parse(JSON.stringify(this.state));
        this.running = false;
    }

    loadProgram(programFunctions) {
        if (!this.state) return;

        // Clear and load F0 onto stack
        this.state.stack = programFunctions[0] ? [...programFunctions[0]] : [];
        this.state.steps = 0;
        this.state.status = 'ready';
        this.state.message = 'Program loaded';

        // Store program for execution
        this.programFunctions = programFunctions;
    }

    step() {
        if (!this.state || this.state.status === 'won' || this.state.status === 'failed') {
            return false;
        }

        // Check win condition
        if (this.state.stars === 0) {
            this.state.status = 'won';
            this.state.message = `Victory! Solved in ${this.state.steps} steps`;
            return false;
        }

        // Check if stack is empty
        if (this.state.stack.length === 0) {
            this.state.status = 'failed';
            this.state.message = 'Program ended without collecting all stars';
            return false;
        }

        // Check stack overflow
        if (this.state.stack.length > 100) {
            this.state.status = 'failed';
            this.state.message = 'Stack overflow (>100 instructions)';
            return false;
        }

        // Pop instruction from front of stack
        const instr = this.state.stack.shift();
        this.state.steps++;

        const { cond, opcode } = this.decodeInstruction(instr);

        // Check condition
        if (cond > 0) {
            const tileValue = this.state.board[this.state.y][this.state.x];
            const tileColor = tileValue % 4;
            if (tileColor !== cond) {
                // Condition failed, skip instruction
                this.state.message = `Condition C${cond} failed (on color ${tileColor})`;
                return true;
            }
        }

        // Execute opcode
        const result = this.executeOpcode(opcode);

        if (!result) {
            this.state.status = 'failed';
            return false;
        }

        return true;
    }

    decodeInstruction(instr) {
        const cond = Math.floor(instr / 100);
        const opcode = instr % 100;
        return { cond, opcode };
    }

    executeOpcode(opcode) {
        switch (opcode) {
            case INST.NO:
                this.state.message = 'NO operation';
                return true;

            case INST.FW:
                return this.moveForward();

            case INST.TL:
                this.state.dir = (this.state.dir + 3) % 4;
                this.state.message = 'Turned left';
                return true;

            case INST.TR:
                this.state.dir = (this.state.dir + 1) % 4;
                this.state.message = 'Turned right';
                return true;

            case INST.P1:
                return this.paintTile(1);

            case INST.P2:
                return this.paintTile(2);

            case INST.P3:
                return this.paintTile(3);

            case INST.F0:
            case INST.F1:
            case INST.F2:
                return this.callFunction(opcode - INST.F0);

            default:
                this.state.message = `Unknown opcode: ${opcode}`;
                return false;
        }
    }

    moveForward() {
        // JSON direction encoding: 0=left, 1=up, 2=right, 3=down
        const dx = [-1, 0, 1, 0];
        const dy = [0, -1, 0, 1];

        const newX = this.state.x + dx[this.state.dir];
        const newY = this.state.y + dy[this.state.dir];

        // Check bounds
        if (newX < 0 || newX >= 16 || newY < 0 || newY >= 16) {
            this.state.message = 'Out of bounds';
            return false;
        }

        const targetCell = this.state.board[newY][newX];

        // Check void tile
        if (targetCell === 0) {
            this.state.message = 'Fell into void';
            return false;
        }

        // Move player
        this.state.x = newX;
        this.state.y = newY;

        // Collect star if present
        if (targetCell > 3) {
            this.state.board[newY][newX] -= 4;
            this.state.stars--;
            this.state.message = `Moved forward and collected star! (${this.state.stars} remaining)`;
        } else {
            this.state.message = 'Moved forward';
        }

        return true;
    }

    paintTile(color) {
        const hasStar = this.state.board[this.state.y][this.state.x] > 3;
        this.state.board[this.state.y][this.state.x] = color + (hasStar ? 4 : 0);
        this.state.message = `Painted tile color ${color}`;
        return true;
    }

    callFunction(funcIndex) {
        if (!this.programFunctions || !this.programFunctions[funcIndex]) {
            this.state.message = `Function F${funcIndex} not defined`;
            return false;
        }

        const func = this.programFunctions[funcIndex];

        // Prepend function instructions to stack
        this.state.stack = [...func, ...this.state.stack];
        this.state.message = `Called F${funcIndex} (prepended ${func.length} instructions)`;

        return true;
    }

    async run() {
        this.running = true;

        while (this.running && this.step()) {
            // Notify UI
            if (window.updateUI) {
                window.updateUI();
            }

            // Delay for animation
            await this.sleep(this.animationSpeed);
        }

        // Final UI update
        if (window.updateUI) {
            window.updateUI();
        }

        this.running = false;
    }

    stop() {
        this.running = false;
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    getState() {
        return this.state;
    }

    instructionToString(instr) {
        const { cond, opcode } = this.decodeInstruction(instr);
        const opcodeName = INST_NAMES[opcode] || 'UNKNOWN';

        if (cond > 0) {
            return `C${cond}+${opcodeName}`;
        }
        return opcodeName;
    }
}
