//import http module
const http = require('http');
const fs = require('fs');

//當http請求 發生時 return function就會執行
const server = http.createServer((request, response) => {
    //讀取文件內容, buffer
    let html = fs.readFileSync(__dirname + '/10_table.html');
    response.end(html);//設置響應體, (在1個Reponse中)必須子只能有1個End
});

//監聽Port, 啟動服務
server.listen(9000, () => {
    console.log('服務已經啟動');
})