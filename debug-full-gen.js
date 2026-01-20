function* generatePrograms(instructionSet, functionLengths, maxTotalInstructions) {
    const numFuncs = functionLengths.length;

    function* genFunc(funcIndex, totalUsed) {
        if (funcIndex === numFuncs) {
            if (totalUsed > 0) {
                yield Array(numFuncs).fill([]);
            }
            return;
        }

        const maxLen = Math.min(functionLengths[funcIndex], maxTotalInstructions - totalUsed);

        for (let len = 0; len <= maxLen; len++) {
            function* genInstructions(currentLen, seq) {
                if (currentLen === 0) {
                    for (const rest of genFunc(funcIndex + 1, totalUsed + len)) {
                        const result = [...rest];
                        result[funcIndex] = seq;
                        yield result;
                    }
                    return;
                }

                for (const instr of instructionSet) {
                    yield* genInstructions(currentLen - 1, [...seq, instr]);
                }
            }

            yield* genInstructions(len, []);
        }
    }

    yield* genFunc(0, 0);
}

const instrSet = [1, 7]; // FW, F0
const functionLengths = [2];

console.log('Generating programs for maxTotal=1:');
let count = 0;
for (const prog of generatePrograms(instrSet, functionLengths, 1)) {
    count++;
    console.log(count + ': ' + JSON.stringify(prog));
}

console.log('\nGenerating programs for maxTotal=2:');
count = 0;
for (const prog of generatePrograms(instrSet, functionLengths, 2)) {
    count++;
    console.log(count + ': ' + JSON.stringify(prog));
    if (JSON.stringify(prog) === JSON.stringify([[1,7]])) {
        console.log('  ^^^ TARGET FOUND! ^^^');
    }
}
