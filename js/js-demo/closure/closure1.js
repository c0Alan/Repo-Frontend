/** 变量的作用域 */

// 局部变量, 定义在方法中, 且通过 var 定义的变量, (方法中没加 var 的变量为全局变量)
var var1 = 'aa'; // 全局变量
var fun1 = function(){
    console.log(var1);
}
fun1(); // aa

var fun2 = function(){
    var var2 = 'bb'; // 局部变量
}
// fun2();
console.log(var2); // 报错, var2 is not defined

var fun3 = function(){
    var3 = 'cc'; // 全局变量
}
fun3(); // 这里必须调用一下方法, 方法中的全局变量才会生效
console.log(var3); // cc
