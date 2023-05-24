//import http module
const http = require('http');
//1. import URL module
const url = require('url');

//創建服務對象
//當http請求 發生時 return function就會執行
const server = http.createServer((request, response) => {
    //解析 request.url
    //console.log(request.url);
    let res = url.parse(request.url);
    //路徑
    let pathname = res.pathname;
    console.log(pathname);
    response.end('hello HTTP');//設置響應體
});

//監聽Port, 啟動服務
//HTTP default Port = 80
//HTTPS default Port = 443
server.listen(9000, () => {
    console.log('服務已經啟動');
})