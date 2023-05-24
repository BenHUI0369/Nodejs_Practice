//import express
const express = require('express');
//import json file
//因為json file入面本身有singers object, 所有用{} 去create
//所代表的=require('./singer/singers.json').singers
const {singers} = require('./singer/singers.json');
console.log(singers);

//create 應用對象
const app = express();

//create路由
app.get('/singer/:id.html', (req, res) => {
    //獲取路由參數
    let {id} = req.params;
    //在數組中找尋對應ID
    let result = singers.find(item => {
        if (item.id === Number(id)) {
            return true;
        }
    });
    if (!result) {
        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1>');
        return;
    }
    //console.log(result);
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h2>${result.singer_name}</h2>
        <img src='${result.singer_pic}' />
    </body>
    </html>
    `);
});

//Listen Port, 啟動服務
app.listen(9000, () => {
    console.log('服務已經啟動, Port:3000正在監聽中');
});