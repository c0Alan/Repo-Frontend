var name = "aaa"; //name是string类型
console.log(typeof name); // string

var age = 24; //age是number类型
console.log(typeof age); // number

var flag = true; //flag是boolean类型
console.log(typeof flag); // boolean

name = 10; //name自动变成了number类型
console.log(typeof name); // number

var email; //email只是声明，没有赋值，因此代表的类型是"undefined"，也就是无法确定
console.log(typeof email); // undefined

/**
 * 为什么 typeof 运算符对于 null 值会返回 "Object"。
 * 这实际上是 JavaScript 最初实现中的一个错误，然后被 ECMAScript 沿用了。
 * 现在，null 被认为是对象的占位符，从而解释了这一矛盾，但从技术上来说，它仍然是原始值。
 */
var a = null;
console.log(typeof a); // object

/** 方法 */
function fun(){}
console.log(fun()); // undefined 方法没有返回值
console.log(typeof fun); // function
console.log(fun); // [Function: fun]