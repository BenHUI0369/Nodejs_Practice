//import fs module, and path module
const fs = require('fs');
const path = require('path');

//write file
//fs.writeFileSync(__dirname + '/index.html', 'love');
//console.log(__dirname + '/index.html');

//resolve
//2para, __dirname, relative path (with ./ symbol)
//console.log(path.resolve(__dirname, './index.html'));
// console.log(path.resolve(__dirname, 'index.html'));
//console.log(path.resolve(__dirname, './index.html', './test.txt'));

//sep = seperate, in window = \, Linux /
//console.log(path.sep);

//parse 方法
//console.log(__filename); //文件絕對路徑
let str = 'D:\\CentennialCollege\\Sem3\\COMP229_Web\\Nodejs_Practice\\Code\\14-路徑.js';
//console.log(path.parse(str));//return object of the path

//basename part of parse
//console.log(path.basename(str));//filename

//diirname part of parse
//console.log(path.dirname(str));

//extname part of parse
//console.log(path.extname(str));
