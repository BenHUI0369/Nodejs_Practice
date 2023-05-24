//1. import http module
const http = require('http');

//2. 創建服務對象
//1para: return function(req, res)
//請求報文的封裝對象 => request
//請求行, 請求頭, 請求體等等
//響應報文的封裝對象 => response
//響應行, 響應頭, 響應體等等

//當http請求 發生時 return function就會執行
const server = http.createServer((request, response) => {
    //response.end('Hello HTTP Server');//設置響應體
    //利用setHeader更改content type令其能讀取中文
    response.setHeader('content-type', 'text/html;charset=utf-8');
    response.end('你好 Nodemon Hello Http');//設置響應體
});

//3. 監聽Port, 啟動服務
//HTTP default Port = 80
//HTTPS default Port = 443
server.listen(9000, () => {
    console.log('服務已經啟動');
})
