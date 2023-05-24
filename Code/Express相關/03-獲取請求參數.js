//import express
const express = require('express');

//create 應用對象
const app = express();

//create路由
app.get('/request', (req, res) => {
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.httpVersion);
    // console.log(req.headers);

    // //express 操作
    // console.log(req.path);
    // console.log(req.query);
    // //獲取IP
    // console.log(req.ip);
    //獲取請求頭
    console.log(req.get('host'));
    res.end('Hello express!');
});

//Listen Port, 啟動服務
app.listen(9000, () => {
    console.log('服務已經啟動, Port:3000正在監聽中');
});