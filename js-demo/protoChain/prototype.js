/** 
 * new 的过程:
 * 1.var p={}; 初始化一个对象p。
 * 2.p.__proto__=Person.prototype; // 将对象p的 __proto__ 属性设置为 Person.prototype
 * 3.Person.call(p,"Tom",24); // 调用构造函数Person来初始化p。
 */
function Person(_name, _age) {
    this.name = _name;
    this.age = _age;
}
var p = new Person("Tom", 24); // 创建一个人，名字是Tom

// __proto__这个属性只有在firefox或者chrome浏览器中才是公开允许访问的，因此，其他基于IE内核的浏览器是不会返回true的。
console.log((p.__proto__ === Person.prototype)); // true

/** 
 * 当我们调用p.Say()时，首先在 p 中找有没有这个属性, 
 * 如果没有, 他就需要到他的__proto__中去找，也就是Person.
 */
var Person = function () {};
Person.Say = function () { // 静态方法, 通过类名调用
    console.log("Hello 1");
}
Person.prototype.Say = function () { // 动态方法, 通过实例化对象调用
    console.log("Hello 2");
}
var p = new Person();
p.Say(); // Hello 2, 访问的是动态方法

Person.Say(); // Hello 1


/** 
 * 1. Say() 方法原型链查找路劲, Programmer 的原型链上找(找不到) --> Person 的属性上找
 * 2. WriteCode() 方法, Programmer 自身属性上找
 * 
 * var p = new Programmer();
 * p.__proto__ = Programmer.prototype;
 * Programmer.prototype = new Person();
 *  var p1 = new Person();
 *  Programmer.prototype = p1;
 *  p1.__proto__ = Person.prototype;
 * Programmer.prototype.__proto__ = Person.prototype;
 *      p.__proto__ = Programmer.prototype
 *      p.__proto__.__proto__ = Person.prototype
 * p.Say()。由于p没有Say这个属性，于是去 p.__proto__，也就是Programmer.prototype，也就是p1中去找，
 * 由于p1中也没有Say，那就去 p.__proto__.__proto__，也就是Person.prototype中去找，于是就找到了Say方法。
 */
var Person = function () {};
Person.prototype.Say = function () {
    console.log("Person say");
}
Person.prototype.Salary = 50000;
var Programmer = function () {};
Programmer.prototype = new Person(); // 让程序员类从人这个类继承
Programmer.prototype.WriteCode = function () {
    console.log("programmer writes code");
};
Programmer.prototype.Salary = 500;
var p = new Programmer();
p.Say(); // Person say
p.WriteCode(); // programmer writes code
console.log(p.Salary); // 500



