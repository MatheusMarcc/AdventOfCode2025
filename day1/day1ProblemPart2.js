const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'day1.txt');
const fileContent = fs.readFileSync(filePath, 'utf-8');
const values = fileContent.split('\n').filter(line => line.trim() !== '');
const adjustValues = (arr) => {return arr.map(e => e.includes('L')? e.replace(/\D/g, "") * -1: e.replace(/\D/g, "") * 1);}

const ciclicalGroup = (arr, start) => {
    let acc = start;
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        const e = arr[i];

        if(e > 0) {
            for(let j = 0; j < e; j++) {
                acc = (acc + 1) % 100;
                if(acc === 0) sum++;
            }
        } else {
            for(let j = 0; j < -e; j++) {
                acc = (acc - 1 + 100) % 100;
                if(acc === 0) sum++;
            }
        }
    }

    return sum;
};

const senha = ciclicalGroup(adjustValues(values), 50);
console.log(senha);