// this指的是函数执行时所处的作用域
// 每个函数都包含： length和prototype。 length属性表示函数希望接收的参数个数。


function sayName(name) {
    console.log(name);
}

function sum(num1, num2) {
    return num1 + num2;
}

function sayHi() {
    console.log("hi");
}
console.log("sayName函数接收的参数个数是：" + sayName.length); // 1
console.log("sum函数接收的参数个数是：" + sum.length); // 2
console.log("sayHi函数接收的参数个数是：" + sayHi.length); // 0

　　
// 每个函数都包含两个非继承而来的方法： apply() 和call();
// 这两个方法的用途都是在特定的作用域中调用函数， 实际上等于设置函数体内this对象的值
// apply() 方法接收两个参数: 一个是在其中运行函数的作用域, 另一个是参数数组. 其中第二个参数可以是Array的实例,  也可以是arguments对象。


function sum(num1, num2) {
    return num1 + num2;
}

function callSum(num1, num2) {
    return sum.apply(this, arguments); // 传入aguments对象
}

function callSum2(num1, num2) {
    return sum.apply(this, [num1, num2]); // 传入数组
}
console.log(callSum(10, 10)); // 20
console.log(callSum2(10, 10)); // 20

　　
// call() 方法接第一个参数是函数运行的作用域， 其余的参数就是传递给函数运行时需要的参数(一个或多个)。
function sum(num1, num2) {
    return num1 + num2;
}

function callSum(num1, num2) {
    return sum.call(this, num1, num2);
}
console.log(callSum(10, 10));

　　
// apply() 和 call() 最强大的地方是能够扩充函数赖以运行的作用域
// window.color = "red";
color = "red";
var o = {
    color: "blue"
};

function sayColor() {
    console.log(this.color);
}
sayColor(); // red
sayColor.call(this); // undefined 当调用这个方法时 this 为空对象 {}
sayColor.apply(this); // undefined
// sayColor.call(window); // red
sayColor.call(o); // blue

// console.log(console);
