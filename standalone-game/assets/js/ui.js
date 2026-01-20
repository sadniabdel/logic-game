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
        if (levelNum) {
            loadLevel(levelNum);
        }
    });

    document.getElementById('run-btn').addEventListener('click', runProgram);
    document.getElementById('step-btn').addEventListener('click', stepProgram);
    document.getElementById('reset-btn').addEventListener('click', resetGame);
    document.getElementById('auto-solve-btn').addEventListener('click', autoSolve);
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

        // Update selector
        document.getElementById('level-select').value = levelNum;
    } catch (error) {
        setStatus(`Error loading level ${levelNum}: ${error.message}`);
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
    ctx.fillStyle = '#1a191c';
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
                ctx.fillStyle = '#0a090c';
            } else {
                const colors = ['#2a2930', '#4a2929', '#294a29', '#29294a'];
                ctx.fillStyle = colors[color];
            }

            ctx.fillRect(px, py, cellSize, cellSize);

            // Draw star
            if (hasStar) {
                ctx.fillStyle = '#ffc959';
                ctx.font = 'bold 20px Arial';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('★', px + cellSize / 2, py + cellSize / 2);
            }

            // Draw grid lines
            ctx.strokeStyle = '#3a3940';
            ctx.lineWidth = 1;
            ctx.strokeRect(px, py, cellSize, cellSize);
        }
    }

    // Draw player
    const px = state.x * cellSize;
    const py = state.y * cellSize;

    ctx.fillStyle = '#5562EB';
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

        // Make clickable - adds to currently selected function (F0 by default)
        chip.addEventListener('click', () => {
            addInstructionToProgram(instr, selectedFunctionIndex);
        });

        container.appendChild(chip);
    });

    if (activeInstructions.length === 0) {
        container.innerHTML = '<div style="color: #666;">No instructions available</div>';
    }
}

// Global variable to track which function is selected for editing
let selectedFunctionIndex = 0;

function addInstructionToProgram(instrName, funcIndex = selectedFunctionIndex) {
    if (!gameEngine.levelData) return;

    const func = gameEngine.levelData.functions[funcIndex];
    const program = currentProgram[funcIndex] || [];

    // Check if function is full
    if (program.length >= func.length) {
        alert(`Function F${funcIndex} is full (max ${func.length} instructions)`);
        return;
    }

    // Convert instruction name to code
    const INST = { NO: 0, FW: 1, TL: 2, TR: 3, P1: 4, P2: 5, P3: 6, F0: 7, F1: 8, F2: 9 };
    const COND = { C1: 1, C2: 2, C3: 3 };

    let code;
    if (INST[instrName] !== undefined) {
        code = INST[instrName];
    } else if (COND[instrName] !== undefined) {
        code = COND[instrName] * 100;
    } else {
        return;
    }

    // Add instruction
    currentProgram[funcIndex] = [...program, code];
    renderProgramEditor();
}

function removeInstructionFromProgram(funcIndex, instrIndex) {
    const program = currentProgram[funcIndex] || [];
    currentProgram[funcIndex] = program.filter((_, i) => i !== instrIndex);
    renderProgramEditor();
}

function clearFunction(funcIndex) {
    currentProgram[funcIndex] = [];
    renderProgramEditor();
}

