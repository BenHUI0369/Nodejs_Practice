//1. import fs module
const fs = require('fs');

//read all file in code
const files = fs.readdirSync('./Code');

//console.log(files);

//loop the array
files.forEach(item => {
    //check if the number before - is less then 10
    let data = item.split('-');
    let [num, name] = data;
    if (Number(num) < 10) {
        num = '0' + num; 
    }
    //create new file name
    let newName = num + '-' + name;
    //rename start
    fs.renameSync(`./Code/${item}`, `./Code/${newName}`);

    console.log(newName);
});