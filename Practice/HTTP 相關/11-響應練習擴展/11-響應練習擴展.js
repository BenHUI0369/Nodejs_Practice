//import http module
const http = require('http');
const fs = require('fs');

//當http請求 發生時 return function就會執行
const server = http.createServer((request, response) => {
    //跟照請求URL去做分類, 但以下寫法太煩, 要寫太多次
    let {pathname} = new URL(request.url, 'http://127.0.0.1:9000');
    if (pathname ==='/') {
        let html = fs.readFileSync(__dirname + '/10_table.html');
        response.end(html);//設置響應體, (在1個Reponse中)必須子只能有1個End
    } else if (pathname === '/10_table.css') {
        let css = fs.readFileSync(__dirname + '/10_table.css');
        response.end(css);
    } else if (pathname === '/10_table.js') {
        let js = fs.readFileSync(__dirname + '/10_table.js');
        response.end(js);
    } else {
        response.statusCode = 404;
        response.end('<h1>404 Not Found</h1>');
    }
});

//監聽Port, 啟動服務
server.listen(9000, () => {
    console.log('服務已經啟動');
})