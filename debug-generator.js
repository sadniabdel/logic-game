const fs = require('fs');

// Build instruction set
const INST = { NO: 0, FW: 1, TL: 2, TR: 3, P1: 4, P2: 5, P3: 6, F0: 7, F1: 8, F2: 9 };
const COND = { C1: 1, C2: 2, C3: 3 };

function buildInstructionSet(activeInstructions) {
    const opcodes = [];
    const conds = [];

    for (const name of activeInstructions) {
        if (INST[name] !== undefined) opcodes.push(INST[name]);
        if (COND[name] !== undefined) conds.push(COND[name]);
    }

    const instructionSet = [];

    // Unconditional opcodes
    for (const op of opcodes) {
        instructionSet.push(op);
    }

    // Conditional opcodes
    for (const cond of conds) {
        for (const op of opcodes) {
            instructionSet.push(cond * 100 + op);
        }
    }

    return instructionSet;
}

const level1 = JSON.parse(fs.readFileSync('assets/zzle-levels/1.json', 'utf8'));
const instrSet = buildInstructionSet(level1.activeInstructions);

console.log('Level 1 instruction set:', instrSet);
console.log('Should include: 1 (FW) and 7 (F0)');
console.log('Looking for program [[1, 7]]');

// Generate all 2-instruction programs
for (const i1 of instrSet) {
    for (const i2 of instrSet) {
        const program = [[i1, i2]];
        if (i1 === 1 && i2 === 7) {
            console.log('\n✅ Found target program:', program);
        }
    }
}
