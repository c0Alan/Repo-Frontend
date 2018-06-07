// 非常经典的递归函数
function factoriak(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * facaorial(num - 1); // 与函数名factoriak耦合性太高了
    }
}

var fac2 = factoriak;
var result = fac2(10); // facaorial is not defined
console.log(result);

// 上述代码与函数名耦合性太高，一换函数名就不行了，就可以采用以下方法
function factoriak(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1); // 这样无论用什么名字都能完成递归调用 
    }
}

var fac3 = factoriak;
var result = fac3(10); 
console.log(result); // 3628800