//import express
const express = require('express');

//create 應用對象
const app = express();

//create路由
//app.get('/100.html')
//用/:id代替所有id
app.get('/:id.html', (req, res) => {
    //獲取URL路徑的路由參數, 而id = para入面的id(要完全一樣)
    console.log(req.params.id);
    res.setHeader('content-type', 'text/html;charset=utf-8');
    res.end('商品詳情');
});

//Listen Port, 啟動服務
app.listen(9000, () => {
    console.log('服務已經啟動, Port:3000正在監聽中');
});