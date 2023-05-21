const fs = require('fs');

//2. create write flow obj
const ws = fs.createWriteStream('./feel.txt');

//3. write
ws.write('半亩方塘一鉴开\r\n');
ws.write('天光云影共徘徊\r\n');
ws.write('问渠那得清如许\r\n');
ws.write('为有源头活水来\r\n');

//4. close tunnel
//after the end of the code, the writestream will auto close
ws.close();
//after end, cannot use ws.write later
ws.end();