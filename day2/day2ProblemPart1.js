const fs = require('fs');
const path = require('path');
const { arrayBuffer } = require('stream/consumers');
const filePath = path.join(__dirname, 'day2.txt');
const fileContent = fs.readFileSync(filePath, 'utf-8');
const values = fileContent.split('\n').filter(line => line.trim() !== '');
//!!!! INCOMPLETE FOR NOW!!!!!!!!!!!!!
//!!!! INCOMPLETE FOR NOW!!!!!!!!!!!!!
//!!!! INCOMPLETE FOR NOW!!!!!!!!!!!!!
//!!!! INCOMPLETE FOR NOW!!!!!!!!!!!!!
//!!!! INCOMPLETE FOR NOW!!!!!!!!!!!!!
//!!!! INCOMPLETE FOR NOW!!!!!!!!!!!!!
//!!!! INCOMPLETE FOR NOW!!!!!!!!!!!!!
//!!!! INCOMPLETE FOR NOW!!!!!!!!!!!!!
//!!!! INCOMPLETE FOR NOW!!!!!!!!!!!!!
//!!!! INCOMPLETE FOR NOW!!!!!!!!!!!!!
//!!!! INCOMPLETE FOR NOW!!!!!!!!!!!!!
//!!!! INCOMPLETE FOR NOW!!!!!!!!!!!!!
//!!!! INCOMPLETE FOR NOW!!!!!!!!!!!!!
//!!!! INCOMPLETE FOR NOW!!!!!!!!!!!!!
//!!!! INCOMPLETE FOR NOW!!!!!!!!!!!!!
//!!!! INCOMPLETE FOR NOW!!!!!!!!!!!!!
const intervals = (arr) => 
{
    newArr = []
    for(const e of arr)
    {
         newArr = newArr.concat(e.split(','));
    }
    return newArr;
}

const allValues = (arr) => {

        newArr = []
        for(const e of arr)
        {

            const[left, rigth] = e.split('-');
            newArr.push(parseInt(left, 10));
            newArr.push(parseInt(rigth, 10) - parseInt(left, 10));

        }
        return newArr;
}

//const evenValues = (arr) => {for(let i = 0; i < arr.length; i++) {for(let i = 0, )}}

console.log(allValues(intervals(intervals(values))));