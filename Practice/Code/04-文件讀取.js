// import fs module
const fs = require('fs');

//2. async reading
//3para, path, [option], callback;
// fs.readFile('./觀書有感.txt', (err, data) => {
//     if (err) {
//         console.log('Read fail');
//         return;
//     }
//     //by fedault, it is a Buffer
//     //use toString() utf-8
//     console.log(data.toString());
// })

//3. sync reading
const data = fs.readFileSync('./觀書有感.txt');
//by fedault, it is a Buffer
//use toString() utf-8
console.log(data.toString());