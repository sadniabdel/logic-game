// UI Controller

let gameEngine;
let solver;
let smartSolver;
let currentProgram = [];

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    gameEngine = new GameEngine();
    solver = new Solver();
    smartSolver = new SmartSolver();

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

    // Clear canvas - original game background
    ctx.fillStyle = '#293742';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Original game colors
    const colors = {
        0: '#222',        // Void/empty (darker)
        1: '#6F3DE7',     // Color 1 - Purple (exact original)
        2: '#59B6B2',     // Color 2 - Teal (exact original)
        3: '#FFB33C'      // Color 3 - Yellow (exact original)
    };

    // Draw grid
    for (let y = 0; y < 16; y++) {
        for (let x = 0; x < 16; x++) {
            const tileValue = state.board[y][x];
            const hasStar = tileValue > 3;
            const color = tileValue % 4;

            const px = x * cellSize;
            const py = y * cellSize;

            // Draw tile
            ctx.fillStyle = colors[color];
            ctx.fillRect(px, py, cellSize, cellSize);

            // Draw star
            if (hasStar) {
                ctx.fillStyle = 'white';
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 1.5;

                // Draw star shape (5-pointed star)
                ctx.save();
                ctx.translate(px + cellSize / 2, py + cellSize / 2);
                ctx.beginPath();
                for (let i = 0; i < 5; i++) {
                    const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
                    const radius = i % 2 === 0 ? 8 : 4;
                    const sx = radius * Math.cos(angle);
                    const sy = radius * Math.sin(angle);
                    if (i === 0) ctx.moveTo(sx, sy);
                    else ctx.lineTo(sx, sy);
                }
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                ctx.restore();
            }

            // Draw grid lines (subtle)
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
            ctx.lineWidth = 1;
            ctx.strokeRect(px, py, cellSize, cellSize);
        }
    }

    // Draw player - diamond/rhombus shape like original
    const px = state.x * cellSize + cellSize / 2;
    const py = state.y * cellSize + cellSize / 2;
    const size = cellSize * 0.4;

    ctx.save();
    ctx.translate(px, py);

    // Rotate based on direction: 0=left, 1=up, 2=right, 3=down
    const rotations = [180, 270, 0, 90]; // Degrees
    ctx.rotate((rotations[state.dir] * Math.PI) / 180);

    // Draw diamond/rhombus
    ctx.beginPath();
    ctx.moveTo(size, 0);           // Right point
    ctx.lineTo(0, -size * 0.7);    // Top point
    ctx.lineTo(-size, 0);          // Left point
    ctx.lineTo(0, size * 0.7);     // Bottom point
    ctx.closePath();

    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.restore();
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

// Global variable to track pending conditional
let pendingConditional = null;
let selectedFunctionIndex = 0;

