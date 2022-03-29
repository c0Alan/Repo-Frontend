// JavaScript编写类的方式
/**
1、构造函数方式
用构造函数模拟"类"，在其内部用this关键字指代实例对象。

基本语法：

function 类名(){
     this.属性名;//公共属性
     var 属性名;//私有属性
    // 凡是定义类的公共属性和公共方法都要使用this
    // 定义类的公共函数
    this.函数名=function(){
            ..... 
    }
    //定义类的私有函数
    function 函数名(){
　　　　......
    }
}
*/

/*定义一个Person类*/
function Person(_name, _age, _salary) {
    // Person类的公开属性，类的公开属性的定义方式是：”this.属性名“
    this.name = _name;
    // Person类的私有属性，类的私有属性的定义方式是：”var 属性名“
    var age = _age; // 私有属性
    var salary = _salary; // 私有属性

    /*定义私有属性Age的对外公开访问方法*/
    this.setAge = function (intAge) {
        age = intAge;
    }
    /*定义私有属性Age的对外公开访问方法*/
    this.getAge = function () {
        return age;
    }

    // 定义Person类的公开方法(特权方法)，类的公开方法的定义方式是：”this.functionName=function(){.....}“
    this.Show = function () {
        console.log("在公开方法里面访问类的私有属性是允许的，age=" + age + "\t" + "salary=" + salary); // 在公开方法里面访问类的私有属性是允许的
    }
    // 公共方法
    this.publicMethod = function () {
        console.log("在公开方法里面访问类的私有方法是允许的");
        privateFn(); // 在公开方法里面调用类的私有方法
        privateFn2(); // 在公开方法里面调用类的私有方法
    }
    /*
    定义Person类的私有方法(内部方法)，
    类的私有方法的定义方式是：”function functionName(){.....}“，
    或者 var functionName=function(){....}
    */
    function privateFn() {
        console.log("我是Person类的私有函数privateFn");
    }

    var privateFn2 = function () {
        console.log("我是Person类的私有函数privateFn2");
    }
}

/** 测试 */
var p1 = new Person("风清扬", 24, 2300);
var p2 = new Person("白展堂", 24, 2300);
console.log((p1 instanceof Person)); // p1是Person类的实例，结果是true
console.log((p2 instanceof Person)); // p2是Person类的实例，结果是true
console.log((p1.show == p2.show)); // false
console.log((p1.show == p2.show)); // true
console.log(p1.name); // 访问公有属性，这是可以正常访问的
console.log(p1.salary) // undefined, 不能使用类的对象去直接访问类私有属性，这是访问不了的，结果都是undefined
p1.Show(); // 调用类的公共函数，这次允许的
p1.publicMethod(); // 调用类的公共函数，这次允许的
p1.setAge(24); // 使用public方法setAge方法为私有属性age赋值
console.log(p1.getAge()); // 使用getAge方法获取私有属性age的值
// console.log(p1.privateFn2());// 不能使用类的对象去调用类的私有方法，这里会报错”对象不支持此属性或者方法