// UI Controller

let gameEngine;
let solver;
let currentProgram = [];

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    gameEngine = new GameEngine();
    solver = new Solver();

    initializeLevelSelector();
    setupEventListeners();

    // Load level 1 by default
    loadLevel(1);
});

function initializeLevelSelector() {
    const select = document.getElementById('level-select');

    for (let i = 1; i <= 116; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `Level ${i}`;
        select.appendChild(option);
    }
}

function setupEventListeners() {
    document.getElementById('load-level-btn').addEventListener('click', () => {
        const levelNum = parseInt(document.getElementById('level-select').value);
        loadLevel(levelNum);
    });

    document.getElementById('run-btn').addEventListener('click', runProgram);
    document.getElementById('step-btn').addEventListener('click', stepProgram);
    document.getElementById('reset-btn').addEventListener('click', resetGame);
    document.getElementById('solve-btn').addEventListener('click', autoSolve);
}

async function loadLevel(levelNum) {
    try {
        const response = await fetch(`../assets/zzle-levels/${levelNum}.json`);
        const levelData = await response.json();

        gameEngine.loadLevel(levelData);

        // Initialize program with empty functions
        currentProgram = (levelData.functions || [{ length: 12 }]).map(f => []);

        renderUI();
        setStatus(`Level ${levelNum} loaded`);
    } catch (error) {
        setStatus(`Error loading level ${levelNum}: ${error.message}`, true);
    }
}

function renderUI() {
    renderBoard();
    renderGameInfo();
    renderInstructionsPalette();
    renderProgramEditor();
    renderStack();
}

function renderBoard() {
    const canvas = document.getElementById('game-board');
    const ctx = canvas.getContext('2d');
    const state = gameEngine.getState();

    if (!state) return;

    const cellSize = 32;

    // Clear canvas
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    for (let y = 0; y < 16; y++) {
        for (let x = 0; x < 16; x++) {
            const tileValue = state.board[y][x];
            const hasStar = tileValue > 3;
            const color = tileValue % 4;

            const px = x * cellSize;
            const py = y * cellSize;

            // Draw tile
            if (tileValue === 0) {
                ctx.fillStyle = '#212529';
            } else {
                const colors = ['#e9ecef', '#ffcccc', '#ccffcc', '#ccccff'];
                ctx.fillStyle = colors[color];
            }

            ctx.fillRect(px, py, cellSize, cellSize);

            // Draw star
            if (hasStar) {
                ctx.fillStyle = '#ffc107';
                ctx.font = 'bold 20px Arial';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('★', px + cellSize / 2, py + cellSize / 2);
            }

            // Draw grid lines
            ctx.strokeStyle = '#dee2e6';
            ctx.lineWidth = 1;
            ctx.strokeRect(px, py, cellSize, cellSize);
        }
    }

    // Draw player
    const px = state.x * cellSize;
    const py = state.y * cellSize;

    ctx.fillStyle = '#667eea';
    ctx.beginPath();
    ctx.arc(px + cellSize / 2, py + cellSize / 2, cellSize / 3, 0, 2 * Math.PI);
    ctx.fill();

    // Draw direction arrow
    ctx.fillStyle = 'white';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const arrows = ['←', '↑', '→', '↓'];
    ctx.fillText(arrows[state.dir], px + cellSize / 2, py + cellSize / 2);
}

function renderGameInfo() {
    const state = gameEngine.getState();
    if (!state) return;

    document.getElementById('stars-count').textContent = state.stars;
    document.getElementById('steps-count').textContent = state.steps;
    document.getElementById('position').textContent = `(${state.x}, ${state.y})`;

    const dirNames = ['Left', 'Up', 'Right', 'Down'];
    document.getElementById('direction').textContent = dirNames[state.dir];
}

function renderInstructionsPalette() {
    const container = document.getElementById('palette-instructions');
    container.innerHTML = '';

    if (!gameEngine.levelData) return;

    const activeInstructions = gameEngine.levelData.activeInstructions || [];

    activeInstructions.forEach(instr => {
        const chip = document.createElement('div');
        chip.className = 'instruction-chip';
        chip.textContent = instr;

        if (instr.startsWith('C')) {
            chip.classList.add('conditional');
        }

        container.appendChild(chip);
    });
}

function renderProgramEditor() {
    const container = document.getElementById('functions-container');
    container.innerHTML = '';

    if (!gameEngine.levelData) return;

    const functions = gameEngine.levelData.functions || [{ length: 12 }];

    functions.forEach((func, index) => {
        const funcDiv = document.createElement('div');
        funcDiv.className = 'function-slot';

        const header = document.createElement('div');
        header.className = 'function-header';

        const name = document.createElement('div');
        name.className = 'function-name';
        name.textContent = `F${index}`;

        const length = document.createElement('div');
        length.className = 'function-length';
        length.textContent = `Max length: ${func.length}`;

        header.appendChild(name);
        header.appendChild(length);

        const slots = document.createElement('div');
        slots.className = 'instruction-slots';

        const program = currentProgram[index] || [];

        if (program.length === 0) {
            const emptySlot = document.createElement('div');
            emptySlot.className = 'instruction-slot empty';
            emptySlot.textContent = 'Empty';
            slots.appendChild(emptySlot);
        } else {
            program.forEach(instr => {
                const slot = document.createElement('div');
                slot.className = 'instruction-slot';
                slot.textContent = gameEngine.instructionToString(instr);
                slots.appendChild(slot);
            });
        }

        funcDiv.appendChild(header);
        funcDiv.appendChild(slots);
        container.appendChild(funcDiv);
    });
}

