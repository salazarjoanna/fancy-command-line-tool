const fs = require('fs');

let fileName = process.argv[2];
let searchWord = process.argv[3];

let content = fs.readFileSync(fileName, 'utf-8');

let lines = content.split('\n');

let count = 0;

console.log("File contents:");
console.log(content);

console.log("Lines containing: " + searchWord);

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(searchWord)) {
        console.log(lines[i]);
        count++;
    }
}

console.log("Number of matches: " + count);
