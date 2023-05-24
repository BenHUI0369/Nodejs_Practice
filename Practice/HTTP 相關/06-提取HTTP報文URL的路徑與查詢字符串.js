//import http module
const http = require('http');


//創建服務對象
//當http請求 發生時 return function就會執行
const server = http.createServer((request, response) => {
    //實例化URL的對象
    //2para, path + http path
    //let url = new URL('search?a=100&b=200', 'http:127.0.0.1:9000');
    let url = new URL(request.url, 'http:127.0.0.1:9000');
    //輸出路徑
    console.log(url.pathname);
    //輸出Keyword 要用Get method傳入key搵value
    console.log(url.searchParams.get('keyword'));
    response.end('hello HTTP');//設/置響應體
});

//監聽Port, 啟動服務
//HTTP default Port = 80
//HTTPS default Port = 443
server.listen(9000, () => {
    console.log('服務已經啟動');
})