function renderStack() {
    const container = document.getElementById('stack-display');
    const sizeSpan = document.getElementById('stack-size');
    const state = gameEngine.getState();

    if (!state) {
        container.innerHTML = '<div style="color: #6c757d;">No program loaded</div>';
        sizeSpan.textContent = '(0)';
        return;
    }

    sizeSpan.textContent = `(${state.stack.length})`;

    if (state.stack.length === 0) {
        container.innerHTML = '<div style="color: #6c757d;">Stack empty</div>';
        return;
    }

    container.innerHTML = '';

    state.stack.slice(0, 20).forEach((instr, index) => {
        const item = document.createElement('div');
        item.className = 'stack-item';
        item.textContent = `${index}: ${gameEngine.instructionToString(instr)}`;
        container.appendChild(item);
    });

    if (state.stack.length > 20) {
        const more = document.createElement('div');
        more.style.color = '#6c757d';
        more.style.padding = '4px';
        more.textContent = `... and ${state.stack.length - 20} more`;
        container.appendChild(more);
    }
}

function setStatus(message, isError = false) {
    const statusEl = document.getElementById('status-message');
    statusEl.textContent = message;
    statusEl.style.color = isError ? '#dc3545' : '#6c757d';
}

async function runProgram() {
    if (!gameEngine.levelData) {
        setStatus('No level loaded', true);
        return;
    }

    gameEngine.reset();
    gameEngine.loadProgram(currentProgram);

    setStatus('Running program...');

    await gameEngine.run();

    renderUI();

    const state = gameEngine.getState();
    if (state.status === 'won') {
        setStatus(`Victory! Solved in ${state.steps} steps`);
    } else {
        setStatus(state.message || 'Program failed', true);
    }
}

function stepProgram() {
    if (!gameEngine.levelData) {
        setStatus('No level loaded', true);
        return;
    }

    if (!gameEngine.state || gameEngine.state.stack.length === 0) {
        gameEngine.reset();
        gameEngine.loadProgram(currentProgram);
    }

    const canContinue = gameEngine.step();

    renderUI();

    const state = gameEngine.getState();
    setStatus(state.message || 'Step executed');

    if (!canContinue) {
        if (state.status === 'won') {
            setStatus(`Victory! Solved in ${state.steps} steps`);
        } else {
            setStatus(state.message || 'Program ended', true);
        }
    }
}

function resetGame() {
    if (!gameEngine.levelData) {
        setStatus('No level loaded', true);
        return;
    }

    gameEngine.reset();
    renderUI();
    setStatus('Game reset');
}

async function autoSolve() {
    if (!gameEngine.levelData) {
        setStatus('No level loaded', true);
        return;
    }

    const resultDiv = document.getElementById('solver-result');
    resultDiv.innerHTML = '<div>Searching for solution...</div>';

    solver.stop();

    try {
        const result = await solver.solve(
            gameEngine.levelData,
            30000,
            (tested, depth) => {
                resultDiv.innerHTML = `<div>Searching depth ${depth}... (tested ${tested.toLocaleString()} programs)</div>`;
            }
        );

        if (result.solved) {
            currentProgram = result.program;

            let html = `<div class="solver-success">✓ Solution found! (${result.steps} steps, tested ${result.tested.toLocaleString()} programs)</div><br>`;

            result.program.forEach((func, i) => {
                if (func.length > 0) {
                    const funcStr = func.map(instr => solver.instructionToString(instr)).join(', ');
                    html += `<div><strong>F${i}:</strong> [${funcStr}]</div>`;
                }
            });

            resultDiv.innerHTML = html;

            renderProgramEditor();
            setStatus('Solution found! Click Run to execute');
        } else {
            let reason = 'No solution found';
            if (result.cancelled) reason = 'Search cancelled';
            if (result.timeout) reason = 'Search timeout';

            resultDiv.innerHTML = `<div class="solver-error">✗ ${reason}</div><div>Tested ${result.tested.toLocaleString()} programs</div>`;
            setStatus(reason, true);
        }
    } catch (error) {
        resultDiv.innerHTML = `<div class="solver-error">Error: ${error.message}</div>`;
        setStatus(`Solver error: ${error.message}`, true);
    }
}

// Make updateUI available globally for game engine
window.updateUI = renderUI;
