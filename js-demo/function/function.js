// 函数名实际上也是一个指向函数对象的指针，不会与某个函数绑定。
// 对于采用方式一声明的函数，解析器会率先读取函数声明，并使其置于任何代码之前；
// 而对于函数表达式，则必须等到解析器执行到它所在的代码行，才可以执行。

/** 第一种定义方式 */
function fun1(str) {
    console.log("hello " + str);
}
fun1("fun1"); // hello fun1 可以在方法定义的前后调用

/** 第二种定义方式 */
var fun2 = fun1;
fun2("fun2"); // hello fun2, 必须在方法定义后调用

/** 第三种定义方式, 匿名方法 */
var fun3 = function (str) {
    console.log("hello " + str);
}
fun3("fun3"); // hello fun3, 必须在方法定义后调用

/** 创建动态函数 */
/**
 * 动态函数必须用Function对象来定义, Function是javascript中的一个对象
 * 创建动态函数的基本格式：var 变量名 = new Function("参数1"，"参数2"，"参数n"，"执行语句");
 * 优点: 支持定义可配置方法
 */
var param1 = "x";
var param2 = "y";
var exec1 = "var sum; sum = x+y; return sum;";
var exec2 = "var sum; sum = x-y; return sum;";
var calculate = new Function(param1, param2, exec1);
console.log(calculate(2, 3)); // 5
calculate = new Function(param1, param2, exec2);
console.log(calculate(2, 3)); // -1

/** arguments, 可变参数 */
function printArgs() {
    var args = "";
    for (var i = 0; i < arguments.length; i++) {
        args += " " + arguments[i];
    }
    console.log(args);
}
printArgs('a');
printArgs('a', 2);
printArgs('a', 3, true);

/** JavaScript不支持函数的重载, 后面定义的方法会覆盖前面定义方法 */
function override(){
    console.log("1");
}

override(); // 2

function override(){
    console.log("2");
}