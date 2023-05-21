//1. import fs module
const fs = require('fs');

//2. call the appendFile method
// 4 para, same as write file
// fs.appendFile('./talk.txt', '\nnew message!', err => {
//     if (err) {
//         console.log('add test fail');
//         return;
//     }
//     console.log('add test success');
// });

//fs.appendFileSync('./talk.txt', '\nNow using append Sync!');

//use writefile to append text
fs.writeFile('./talk.txt', '\nLove Love Love', {flag: 'a'}, err => {
    // err => Write fail: error object; write success: null
    if (err) {
        console.log('Write fail')
        return;
    }
    console.log('Wrote success');
});