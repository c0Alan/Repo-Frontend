// 3、构造函数+原型
// 构造函数方式和原型方式都有各自的优缺点，因此可以把这两种方式合并起来，
// 用构造函数方式来定义类的属性(public属性，private属性)，用原型方式来定义类的方法(public方法)。
// 互补不足，这就有了第三种写法。

/*定义一个Person类*/
function Person(_name, _age, _salary) {
    //在Person类内部定义类的public属性和private属性以及private方法
    //Person类的公开属性，类的公开属性的定义方式是：”this.属性名“
    this.name = _name;
    //Person类的私有属性，类的私有属性的定义方式是：”var 属性名“
    var age = _age; //私有属性，只能在类内部使用
    var salary = _salary; //私有属性，只能在类内部使用
    /*
    定义Person类的私有方法(内部方法)，只能在类内部使用
    类的私有方法的定义方式是：”function functionName(){.....}“，
    或者 var functionName=function(){....}
    */
    function privateFn() {
        console.log("我是Person类的私有属性age，只能在Person类内部使用，初始化后age=" + age);
        console.log("我是Person类的私有函数privateFn，只能在Person类内部使用");
    }

    var privateFn2 = function () {
        console.log("我是Person类的私有属性salary，只能在Person类内部使用，初始化后salary=" + salary);
        console.log("我是Person类的私有函数privateFn2，只能在Person类内部使用");
    }

    privateFn(); //在Person类内部调用私有方法
    privateFn2(); //在Person类内部调用私有方法
}

//使用prototype原型方式定义的方法(public方法)是无法访问类的私有属性和私有方法的
//使用prototype原型方式定义Person类的方public方法
Person.prototype = {
    setName: function (_name) {
        this.name = _name;
        //privateFn();//不能调用Person类定义的私有方法privateFn()，会报错：缺少对象
    },
    getName: function () {
        return this.name;
    },
    show: function () {
        console.log("公开方法show");
    },
    //公共方法
    publicMethod: function () {
        console.log("公开方法publicMethod");
    }
};


/** 测试 */
var p1 = new Person("李狗蛋", 24, 2300);
var p2 = new Person("李富贵", 25, 3000);
console.log((p1 instanceof Person)); // p1是Person类的实例，结果是true
console.log((p2 instanceof Person)); // p2是Person类的实例，结果是true
// 当==两边的内容是对象或者是对象的函数属性时，则比较内存地址是否相等
console.log((p1.show == p2.show)); // true
console.log((p1.show == p2.show));
console.log(p1.name); // 访问公有属性，这是可以正常访问的
console.log(p1.salary) // 不能使用类的对象去直接访问类私有属性，这是访问不了的，结果都是undefined
p1.show(); // 调用类的公共函数，这次允许的
p1.publicMethod(); // 调用类的公共函数，这次允许的
p1.setName("旺财"); // 调用类的公共函数设置为name属性重新赋值
console.log(p1.getName());
// console.log(p1.privateFn2());// 不能使用类的对象去调用类的私有方法，这里会报错”对象不支持此属性或者方法