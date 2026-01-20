# ZZLE - Logic Puzzle Game

A standalone version of the ZZLE logic puzzle game with built-in level selector and auto-solver.

## 🎮 Play the Game

**NEW:** Complete standalone game implementation in `standalone-game/` folder!

- Modern, clean interface
- Correct game mechanics following exact rules
- Visual board with execution stack
- Program editor for all functions (F0, F1, F2)
- Built-in auto-solver with progress tracking
- No dependencies - just open `standalone-game/index.html` in your browser!

See `standalone-game/README.md` for full documentation.

## Features

- **116 Challenging Levels** - Navigate a robot through grid-based puzzles
- **Level Selector** - Jump to any level instantly
- **Auto-Solver** - Program synthesis solver for complex puzzles
- **No Authentication** - Play without login or tracking
- **Correct Game Rules** - Stack-based execution, all instruction types supported

## How to Play

### Running the Game

1. Open `index.html` in your web browser
2. The game will load automatically

### Using the Level Selector

Located in the top-right corner:

1. **Select a Level**: Choose from levels 1-116 in the dropdown
2. **Load Level**: Click to load the selected level
3. **Auto-Solve**: Click to automatically solve the current level

### Game Controls

- **FW (Forward)** - Move the robot forward one space
- **TL (Turn Left)** - Rotate the robot 90° counter-clockwise
- **TR (Turn Right)** - Rotate the robot 90° clockwise
- **Function Slots** - Program sequences of moves
- **Play Button** - Execute your programmed instructions

### Auto-Solver

The built-in auto-solver uses **Breadth-First Search (BFS)** pathfinding to find the shortest solution:

1. Select a level from the dropdown
2. Click "Auto-Solve Current Level"
3. View the solution in the output panel
4. Manually input the instructions into the game UI

Example output:
```
Solution found!
Level 8: FW, TL, FW, TR, FW
Steps: 5
Max allowed: 12

Instructions:
FW = Forward
TL = Turn Left
TR = Turn Right
```

## Game Objective

Guide your robot to collect all stars (⭐) on the board by programming a sequence of movements within the instruction limit.

### Board Elements

- **1** - Walkable path
- **5** - Star (goal)
- **0** - Empty space (not walkable)

### Player

- Position: `(x, y)` coordinates
- Direction: `0`=left, `1`=up, `2`=right, `3`=down

## Console Commands

Open browser DevTools (F12) to use advanced commands:

```javascript
// Fetch a specific level
getLevel(8)

// Solve a level manually
const levelData = await getLevel(8);
const solution = solveLevelBFS(levelData);
console.log(solution);
```

## CSV Solutions Generator

⚠️ **Important Limitation**: The level JSON files in this repository are **placeholder/template data**. All 116 files are identical with a simple 1-step puzzle (star is right next to the player).

The **real puzzle data** is loaded dynamically from the server when playing the actual game. To get real solutions, you would need to:
1. Capture level data from the live game's network traffic
2. Save each level's JSON to the `assets/zzle-levels/` folder
3. Then run the generator

### Two Solver Versions Available

**Basic Solver** (`generate-solutions.js`):
```bash
node generate-solutions.js
# Handles: FW, TL, TR (basic pathfinding only)
# Best for: Simple navigation puzzles
```

**Advanced Solver** (`generate-solutions-advanced.js`):
```bash
node generate-solutions-advanced.js
# Handles: FW, TL, TR, P1-P3 (paint), C1-C3 (conditionals)
# Best for: Complex puzzles requiring color-based logic
# Output: zzle-solutions-advanced-YYYY-MM-DDTHH-MM-SS.csv
```

The advanced solver includes:
- **Paint operations** (P1, P2, P3) - Mark cells with colors
- **Conditional execution** (C1, C2, C3) - Execute based on cell color
- **Board state tracking** - Handles puzzles where cell colors change
- **Extended BFS search** - Explores state space with board modifications

Note: Both solvers will show "FW" (1 step) solutions with current placeholder data.

### CSV Format

The generated CSV includes:

| Column | Description |
|--------|-------------|
| Level | Level number (1-116) |
| Solved | Yes/No - whether a solution was found |
| Steps | Number of instructions in solution |
| Max_Allowed | Maximum instructions allowed for this level |
| Solution | Space-separated instruction sequence (e.g., "FW TL FW TR") |
| Start_X | Player starting X position |
| Start_Y | Player starting Y position |
| Start_Direction | Player starting direction (0-3) |
| Stars | Number of stars to collect |

### Example Output

```csv
Level,Solved,Steps,Max_Allowed,Solution,Start_X,Start_Y,Start_Direction,Stars
1,Yes,1,12,"FW",0,0,2,1
8,Yes,5,12,"FW TL FW TR FW",13,11,1,1
```