// Generate SVG icon for instruction
function createInstructionIcon(instrName, size = 16) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
    svg.setAttribute('viewBox', '0 0 16 16');
    svg.style.display = 'inline-block';
    svg.style.verticalAlign = 'middle';
    svg.style.marginRight = '4px';

    const createPath = (d, fill = 'currentColor', stroke = null) => {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d);
        path.setAttribute('fill', fill);
        if (stroke) {
            path.setAttribute('stroke', stroke);
            path.setAttribute('stroke-width', '1');
        }
        return path;
    };

    const createCircle = (cx, cy, r, fill = 'currentColor') => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', cx);
        circle.setAttribute('cy', cy);
        circle.setAttribute('r', r);
        circle.setAttribute('fill', fill);
        return circle;
    };

    switch (instrName) {
        case 'FW': // Forward arrow
            svg.appendChild(createPath('M12 8 L8 5 L8 7 L4 7 L4 9 L8 9 L8 11 Z'));
            break;

        case 'TL': // Turn left (curved arrow counter-clockwise)
            svg.appendChild(createPath('M8 3 L8 6 L5 6 L8 9 L11 6 L8 6 L8 3 M8 6 Q4 6 4 10', 'none', 'currentColor'));
            svg.appendChild(createPath('M3 10 L4 12 L5 10 Z'));
            break;

        case 'TR': // Turn right (curved arrow clockwise)
            svg.appendChild(createPath('M8 3 L8 6 L11 6 L8 9 L5 6 L8 6 L8 3 M8 6 Q12 6 12 10', 'none', 'currentColor'));
            svg.appendChild(createPath('M13 10 L12 12 L11 10 Z'));
            break;

        case 'P1': // Paint color 1 (purple circle)
            svg.appendChild(createCircle(8, 8, 5, '#6F3DE7'));
            svg.appendChild(createPath('M8 4 L6 6 L7 6 L7 10 Q7 11 8 11 Q9 11 9 10 L9 7 L10 7 Z', '#fff'));
            break;

        case 'P2': // Paint color 2 (teal circle)
            svg.appendChild(createCircle(8, 8, 5, '#59B6B2'));
            svg.appendChild(createPath('M8 4 L6 6 L7 6 L7 10 Q7 11 8 11 Q9 11 9 10 L9 7 L10 7 Z', '#fff'));
            break;

        case 'P3': // Paint color 3 (yellow circle)
            svg.appendChild(createCircle(8, 8, 5, '#FFB33C'));
            svg.appendChild(createPath('M8 4 L6 6 L7 6 L7 10 Q7 11 8 11 Q9 11 9 10 L9 7 L10 7 Z', '#fff'));
            break;

        case 'F0': // Function 0
        case 'F1': // Function 1
        case 'F2': // Function 2
            svg.appendChild(createPath('M4 3 L4 13 L12 13 L12 3 Z', 'none', 'currentColor'));
            svg.appendChild(createPath('M6 6 L10 6 M6 8 L10 8 M6 10 L10 10', 'none', 'currentColor'));
            break;

        case 'C1': // Conditional color 1
            svg.appendChild(createPath('M8 2 L14 8 L8 14 L2 8 Z', '#6F3DE7'));
            svg.appendChild(createPath('M8 6 L8 9 M8 11 L8 11.5', 'none', '#fff'));
            break;

        case 'C2': // Conditional color 2
            svg.appendChild(createPath('M8 2 L14 8 L8 14 L2 8 Z', '#59B6B2'));
            svg.appendChild(createPath('M8 6 L8 9 M8 11 L8 11.5', 'none', '#fff'));
            break;

        case 'C3': // Conditional color 3
            svg.appendChild(createPath('M8 2 L14 8 L8 14 L2 8 Z', '#FFB33C'));
            svg.appendChild(createPath('M8 6 L8 9 M8 11 L8 11.5', 'none', '#fff'));
            break;

        case 'NO': // No operation
            svg.appendChild(createCircle(8, 8, 6, 'none'));
            svg.appendChild(createPath('M5 5 L11 11 M11 5 L5 11', 'none', 'currentColor'));
            break;

        default:
            svg.appendChild(createCircle(8, 8, 4));
    }

    return svg;
}

