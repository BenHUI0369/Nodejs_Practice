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
    //獲取請求的方法
    //console.log(request.method);
    //獲取請求的URL
    //console.log(request.url);//只包括url中的路徑跟查詢string
    //獲取HTTP協議Version
    //console.log(request.httpVersion);
    //獲取HTTP 請求頭
    console.log(request.headers);
    response.end('http');//設置響應體
});

//3. 監聽Port, 啟動服務
//HTTP default Port = 80
//HTTPS default Port = 443
server.listen(9000, () => {
    console.log('服務已經啟動');
})