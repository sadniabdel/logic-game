# ZZLE Standalone Game

A complete, standalone implementation of the ZZLE logic puzzle game with the exact same visual design as the original.

## Features

- **Identical Visual Design**: Same dark theme (#1a191c), colors, and IBM Plex fonts as the original
- **Correct Game Mechanics**: Stack-based execution following exact game rules
- **116 Levels**: Full level support
- **Program Synthesis Solver**: Auto-solve with advanced algorithm
- **No Dependencies**: Just open `index.html` in your browser

## File Structure

```
standalone-game/
├── index.html              # Main game page
├── assets/
│   ├── css/
│   │   ├── global.css      # Global styles (from original)
│   │   ├── font-styles.css # Font definitions (from original)
│   │   └── game.css        # Game-specific styles
│   ├── fonts/
│   │   ├── IBMPlexSans-light-latin.woff2
│   │   ├── IBMPlexMono-regular-latin.woff2
│   │   └── IBMPlexMono-light-latin.woff2
│   └── js/
│       ├── game-engine.js  # Core game logic
│       ├── solver.js       # Auto-solver
│       └── ui.js           # UI controller
```

## How to Play

### Quick Start

**Option 1: Using Local Server (Recommended)**

Linux/Mac:
```bash
cd standalone-game
./start-server.sh
# Open browser to http://localhost:8000
```

Windows:
```cmd
cd standalone-game
start-server.bat
# Open browser to http://localhost:8000
```

**Option 2: Direct File Access**

If you get CORS errors when opening `index.html` directly, you need to run a local server. The easiest way:

```bash
# In the standalone-game folder
python3 -m http.server 8000
# Or: python -m http.server 8000
```

Then open: `http://localhost:8000`

### Playing the Game

1. **Select a level**: Use the dropdown in the top-right (Levels 1-116)
2. **Auto-solve**: Click "Auto-Solve" to find a solution automatically
3. **Run program**: Click "Run" to execute the program
4. **Step through**: Click "Step" to debug step-by-step

## Game Rules

### Board & Tiles
- **Void tiles** (black): Robot dies if entering
- **Color tiles** (1-3): Walkable paths
- **Stars** (★): Collected when robot moves onto them

### Instructions

**Movement:**
- `FW` - Move forward
- `TL` - Turn left
- `TR` - Turn right

**Painting:**
- `P1`, `P2`, `P3` - Paint tile with color 1, 2, or 3

**Functions:**
- `F0`, `F1`, `F2` - Call function 0, 1, or 2

**Conditionals:**
- `C1+X`, `C2+X`, `C3+X` - Execute instruction X only if on specific color

### Execution Model

- **Stack-based**: Program starts by loading F0 onto execution stack
- **Instruction prepending**: Function calls prepend their instructions to front of stack
- **Sequential execution**: Instructions popped from front and executed
- **Recursive calls**: Functions can call themselves

## Visual Design

The standalone game uses the exact same visual elements as the original:

- **Background**: `#1a191c` (dark charcoal)
- **Primary accent**: `#ffc959` (yellow/gold)
- **Interactive elements**: `#5562EB` (purple/blue)
- **Panels**: `#2a2930` (dark gray)
- **Typography**: IBM Plex Sans Light, IBM Plex Mono Regular

## Technical Details

### Direction Encoding
```
0 = Left
1 = Up
2 = Right
3 = Down
```

### Instruction Encoding
Each instruction slot stores one integer:
```
instruction = condition * 100 + opcode
```

Examples:
- `1` = FW (forward)
- `201` = C2+FW (if on color 2, move forward)
- `305` = C3+P2 (if on color 3, paint color 2)

### Win/Fail Conditions

**Win:**
- Collect all stars (stars counter reaches 0)

**Fail:**
- Move out of bounds
- Move onto void tile (value 0)
- Stack becomes empty before collecting all stars
- Stack overflow (> 100 instructions)

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari

## Development

The game is built with vanilla JavaScript - no build tools or frameworks needed.

To modify:
1. Edit HTML/CSS/JS files directly
2. Refresh browser to see changes
3. Check browser console for any errors

## Credits

Based on the original ZZLE game design and mechanics.
Standalone implementation with correct game rules and program synthesis solver.
