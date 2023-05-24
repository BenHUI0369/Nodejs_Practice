//1. import http module
const http = require('http');

//2. create ser
const server = http.createServer((request, response) => {
    //獲得Method方式, 用{method} = request.method
    let {method} = request;
    //獲得請求的URL路徑, 用{pathname} = new URL object中的pathname
    let {pathname} = new URL(request.url, 'http://127.0.0.1:9000');
    response.setHeader('content-type', 'text/html;charset=utf-8');
    //判斷
    if (method === 'GET' && pathname ==='/login') {
        response.end('登錄頁面');
    } else if (method === 'GET' && pathname ==='/reg') {
        response.end('注册頁面');
    } else {
        response.end('Not Found');
    }   
})

// listening port, seart the server
server.listen(9000, () => {
    console.log('服務已經啟動, Port number: 9000')
})