function renderProgramEditor() {
    const container = document.getElementById('functions-container');
    container.innerHTML = '';

    if (!gameEngine.levelData) return;

    const functions = gameEngine.levelData.functions || [{ length: 12 }];

    functions.forEach((func, index) => {
        const funcDiv = document.createElement('div');
        funcDiv.className = 'function-slot';
        if (index === selectedFunctionIndex) {
            funcDiv.classList.add('selected');
        }

        const header = document.createElement('div');
        header.className = 'function-header';

        const nameSection = document.createElement('div');
        nameSection.style.display = 'flex';
        nameSection.style.alignItems = 'center';
        nameSection.style.gap = '10px';

        const name = document.createElement('div');
        name.className = 'function-name';
        name.textContent = `F${index}`;

        const selectBtn = document.createElement('button');
        selectBtn.textContent = index === selectedFunctionIndex ? '✓ Selected' : 'Select';
        selectBtn.style.padding = '2px 8px';
        selectBtn.style.fontSize = '11px';
        selectBtn.style.background = index === selectedFunctionIndex ? '#5562EB' : '#3a3940';
        selectBtn.style.color = 'white';
        selectBtn.style.border = 'none';
        selectBtn.style.borderRadius = '3px';
        selectBtn.style.cursor = 'pointer';
        selectBtn.addEventListener('click', () => {
            selectedFunctionIndex = index;
            renderProgramEditor();
        });

        nameSection.appendChild(name);
        nameSection.appendChild(selectBtn);

        const controls = document.createElement('div');
        controls.style.display = 'flex';
        controls.style.alignItems = 'center';
        controls.style.gap = '10px';

        const length = document.createElement('div');
        length.className = 'function-length';
        const program = currentProgram[index] || [];
        length.textContent = `${program.length}/${func.length}`;

        const clearBtn = document.createElement('button');
        clearBtn.textContent = 'Clear';
        clearBtn.style.padding = '2px 8px';
        clearBtn.style.fontSize = '11px';
        clearBtn.style.background = '#dc3545';
        clearBtn.style.color = 'white';
        clearBtn.style.border = 'none';
        clearBtn.style.borderRadius = '3px';
        clearBtn.style.cursor = 'pointer';
        clearBtn.addEventListener('click', () => clearFunction(index));

        controls.appendChild(length);
        controls.appendChild(clearBtn);

        header.appendChild(nameSection);
        header.appendChild(controls);

        const slots = document.createElement('div');
        slots.className = 'instruction-slots';

        // Show all available slots
        for (let i = 0; i < func.length; i++) {
            const slot = document.createElement('div');
            slot.className = 'instruction-slot';

            if (i < program.length) {
                // Filled slot
                slot.textContent = gameEngine.instructionToString(program[i]);
                slot.style.cursor = 'pointer';
                slot.title = 'Click to remove';
                slot.addEventListener('click', () => removeInstructionFromProgram(index, i));
            } else {
                // Empty slot
                slot.classList.add('empty');
                slot.textContent = `${i + 1}`;
                slot.style.cursor = 'default';
            }

            slots.appendChild(slot);
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
        container.innerHTML = '<div style="color: #666;">No program loaded</div>';
        sizeSpan.textContent = '(0)';
        return;
    }

    sizeSpan.textContent = `(${state.stack.length})`;

    if (state.stack.length === 0) {
        container.innerHTML = '<div style="color: #666;">Stack empty</div>';
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
        more.style.color = '#666';
        more.style.padding = '4px';
        more.textContent = `... and ${state.stack.length - 20} more`;
        container.appendChild(more);
    }
}

function setStatus(message) {
    console.log(message);
}

async function runProgram() {
    if (!gameEngine.levelData) {
        alert('No level loaded');
        return;
    }

    gameEngine.reset();
    gameEngine.loadProgram(currentProgram);

    await gameEngine.run();

    renderUI();

    const state = gameEngine.getState();
    if (state.status === 'won') {
        alert(`Victory! Solved in ${state.steps} steps`);
    } else {
        alert(state.message || 'Program failed');
    }
}

function stepProgram() {
    if (!gameEngine.levelData) {
        alert('No level loaded');
        return;
    }

    if (!gameEngine.state || gameEngine.state.stack.length === 0) {
        gameEngine.reset();
        gameEngine.loadProgram(currentProgram);
    }

    const canContinue = gameEngine.step();

    renderUI();

    const state = gameEngine.getState();

    if (!canContinue) {
        if (state.status === 'won') {
            alert(`Victory! Solved in ${state.steps} steps`);
        } else {
            alert(state.message || 'Program ended');
        }
    }
}

function resetGame() {
    if (!gameEngine.levelData) {
        alert('No level loaded');
        return;
    }

    gameEngine.reset();
    renderUI();
}

async function autoSolve() {
    if (!gameEngine.levelData) {
        alert('No level loaded');
        return;
    }

    const output = document.getElementById('solver-output');
    output.classList.add('show');
    output.innerHTML = '<div>Searching for solution...</div>';

    solver.stop();

    try {
        const result = await solver.solve(
            gameEngine.levelData,
            30000,
            (tested, depth) => {
                output.innerHTML = `<div>Depth ${depth}... (${tested.toLocaleString()} programs)</div>`;
            }
        );

        if (result.solved) {
            currentProgram = result.program;

            let html = `<div style="color: #28a745;">✓ Solution found!</div>`;
            html += `<div>${result.steps} steps, tested ${result.tested.toLocaleString()} programs</div><br>`;

            result.program.forEach((func, i) => {
                if (func.length > 0) {
                    const funcStr = func.map(instr => solver.instructionToString(instr)).join(', ');
                    html += `<div><strong>F${i}:</strong> [${funcStr}]</div>`;
                }
            });

            output.innerHTML = html;

            renderProgramEditor();
        } else {
            let reason = 'No solution found';
            if (result.cancelled) reason = 'Search cancelled';
            if (result.timeout) reason = 'Search timeout';

            output.innerHTML = `<div style="color: #dc3545;">✗ ${reason}</div><div>Tested ${result.tested.toLocaleString()} programs</div>`;
        }
    } catch (error) {
        output.innerHTML = `<div style="color: #dc3545;">Error: ${error.message}</div>`;
    }
}

// Make updateUI available globally for game engine
window.updateUI = renderUI;
