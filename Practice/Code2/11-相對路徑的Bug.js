//1. import fs module
const fs = require('fs');

//relative path
//相對路徑的參照物: 命令行的工作目錄, 而不是文件所有的路工作目錄
//不太穩定,因為工作目錄決定
//fs.writeFileSync('./index.html', 'love');

//絕對路徑 '全Global variable' 保存的是所在文件的所在目錄的絕對路徑
//console.log(__dirname);
fs.writeFileSync(__dirname + '/index.html', 'love');