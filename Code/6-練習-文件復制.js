/*
 * Requirement:
 * copy ..Data/Linux Assignment 3.mp4
 */

//import fs module
const fs = require('fs');
const process = require('process');

/*
// Method 1:
//read file content
const data = fs.readFileSync('../Data/Linux Assignment 3.mp4')
//Write file
fs.writeFileSync('../Data/Linux Assignment 3_2.mp4', data);
console.log(process.memoryUsage()); //60559360 bytes 57.7MB
*/


//Method 2:(resource usage is lesser)
//Stread method
//create readStream
const rs = fs.createReadStream('../Data/Linux Assignment 3.mp4');
//create writeStream
const ws = fs.createWriteStream('../Data/Linux Assignment 3_3.mp4')

//connect data event

rs.on('data', chunk => {
    ws.write(chunk);
})

rs.on('end' , () => {
    console.log(process.memoryUsage()); //54607872 bytes 52.1MB
})

//afterReadStream, pass data to w riteStream
rs.pipe(ws);