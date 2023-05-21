//import fs module
const fs = require('fs');

//call unlink method unlinkSync
//2para: file path, callback
// fs.unlink('./有感有感.txt', err => {
//     if (err) {
//         console.log('刪除失敗');
//         return;
//     }
//     console.log('刪除成功');
// });

//call rm method (included in version 14.4) rmSync
fs.rm('./talk.txt', err => {
    if (err) {
        console.log('刪除失敗');
        return;
    }
    console.log('刪除成功');
});