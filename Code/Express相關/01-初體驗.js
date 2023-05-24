//1. import express
const express = require('express');

//2. create 應用對象
const app = express();

//3. create路由
//如果係GET方法,而且address係/home就會執行入面的function
//3para: method, path, callback(req, res)
//app.<method>(path, callback)
app.get('/home', (req, res) => {
    res.end('Hello express!');
});

//4. Listen Port, 啟動服務
app.listen(9000, () => {
    console.log('服務已經啟動, Port:3000正在監聽中');
});