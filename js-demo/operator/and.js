/*1.如果两个运算数都是boolean类型，则返回boolean值*/
var bTrue = true;
var bFalse = false;
var bResult = bTrue && bFalse;
console.log("1.如果两个运算数都是boolean类型，则返回boolean值");
console.log("bTrue = true，bFalse = false，bTrue && bFalse的结果是: " + (bResult)); //结果为false
console.log("\n");

/*2.如果一个运算数是对象，另一个是 Boolean 值，返回该对象*/
var obj = new Object();
console.log("2.如果一个运算数是对象，另一个是 Boolean 值，返回该对象");
console.log("obj是一个对象，true&&obj的结果是: " + (true && obj)); // [object Object]
console.log("obj是一个对象，true&&obj的结果是: " + (obj && true)); // true
console.log("obj==true&&obj的结果是: " + (obj == (true && obj))); // true
console.log("false&&obj的结果是: " + (false && obj)); // false
console.log("\n");

/*3.如果两个运算数都是对象，返回第二个对象。*/
var obj1 = new Object();
var obj2 = new Object();
console.log("3.如果两个运算数都是对象，返回第二个对象。");
console.log("obj1是一个对象，obj2是一个对象，obj1==(obj1&&obj2)的结果是: " + (obj1 == (obj1 && obj2))); //结果为false
console.log("obj1是一个对象，obj2是一个对象，obj2==(obj1&&obj2)的结果是: " + (obj2 == (obj1 && obj2))); //结果为true
console.log("str && str: " + "aaa" && "bbb"); // bbb
console.log("\n");

/*4.如果某个运算数是 null，返回null。*/
var a = null;
var b = true;
console.log("4.如果某个运算数是 null，返回null。");
console.log("a=null,b=true,a&&b的结果是: " + (a && b)); // null
console.log("\n");

/*5.如果某个运算数是NaN，返回NaN*/
var c = NaN;
var d = "str";
console.log("5.如果某个运算数是NaN，返回NaN");
console.log("c=NaN,d=str,c&&d的结果是: " + (c && d)); // NaN
console.log("\n");

/**
 * 6.JavaScript中的逻辑 AND 运算是简便运算，即如果第一个运算数决定了结果，就不再计算第二个运算数。
 * 对于逻辑 AND 运算来说，如果第一个运算数是 false，那么无论第二个运算数的值是什么，结果都不可能等于 true。
 */
var bFalse = false;
var bResult = (bFalse && bUnknown);
console.log("6.JavaScript中的逻辑 AND 运算是简便运算，即如果第一个运算数决定了结果，就不再计算第二个运算数");
console.log("对于逻辑 AND 运算来说，如果第一个运算数是 false，那么无论第二个运算数的值是什么，结果都不可能等于 true。");
console.log("bFalse=false，bUnknown是一个未定义的变量，bFalse && bUnknown的结果是: " + (bResult)); //输出 "false"
console.log("\n");

var bTrue = true;
var bResult = (bTrue && bUnknown); //发生错误
console.log(bResult); //这一行不会执行