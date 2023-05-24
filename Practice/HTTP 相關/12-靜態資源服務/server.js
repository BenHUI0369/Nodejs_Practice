/*
 * Create HTTP server, Port = 9000 also fulfilling the below requirement
 * GET /index.html               響應page/index.html 中的內容
 * GET /css/app.css             響應page/css/app.css 中的內容
 * GET /image/logo.png          響應page/image/logo.png 中的內容
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
//create variable
let mimes = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpg',
    gif: 'image/gif',
    mp4: 'video/mp4',
    mp3: 'audio/mpeg',
    json: 'application/json'
}

const server = http.createServer((request, response) => {
    if (request.method !== 'GET') {
        response.statusCode = 405;
        response.end('<h1>405 Method Not Allowed</h1>')
        return;
    }
    let {pathname} = new URL(request.url, 'http://127.0.0.1:9000');
    //聲明一個Variable
    let root = __dirname + '/page';
    //let root = __dirname + '/../';
    //拼接文件路徑
    let filePath =  root + pathname;
    //讀取文件 fs異步API
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err);
            //判斷錯誤
            switch(err.code) {
                case 'ENOENT':
                    //File不存在
                    response.statusCode = 404;
                    response.end('<h1>404 Not Found</h1>');
                    break;
                case 'EPERM':
                    //權限不足
                    response.statusCode = 403;
                    response.end('<h1>403 Forbidden</h1>');
                    break;
                default:
                    response.statusCode = 500;
                    response.end('<h1>Internal Server Error</h1>');
                    break;
            }
            return;
        }
        let ext = path.extname(filePath).slice(1);
        //獲取對應的類型
        let type = mimes[ext];
        if (type) {
            //                                  text/html;charset=utf-8
            if (ext === 'html') {
                response.setHeader('content-type',  type + ';charset=utf-8');
            } else {
                response.setHeader('content-type',  type);
            }
        } else {
            response.setHeader('content-type', 'applivation/oct-stream')
        }
        
        //響應文件內容
        response.end(data);
    })
})

server.listen(9000, () => {
    console.log('服務已經啟動');
})