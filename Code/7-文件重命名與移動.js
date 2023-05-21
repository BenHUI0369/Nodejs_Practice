//import fs module
const fs = require('fs');

//call rename method
//3pare: path, new path, callback function (1para)
// fs.rename('./觀書有感.txt', './有感有感.txt', err => {
//     if (err) {
//         console.log('Operation Fail');
//         return;
//     }
//     console.log('Operation Success');
// })

//Move data
fs.rename('./data.txt', '../Data/data.txt', err => {
    if (err) {
        console.log('Operation Fail');
        return;
    }
    console.log('Operation Success');
})

//改名同移動原理是一樣的