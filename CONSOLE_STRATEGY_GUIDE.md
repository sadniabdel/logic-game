# Browser Console Strategy Guide for Logic Game

## Overview

This guide explains strategies for manipulating the logic game (ZZLE puzzle game) using only browser console commands.

## Game Details

The game is a **ZZLE** puzzle game with 116 levels where you:
- Control a robot character on a 16x16 grid
- Collect stars by programming movement functions
- Have limited instruction slots per function

## Challenge: Why Console Access is Difficult

The game code is:
1. **Heavily minified** - All variable names are single letters
2. **React/Preact encapsulated** - State is hidden in component closures
3. **Production mode** - `window.NODE_ENV = 'production'` (dev tools disabled)
4. **No global API** - No functions exposed to `window` object

## Strategy 1: Using React DevTools (Recommended)

### Step 1: Install React DevTools
Install the React Developer Tools browser extension for your browser:
- Chrome/Edge: [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- Firefox: Search "React Developer Tools" in Firefox Add-ons

### Step 2: Access Component State
1. Open the game in browser
2. Open Developer Tools (F12)
3. Go to "Components" tab (React DevTools)
4. Navigate the component tree to find the game component (look for state with: `level`, `board`, `player`, `functions`)
5. You can inspect and modify state directly in React DevTools

### Step 3: Modify Game State
In React DevTools, you can:
- Skip levels by modifying the `currentLevel` state
- Change player position: `player: {x: 0, y: 0, direction: 2}`
- Mark levels as complete
- Manipulate the game board

## Strategy 2: Accessing React Fiber (Advanced)

If React DevTools is not available, you can access the React Fiber tree directly:

```javascript
// Step 1: Find the React root element
const rootElement = document.querySelector('#root');

// Step 2: Access React Fiber (internal React data structure)
// The key name varies by React version - try these:
const fiber = rootElement._reactRootContainer?._internalRoot?.current ||
              rootElement._reactRootContainer ||
              rootElement._reactRoot ||
              Object.keys(rootElement).find(key => key.startsWith('__react'));

// Step 3: Navigate the Fiber tree to find component with game state
function findComponentWithState(fiber, searchKey = 'level') {
  if (!fiber) return null;

  // Check if this fiber has state with our search key
  if (fiber.memoizedState && typeof fiber.memoizedState === 'object') {
    if (searchKey in fiber.memoizedState) {
      return fiber;
    }
  }

  // Recursively search child and sibling fibers
  return findComponentWithState(fiber.child, searchKey) ||
         findComponentWithState(fiber.sibling, searchKey);
}

// Find the game component
const gameComponent = findComponentWithState(fiber);

// Access game state
if (gameComponent) {
  console.log('Game State:', gameComponent.memoizedState);
}
```

## Strategy 3: Intercepting State Updates

You can intercept and modify React state updates by hooking into the reducer:

```javascript
// This is theoretical - requires finding the specific reducer in minified code
// The game uses reducer patterns with actions like:
// - "LOAD_LEVEL"
// - "NEXT_LEVEL"
// - "PLAY"
// - "STEP"
// - "PAUSE"

// If you can access the dispatch function, you can trigger these actions
```

## Strategy 4: GraphQL API Manipulation

The game communicates with a backend via GraphQL to save progress:

```javascript
// The game makes GraphQL mutations like:
// - start_last_session_game
// - update session results

// You could intercept or replicate these API calls to:
// 1. Mark levels as complete
// 2. Submit fake completion results
// 3. Skip ahead in progression

// Example (theoretical - requires auth tokens):
fetch('/api/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    // Add authentication headers
  },
  body: JSON.stringify({
    query: `mutation {
      update_toad_session_games(
        where: {id: {_eq: YOUR_GAME_ID}},
        _set: {completed: true}
      ) {
        affected_rows
      }
    }`
  })
});
```

## Strategy 5: Memory Manipulation via IndexedDB

The game may store progress in IndexedDB:

```javascript
// List all databases
indexedDB.databases().then(console.log);

// Open the game database
const request = indexedDB.open('game-database-name');

request.onsuccess = function(event) {
  const db = event.target.result;

  // List object stores
  console.log('Object stores:', Array.from(db.objectStoreNames));

  // Access game data
  const transaction = db.transaction(['sessions', 'results'], 'readwrite');
  const store = transaction.objectStore('sessions');

  // Modify or read data
  const getAllRequest = store.getAll();
  getAllRequest.onsuccess = function() {
    console.log('All data:', getAllRequest.result);
  };
};
```

## Strategy 6: LocalStorage/SessionStorage

Check if any game state is stored in browser storage:

```javascript
// Check localStorage
console.log('localStorage:', localStorage);
Object.keys(localStorage).forEach(key => {
  console.log(key, localStorage.getItem(key));
});

// Check sessionStorage
console.log('sessionStorage:', sessionStorage);
Object.keys(sessionStorage).forEach(key => {
  console.log(key, sessionStorage.getItem(key));
});

// Modify values if game state is found
localStorage.setItem('currentLevel', '116'); // Skip to last level
sessionStorage.setItem('gameCompleted', 'true');
```

## Practical Limitations

**Current Reality:**
- The game code is heavily obfuscated
- Direct console manipulation is **not feasible** without reverse engineering
- React DevTools is the most practical approach
- The "proper" way is to solve the puzzles

**What Won't Work:**
- `window.game.skipLevel()` - No such API exists
- `window.completeLevel()` - No exposed functions
- Direct variable access - All minified

## Known Action Types (from code inspection)

If you can access the dispatch function, these action types exist:

**ZZLE Game:**
- `PLAY` - Start level
- `STEP` - Execute one instruction
- `PAUSE` - Pause execution
- `RESTART` - Restart level
- `LOAD_LEVEL` - Load specific level
- `SELECT_FUNCTION_INSTRUCTION` - Select instruction slot
- `SET_FUNCTION_INSTRUCTION` - Set instruction value

**Memory Game:**
- `PLAY` - Start game
- `SET_CURRENT_LEVEL` - Change level
- `SAVE_RESULTS` - Save completion

## Conclusion

The most practical approach to "win using only console" is:

1. **Use React DevTools** to access component state
2. **Modify the level/progress state** directly in DevTools
3. **Or:** Solve the puzzles legitimately (intended gameplay)

Direct console manipulation without DevTools requires extensive reverse engineering of the minified code.

## Legal & Ethical Notice

This guide is for educational purposes. Manipulating game state may violate:
- Platform terms of service
- Assessment integrity (if used for admissions/testing)
- Academic honesty policies

Use responsibly and only for authorized testing/learning purposes.
