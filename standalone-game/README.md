# ZZLE - Standalone Game

A complete, clean implementation of the ZZLE logic puzzle game with correct game rules and auto-solver.

## Features

- **Visual Game Board**: 16x16 grid with color-coded tiles and star visualization
- **Program Editor**: Build programs using up to 3 functions (F0, F1, F2)
- **Execution Stack**: Real-time visualization of instruction execution
- **Step-by-Step Execution**: Step through your program one instruction at a time
- **Auto Solver**: Automatic program synthesis solver with progress tracking
- **116 Levels**: Full level support with proper JSON loading

## How to Play

1. **Open the game**: Open `index.html` in a web browser
2. **Select a level**: Choose from 116 levels using the dropdown
3. **Understand the goal**: Collect all stars (★) by programming the robot
4. **Program the robot**: Use available instructions to build functions
5. **Run your program**: Execute and watch the robot move

## Game Rules

### Board & Tiles
- **Void tiles** (black): Robot dies if it enters
- **Color tiles** (1, 2, 3): Walkable paths in different colors
- **Stars**: Collected only when robot moves onto them (not when standing)

### Instructions

**Movement:**
- `FW` - Move forward in current direction
- `TL` - Turn left (90°)
- `TR` - Turn right (90°)

**Painting:**
- `P1` - Paint current tile color 1 (red)
- `P2` - Paint current tile color 2 (green)
- `P3` - Paint current tile color 3 (blue)

**Functions:**
- `F0` - Call function 0
- `F1` - Call function 1
- `F2` - Call function 2

**Conditionals** (combine with any instruction):
- `C1+X` - Execute instruction X only if on color 1
- `C2+X` - Execute instruction X only if on color 2
- `C3+X` - Execute instruction X only if on color 3

### How It Works

1. **Stack-Based Execution**: Program starts by loading F0 onto the execution stack
2. **Instruction Prepending**: Function calls prepend their instructions to the front of the stack
3. **Sequential Execution**: Instructions are popped from the front of the stack and executed
4. **Recursive Calls**: Functions can call themselves for loops

### Example Programs

**Level 1** - Simple recursive forward loop:
```
F0 = [FW, F0]
```
Robot moves forward repeatedly until it collects the star.

**Level 5** - Spiral navigation:
```
F0 = [FW, TL, FW, TR, F0]
```
Robot alternates between moving and turning to navigate a spiral path.

**Level 9** - Conditional navigation:
```
F0 = [FW, C1+TL, C1+FW, TR, F0]
```
Robot turns left only when on color 1 tiles.

## Auto Solver

The built-in solver uses **program synthesis**:

1. Generates candidate programs of increasing complexity
2. Tests each program by simulating execution
3. Returns the first working solution found

**Performance:**
- Simple levels (1-5 instructions): < 1 second
- Medium levels (5-8 instructions): 1-10 seconds
- Complex levels (8-12 instructions): 10-30 seconds
- Some levels may timeout if they require complex multi-function programs

## Technical Details

### Direction Encoding
JSON uses: `0=left, 1=up, 2=right, 3=down`

### Instruction Encoding
Each instruction slot stores one integer:
- `instruction = condition * 100 + opcode`
- Examples: `1` = FW, `201` = C2+FW, `305` = C3+P2

### Win Condition
- Collect all stars (stars counter reaches 0)

### Failure Conditions
- Move out of bounds
- Move onto void tile (value 0)
- Stack becomes empty before collecting all stars
- Stack overflow (> 100 instructions)

## Files

- `index.html` - Main game interface
- `style.css` - Visual styling
- `game-engine.js` - Core game logic with correct rules
- `solver.js` - Auto-solver with program synthesis
- `ui.js` - UI controller and event handlers

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari

No build step or server required - just open `index.html` in your browser!
