//import dir
//會先搵package.json入面的main
//如果冇package.json / main, 會搵index.js / index.json
//最後都冇的話就會有Error: cannot find module
const m = require('./module');

console.log(m);