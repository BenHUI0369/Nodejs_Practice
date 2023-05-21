//console.log('hello Node.js');

//1. alloc
//reset all value to 0
let buf = Buffer.alloc(10);
//console.log(buf);

//allocUnsafe
//contain old value in RAM
//speed is faster since no need to reset
let buf_2 = Buffer.allocUnsafe(10);
//console.log(buf_2);

//3. from
let buf_3 = Buffer.from('hello');
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
//default utf-8
//console.log(buf_4.toString());

//[]
let buf_5 = Buffer.from('hello');
//console.log(buf_5[0].toString(2));//01101000
buf_5[0] = 95;
console.log(buf_5.toString());

//overflow
let buf_6 = Buffer.from('hello');
buf_6[0] = 361; //reduce high dig number, only take 8 dig from right to left, 0001 0110 1001 => 0110 1001 = 105(10) 69(16)
//console.log(buf_6);

//chinese
//uft-8 chinese, 1個字有3字節
let buf_7 = Buffer.from('你好');
console.log(buf_7);