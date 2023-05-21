/*
 * requirement:
 * create a file call talk.txt, write content into it: Hello! My name if Ben
 */

//1. import fd module
//require is keyword to import module
const fs = require('fs');

// wrire file
// fs.writeFile是異步, 會將fs既野交俾I/O 線程, 主線程繼續, 同埋將err => {}先放入Stack,
// 等fs異步完所處理, 所以會出現console.log(1 + 1) 比fs快
// 4 pare, file name, data, (option), callback
// fs.writeFile('./talk.txt', 'Hello! My name is Ben.', err => {
//     // err => Write fail: error object; write success: null
//     if (err) {
//         console.log('Write fail')
//         return;
//     }
//     console.log('Wrote success');
// });

// console.log(1 + 1);

//同步寫入
//3 pare, file name, data, (option); no callback here
//主線程會停,等待fs.writeFileSync完成再run後面的Code
fs.writeFileSync('./data.txt', 'test');
console.log(1 + 1);