function renderInstructionsPalette() {
    const container = document.getElementById('palette-instructions');
    container.innerHTML = '';

    if (!gameEngine.levelData) return;

    const activeInstructions = gameEngine.levelData.activeInstructions || [];

    // Separate conditionals and opcodes
    const conditionals = activeInstructions.filter(i => i.startsWith('C'));
    const opcodes = activeInstructions.filter(i => !i.startsWith('C'));

    // Show conditionals section if any
    if (conditionals.length > 0) {
        const condLabel = document.createElement('div');
        condLabel.style.color = '#ffc959';
        condLabel.style.fontSize = '12px';
        condLabel.style.marginBottom = '8px';
        condLabel.textContent = 'Conditionals (click first, then opcode):';
        container.appendChild(condLabel);

        const condDiv = document.createElement('div');
        condDiv.style.display = 'flex';
        condDiv.style.gap = '8px';
        condDiv.style.marginBottom = '15px';

        conditionals.forEach(cond => {
            const chip = document.createElement('div');
            chip.className = 'instruction-chip conditional';
            chip.style.cursor = 'pointer';
            chip.style.display = 'flex';
            chip.style.alignItems = 'center';
            chip.style.gap = '4px';

            // Add icon
            chip.appendChild(createInstructionIcon(cond, 16));

            // Add text
            const text = document.createElement('span');
            text.textContent = pendingConditional === cond ? cond + ' ✓' : cond;
            chip.appendChild(text);

            if (pendingConditional === cond) {
                chip.style.background = '#ffc959';
                chip.style.color = '#1a191c';
                chip.style.fontWeight = 'bold';
            }

            chip.addEventListener('click', () => {
                pendingConditional = pendingConditional === cond ? null : cond;
                renderInstructionsPalette();
            });

            condDiv.appendChild(chip);
        });

        container.appendChild(condDiv);
    }

    // Show opcodes section
    if (opcodes.length > 0) {
        const opcodeLabel = document.createElement('div');
        opcodeLabel.style.color = '#888';
        opcodeLabel.style.fontSize = '12px';
        opcodeLabel.style.marginBottom = '8px';
        opcodeLabel.textContent = pendingConditional ?
            `Instructions (will add ${pendingConditional}+X):` :
            'Instructions:';
        container.appendChild(opcodeLabel);

        const opcodeDiv = document.createElement('div');
        opcodeDiv.style.display = 'flex';
        opcodeDiv.style.flexWrap = 'wrap';
        opcodeDiv.style.gap = '8px';

        opcodes.forEach(opcode => {
            const chip = document.createElement('div');
            chip.className = 'instruction-chip';
            chip.style.cursor = 'pointer';
            chip.style.display = 'flex';
            chip.style.alignItems = 'center';
            chip.style.gap = '4px';

            // Add conditional icon if pending
            if (pendingConditional) {
                chip.appendChild(createInstructionIcon(pendingConditional, 16));
                const plus = document.createElement('span');
                plus.textContent = '+';
                plus.style.margin = '0 2px';
                chip.appendChild(plus);
            }

            // Add opcode icon
            chip.appendChild(createInstructionIcon(opcode, 16));

            // Add text
            const text = document.createElement('span');
            text.textContent = pendingConditional ? `${pendingConditional}+${opcode}` : opcode;
            chip.appendChild(text);

            if (pendingConditional) {
                chip.style.background = '#4a3d20';
                chip.style.borderColor = '#ffc959';
                chip.style.color = '#ffc959';
            }

            chip.addEventListener('click', () => {
                addInstructionToProgram(opcode, pendingConditional);
                pendingConditional = null;
                renderInstructionsPalette();
            });

            opcodeDiv.appendChild(chip);
        });

        container.appendChild(opcodeDiv);
    }

    if (activeInstructions.length === 0) {
        container.innerHTML = '<div style="color: #666;">No instructions available</div>';
    }
}

function addInstructionToProgram(opcodeName, condName = null, funcIndex = selectedFunctionIndex) {
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

    let opcodeValue = INST[opcodeName];
    let condValue = condName ? COND[condName] : 0;

    if (opcodeValue === undefined) {
        alert('Invalid opcode: ' + opcodeName);
        return;
    }

    // Combine: instruction = condition * 100 + opcode
    const code = condValue * 100 + opcodeValue;

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
                // Filled slot with icon
                const instrString = gameEngine.instructionToString(program[i]);
                slot.style.cursor = 'pointer';
                slot.title = 'Click to remove';
                slot.style.display = 'flex';
                slot.style.alignItems = 'center';
                slot.style.gap = '4px';
                slot.style.justifyContent = 'center';

                // Parse instruction string (e.g., "C1+FW" or "FW")
                if (instrString.includes('+')) {
                    const [cond, opcode] = instrString.split('+');
                    slot.appendChild(createInstructionIcon(cond, 14));
                    const plus = document.createElement('span');
                    plus.textContent = '+';
                    plus.style.fontSize = '10px';
                    slot.appendChild(plus);
                    slot.appendChild(createInstructionIcon(opcode, 14));
                } else {
                    slot.appendChild(createInstructionIcon(instrString, 14));
                }

                const text = document.createElement('span');
                text.textContent = instrString;
                text.style.fontSize = '11px';
                slot.appendChild(text);

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
    output.innerHTML = '<div>🧠 Smart beam search solving...</div>';

    smartSolver.stop();

    try {
        const result = await smartSolver.solve(
            gameEngine.levelData,
            30000,
            (tested, depth) => {
                output.innerHTML = `<div>${depth}... (${tested.toLocaleString()} programs)</div>`;
            }
        );

        if (result.solved) {
            currentProgram = result.program;

            let html = `<div style="color: #28a745;">✓ Solution found!</div>`;
            html += `<div>${result.steps} steps, tested ${result.tested.toLocaleString()} programs</div><br>`;

            result.program.forEach((func, i) => {
                if (func.length > 0) {
                    const funcStr = func.map(instr => smartSolver.instructionToString(instr)).join(', ');
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
