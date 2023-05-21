//rename all file in order

//1. import fs module
const fs = require('fs');

//read all file in code
const files = fs.readdirSync('./Code2');

//console.log(files.length);
let numCount = 1;
//loop the array
files.forEach(item => {
    let data = item.split('-')
    let [num, name] = data;
    console.log(data);
    if (numCount < 10) {
        let newName = `0${numCount++}-${name}`
        fs.renameSync(`./Code2/${item}`, `./Code2/${newName}`);
    } else {
        newName = `${numCount++}-${name}`
        fs.renameSync(`./Code2/${item}`, `./Code2/${newName}`);
    }
})
