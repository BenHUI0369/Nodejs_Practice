//import uniq
//const uniq = require('uniq');
//const uniq = require('./node_modules/uniq')
const uniq = require('./node_modules/uniq/uniq.js')

//使用function
let arr = [1,2,3,4,5,4,3,2,1];

const result = uniq(arr);
console.log(result);