//1. import fs module
const fs = require('fs');

//relative path
//current dir
//fs.writeFileSync('./index.html', 'love');
//fs.writeFileSync('index.html', 'love');
//previous dir
//fs.writeFileSync('../index.html', 'love');

//absolute path
//fs.writeFileSync('D:/CentennialCollege/Sem3/COMP229_Web/Nodejs_Practice/Code/index.html', 'love');
//fs.writeFileSync('C:/index.html', 'love');// permission not enough
fs.writeFileSync('/CentennialCollege/Sem3/COMP229_Web/Nodejs_Practice/Code/index.html', 'love');
