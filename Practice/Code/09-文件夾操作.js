//import fs module
const fs = require('fs');

//create dir
//3para: path, [object], callback
// fs.mkdir('./html', err => {
//     if (err) {
//         console.log('創建失敗');
//         return;
//     }
//     console.log('創建成功');
// });

// //2-2 recursion creation a/b/c
// fs.mkdir('./a/b/c', {recursive: true}, err => {
//     if (err) {
//         console.log('創建失敗');
//         return;
//     }
//     console.log('創建成功');
// });

//2-3 Read dir
//2para: path, callback(2para)
//retturn value is array, and the array item is file name
// fs.readdir('../Data', (err, data) => {
//         if (err) {
//         console.log('讀取失敗');
//         return;
//     }
//     console.log(data);
// });

//2-4 Delete dir
//2para: path, callback
// fs.rmdir('./html', err => {
//     if (err) {
//         console.log('刪除失敗', err);
//         return;
//     }
//     console.log('刪除成功');
// });

//2-5 recursion Delete dir (not recomment)
//2para: path, callback
// fs.rmdir('./a', {recursive: true}, err => {
//     if (err) {
//         console.log('刪除失敗', err);
//         return;
//     }
//     console.log('刪除成功');
// });

//2-5 recursion Delete dir (recomment)
//2para: path, callback
fs.rm('./a', {recursive: true}, err => {
    if (err) {
        console.log('刪除失敗', err);
        return;
    }
    console.log('刪除成功');
});
