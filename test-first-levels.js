#!/usr/bin/env node

const fs = require('fs');

// Load and run solver on just levels 1-5
const code = fs.readFileSync('solve-stack-based.js', 'utf8');

// Extract functions
const buildInstructionSet = eval(code.match(/function buildInstructionSet[\s\S]*?^}/m)[0] + '; buildInstructionSet');
const executeProgram = eval(code.match(/function executeProgram[\s\S]*?^}/m)[0] + '; executeProgram');
const solveLevel = eval(code.match(/function solveLevel[\s\S]*?^}/m)[0] + '; solveLevel');
const instructionToString = eval(code.match(/function instructionToString[\s\S]*?^}/m)[0] + '; instructionToString');

for (let level = 1; level <= 5; level++) {
    const levelData = JSON.parse(fs.readFileSync(`assets/zzle-levels/${level}.json`, 'utf8'));
    console.log(`\nLevel ${level}:`);
    console.log('Functions:', levelData.functions.map(f => f.length));
    console.log('Active:', levelData.activeInstructions);
    
    const result = solveLevel(levelData, 10000);
    
    if (result.solved) {
        console.log('✅ SOLVED in', result.steps, 'steps');
        result.program.forEach((func, i) => {
            if (func.length > 0) {
                console.log(`  F${i}=[${func.map(instructionToString).join(',')}]`);
            }
        });
    } else {
        console.log('❌ Not solved (tested', result.tested, 'programs)');
    }
}
