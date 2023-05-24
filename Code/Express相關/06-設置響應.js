//import express
const express = require('express');

//create 應用對象
const app = express();

//create路由
app.get('/response', (req, res) => {
    // //原生響應
    // res.statusCode = 404;
    // res.statusMessage = 'love';
    // res.setHeader('xxx', 'yyy');
    // res.write('hello express ');
    // res.end('response');

    // //express響應
    // res.status(500);
    // res.set('aaa', 'bbb');
    // res.send('你好Express');
    res.status(500).set('aaa', 'bbb').send('你好我是測試行');
});

//Listen Port, 啟動服務
app.listen(9000, () => {
    console.log('服務已經啟動, Port:3000正在監聽中');
});