/** 查找obj对象的prop属性 */
function getProperty(obj, prop) {
    if (obj.hasOwnProperty(prop))
        return obj[prop];
    else if (obj.__proto__ !== null)
        return getProperty(obj.__proto__, prop); // 递归
    else
        return undefined;
}
var Person = function () {}; // 定义Person类
Person.prototype.Say = function () {
    console.log("Person say");
}
Person.prototype.Salary = 50000;
var Programmer = function () {}; // 定义Programmer类
// Programmer.prototype = new Person();// 让程序员类从人这个类继承，写法一
Programmer.prototype = Person.prototype; // 让程序员类从人这个类继承，写法二
Programmer.prototype.WriteCode = function () {
    console.log("programmer writes code");
};
Programmer.prototype.Salary = 500;
var p = new Programmer();
var SayFn = getProperty(p, "Say"); // 查找p对象的Say方法
SayFn.call(p); // Person say