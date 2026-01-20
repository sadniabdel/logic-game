#!/usr/bin/env node

const fs = require('fs');

// Load solver code
const solverCode = fs.readFileSync('solve-stack-based.js', 'utf8');
const solveLevel = eval(solverCode.match(/function solveLevel[\s\S]*?^}/m)[0] + '; solveLevel');

// Test level 1
const levelData = JSON.parse(fs.readFileSync('assets/zzle-levels/1.json', 'utf8'));

console.log('Testing Level 1:');
console.log('Functions:', levelData.functions);
console.log('Active instructions:', levelData.activeInstructions);
console.log('\nSolving...\n');

const result = solveLevel(levelData, 10000);

if (result.solved) {
    console.log('✅ SOLVED!');
    console.log('Steps:', result.steps);
    console.log('Tested programs:', result.tested);
    console.log('Program:');
    result.program.forEach((func, i) => {
        console.log(`  F${i}: ${JSON.stringify(func)}`);
    });
} else {
    console.log('❌ Not solved');
    console.log('Tested programs:', result.tested);
}
