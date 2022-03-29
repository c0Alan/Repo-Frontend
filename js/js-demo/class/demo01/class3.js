// JS中一切都是对象，类(原型对象)其实也是对象，它实际上是Function类的一个实例

function Person() {

}
/**
    Person.constructor得到的Person类的构造函数如下：
    function Function() {
        [native code]
    }
*/
console.log("Person.constructor：" + Person.constructor); //Person类的构造函数
console.log("Person：" + Person);
var p1 = new Person();
console.log("p1.constructor：" + p1.constructor); //”p1.constructor“是得到p1实例的构造函数
//如何判断某个对象是不是某个类型，采用如下两种方式
if (p1 instanceof Person) {
    console.log("p1 is instanceof Person");
}
if (p1.constructor == Person) {
    console.log("p1.constructor is Person");
}

var num1 = 123;
console.log("num1.constructor：" + num1.constructor); // function Number() { [native code] }

var str1 = "abc";
console.log("str1.constructor：" + str1.constructor); // function String() { [native code] }