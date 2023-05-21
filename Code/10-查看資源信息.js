//import fs module
const fs = require('fs');

//call stat method
fs.stat('../Data/Linux Assignment 3.mp4', (err, data) => {
    if (err) {
        console.log('操作失敗');
        return;
    }
    //console.log(data);
    //isFile
    console.log(data.isFile());
    //isDirectory
    console.log(data.isDirectory());
});