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
    //1. 聲明一個Variable
    let body = '';
    //2. 綁定事件
    request.on('data', chunk => {
        //本來chunk是Buffer, 但進行+operation 會變做string
        body += chunk;
    })
    //3. 綁定end事件, 當讀完所有data時就會執行
    request.on('end', () => {
        console.log(body);
    })
    //響應
    response.end('hello HTTP');//設置響應體
});

//3. 監聽Port, 啟動服務
//HTTP default Port = 80
//HTTPS default Port = 443
server.listen(9000, () => {
    console.log('服務已經啟動');
})