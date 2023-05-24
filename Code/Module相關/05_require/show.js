/**
 * fake code
 */

function require(file) {
    //1. 將相對路徑轉做絕對路徑
    let absoulutePath = path.resolve(__dirname, file);
    //2. 緩存檢測
    if (caches[absoulutePath]) {
        return caches[absoulutePath];
    }
    //3. 讀取文件代碼
    let code = fs.readFileSync(absoulutePath).toString();
    //4. 包做一個function, 之後再執行
    let module = {};
    let exports = module.exports = {}; 
    (function (exports, require, module, __filename, __dirname) {
        const test = {
            name: 'ben'
        }
        
        module.exports = test;
        
        //輸出
        console.log(arguments.callee.toString());
    })(exports, require, module, __filename, __dirname)
    //5. 緩存結果
    caches[absoulutePath] = module.exports;
    //6. 返回module.exports的值
    return module.exports;

}

const m = require('./me.js');
