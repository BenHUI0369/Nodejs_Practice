//聲明function
//cook
const cook = () => {
    console.log('I can cook');
}

//eat
const eat = () => {
    console.log('I can eat');
}

//Export module
// module.exports = {
//     cook,
//     eat
// }

//exports 暴露數據
// exports.cook = cook;
// exports.eat = eat;

//1. module.exports可以暴露"任意"數據
// module.exports = 521;

//2. 不能用exports = value的形式去暴露數據
//exports = 'iloveyou';

//exports = module.exports = {}

console.log(module.exports);
console.log(module.exports === exports);

exports.cook = cook;
exports = module.exports = {cook: cook};

exports = 521;
