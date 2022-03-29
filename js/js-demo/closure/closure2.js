/** 闭包实例1 */
function f1() {
    var n = 999; // f1函数内部的局部变量n
    // 在f1函数内部定义一个f2函数
    function f2() {
        //在f2函数内部是可以访问局部变量n的
        console.log(n); // 999
    }
    return f2;
}
var f = f1();
f();

/** 闭包实例2 */
function f1() {
    var n = 999;
    // nAdd是一个没有使用var声明的全局变量，这个变量现在指向了在f1函数内部声明的一个匿名函数
    nAdd = function () {
        n += 1
    }

    function f2() {
        console.log(n);
        // n = n + 1; // 这里对n做操作也是有效的
    }
    return f2;
}
var result = f1(); // result就是f2函数
result(); // 第一次调用result函数 999
nAdd(); // nAdd代表的就是在f1函数内部声明的一个匿名函数，nAdd()就是在调用匿名函数
result(); // 第二次调用result函数 1000