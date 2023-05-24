//import http module
const http = require('http');

//創建服務對象
//1para: return function(req, res)
//請求報文的封裝對象 => request
//請求行, 請求頭, 請求體等等
//響應報文的封裝對象 => response
//響應行, 響應頭, 響應體等等

//當http請求 發生時 return function就會執行
const server = http.createServer((request, response) => {
    //1. 設置響應狀態碼
    // response.statusCode = 203;
    // response.statusCode = 404;
    //2. 響應狀態的描述
    //response.statusMessage = 'iloveyou';
    //3. 響應頭
    //2para: 響應頭名
    //response.setHeader('content-type', 'text/html;charset=uft-8');
    //response.setHeader('Server', 'Node.js');
    //response.setHeader('myHeader', 'test test test');
    //response.setHeader('test', ['a', 'b', 'c']);//多個同名header
    response.write('love');
    response.write('love');
    response.write('love');
    response.write('love');

    response.end();//設置響應體, (在1個Reponse中)必須子只能有1個End
});

//監聽Port, 啟動服務
//HTTP default Port = 80
//HTTPS default Port = 443
server.listen(9000, () => {
    console.log('服務已經啟動');
})