// 1.hasOwnProperty: 检查该对象的原型链中是否具有该属性
var str = "";
console.log(str.hasOwnProperty("split")); // return false
console.log(String.prototype.hasOwnProperty("split")); // return true

// 2.isPrototypeOf(object) 判断该对象是否为另一个对象的原型。
function foo() {
    this.name = 'foo';
}

function bar() {

}
bar.prototype = new foo();
var goo = new bar();
console.log(goo.name); //foo
console.log(bar.prototype.isPrototypeOf(goo)); // true，在bar的原型链中有当前对象goo，则isPrototypeOf方法返回true





