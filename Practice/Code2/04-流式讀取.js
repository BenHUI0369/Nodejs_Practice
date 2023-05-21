//import fs module
const fs = require('fs');

//create readStream
const rs = fs.createReadStream('../Data/Linux Assignment 3.mp4');

//connect with date event
//2para: event name, callback function (usually called chunk)
rs.on('data', chunk => {
    console.log(chunk.length);// 65536 bytes => 64KB; 1byte = 8bit
    // console.log(chunk);//in Buffer form
    // console.log(chunk.toString());// transfer into string format
});

//4. end
rs.on('end', () => {
    console.log('讀取完成');
})

//處理大文件時可提高效率