//import express
const express = require('express');

//create 應用對象
const app = express();

//create路由
app.get('/home', (req, res) => {
    res.end('Hello express!');
});

//path = root
app.get('/', (req, res) => {
    res.end('Home');
});

//method=post
app.post('/login', (req, res) => {
    res.end('Login');
});

//all method, as long as path is the same
app.all('/test', (req, res) => {
    res.end('Test');
});

//* = all path, 如果上面的app.get / app.post都不符合
//就會出404
app.all('*', (req, res) => {
    res.end('404 Not Found');
});

//Listen Port, 啟動服務
app.listen(9000, () => {
    console.log('服務已經啟動, Port:3000正在監聽中');
});