### Capturing Real Level Data

To get actual puzzle solutions, capture level data from the live game:

**Option 1: Browser Network Tab**
1. Open the live game at https://01.gritlab.ax/
2. Open DevTools (F12) → Network tab
3. Play through levels
4. Look for requests to `/api/zzle-levels/` or level data in responses
5. Save each level's JSON to `assets/zzle-levels/{level}.json`

**Option 2: Network Interception**
```javascript
// In browser console on the live game
const originalFetch = window.fetch;
window.fetch = async (...args) => {
  const response = await originalFetch(...args);
  const clone = response.clone();

  if (args[0].includes('zzle')) {
    clone.json().then(data => {
      console.log('Level data:', JSON.stringify(data));
      // Copy this and save to assets/zzle-levels/
    });
  }

  return response;
};
```

### Use Cases (with real data)

- **Analyze puzzle difficulty** - Compare steps vs max allowed
- **Study solution patterns** - Identify common instruction sequences
- **Validate solver accuracy** - Test against known solutions
- **Import to spreadsheet** - Further analysis in Excel/Google Sheets

## Technical Details

### File Structure

```
logic-game/
├── index.html                    # Standalone game (CLEAN - no auth!)
├── README.md                     # This file
├── CONSOLE_STRATEGY_GUIDE.md     # Browser console strategies
├── assets/
│   ├── js/
│   │   ├── games/index.js        # Main game logic
│   │   ├── chunk-*.js            # Game bundles (6 files, required)
│   │   └── (inject.js REMOVED)   # No authentication!
│   ├── css/
│   │   ├── global.css            # Game styles
│   │   └── font-styles.css       # Typography
│   ├── fonts/                    # IBM Plex fonts
│   ├── img/                      # Game assets
│   └── zzle-levels/              # Level data (1-116.json)
└── (game/ folder REMOVED)        # Original auth version deleted
```

### Removed Files (Clean Repository!)

All authentication, tracking, and unnecessary files have been removed:

**Deleted:**
- ❌ `assets/js/inject.js` - grit:lab branding/authentication (213 lines)
- ❌ `game/zzle.html` - original game with login requirements
- ❌ Cloudflare beacon tracking script (vcd15cbe...)
- ❌ Google Tag Manager references
- ❌ All external analytics/tracking

**What's Kept:**
- ✅ Complete game logic (`games/index.js` + 6 chunk bundles)
- ✅ All original CSS styling
- ✅ All 116 puzzle levels (JSON files)
- ✅ Game assets (fonts, images)
- ✅ Same visual design and UX

### Added Features

- ✅ Level selector UI
- ✅ Auto-solver with BFS algorithm
- ✅ Solution viewer
- ✅ Console helper functions
- ✅ Keyboard shortcuts

## Auto-Solver Algorithm

The auto-solver uses **Breadth-First Search (BFS)** to guarantee the shortest path:

1. **Initialize**: Start from player position and direction
2. **Search**: Explore all possible moves (FW, TL, TR)
3. **Track**: Mark visited states to avoid cycles
4. **Find Goal**: Stop when robot reaches star position
5. **Return Path**: Backtrack to get instruction sequence

### Time Complexity

- **O(V + E)** where V = board cells × directions, E = possible moves
- Typically solves in milliseconds for small boards

## Browser Compatibility

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ⚠️ Internet Explorer (Not supported - use modern browser)

## Development

### Local Server (Optional)

If you encounter CORS issues loading assets:

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx http-server -p 8000

# Then visit: http://localhost:8000
```

### Customization

Edit `index.html` to customize:

- **Colors**: Change CSS variables in `<style>` section
- **Levels**: Modify JSON files in `assets/zzle-levels/`
- **UI Position**: Adjust `#level-selector` CSS positioning

## Credits

- **Original Game**: ZZLE Puzzle Game
- **Auto-Solver**: BFS Pathfinding Algorithm
- **Standalone Version**: Removed authentication, added features

## License

This standalone version is for educational and personal use only.

## Troubleshooting

### Game Won't Load

1. Check browser console (F12) for errors
2. Ensure all asset files are in correct paths
3. Try running from a local server (see Development section)

### Auto-Solver Not Working

1. Make sure you've selected a level
2. Check console for error messages
3. Verify level JSON files exist in `assets/zzle-levels/`

### Level Selector Not Visible

1. Check if it's hidden behind other elements
2. Try zooming out (Ctrl/Cmd + -)
3. Adjust `#level-selector` CSS positioning

## Support

For issues or questions, check:

- Browser console (F12) for error messages
- Network tab to verify asset loading
- `CONSOLE_STRATEGY_GUIDE.md` for advanced strategies

---

**Enjoy solving puzzles! 🎮🧩⭐**
