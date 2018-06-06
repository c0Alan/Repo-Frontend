function Person() {
    /*使用var 属性名定义的属性是类的私有属性，外界无法访问，要想被外界访问，就要使用公共方法*/
    var QQ = "123456";
    var Email = "123456@qq.com";

    /*使用this.属性名定义的属性就是类的公共属性，是可以被外界访问的*/
    this.Name = "司马光";
    this.Age = 13;

    /*定义Person类的公共方法，凡是定义类的公共属性和公共方法都要使用this*/
    this.Show = function () { // 定义Person类的公共方法(特权方法)
        console.log("QQ=" + QQ + "\tEmail=" + Email);

    }

    /*定义Person类的私有方法*/
    function Show2() { // 这是Person类的一个私有方法，只能在Person类内部使用

    }
}

var p1 = new Person();
console.log("私有属性p1.QQ=" + p1.QQ + "\t" + "p1.Email=" + p1.Email);
console.log("公共属性p1.Name=" + p1.Name + "\t" + "p1.Age=" + p1.Age);
p1.Show();
// p1.Show2(); // 这里会报错，无法调用Person类的私有方法，

function Test() {
    console.log(this.v);
}
v = 90;
Test(); // 90
// window.Test(); // 报错 // 哪个对象调用this所在的函数，那么this代表的就是哪个对象实例，这里是window对象调用Test()方法，因此此时this指的就是window对象

function Test2() {
    this.fnTest = function () {
        console.log(this.v2);
        console.log(this.v3); // undefined
    }
}

v3 = "333";
var t = new Test2();
t.v2 = "记住一句话：哪个对象调用this所在的函数，那么this代表的就是哪个对象实例";
t.fnTest(); // 这里是t对象调用Test()方法，因此此时this指的就是t对象
// fnTest(); // ReferenceError: fnTest is not defined
// Test2.fnTest(); // TypeError: Test2.fnTest is not a function