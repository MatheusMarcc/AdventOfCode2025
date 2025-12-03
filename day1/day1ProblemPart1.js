const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'day1.txt');
const fileContent = fs.readFileSync(filePath, 'utf-8');
const values = fileContent.split('\n').filter(line => line.trim() !== '');
const adjustValues = (arr) => { return arr.map(e => e.includes('L')? e.replace(/\D/g, "") * -1: e.replace(/\D/g, "") * 1);}


const ciclicalGroup = (arr, start) => {
    let acc = start;
    return arr.map(e => {
        acc = (acc + e + 100) % 100;
        return acc;
    });
};


const senha = ciclicalGroup(adjustValues(values), 50).filter(b => b ===0).length;

console.log(senha);
