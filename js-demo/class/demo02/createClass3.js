// 2、原型方式
// 写法二：使用原型方式给类定义public属性和public方法更加优雅的写法，我个人推荐使用这种方式，这种方式看起来比较舒服

/*定义类Person2*/
function Person2() {

}

/*使用原型方式给类定义public属性和public方法更加优雅的写法*/
Person2.prototype = {
    name: "", // public属性
    age: 0, // public属性
    weight: 0, // public属性
    height: 0, // public属性
    /*public方法*/
    init: function (_name, _age, _weight, _height) {
        this.name = _name;
        this.age = _age;
        this.weight = _weight;
        this.height = _height;
        console.log("this.name=" + this.name + ",this.age=" + this.age + ",this.weight=" + this.weight + ",this.height=" + this.height);
    },
    /*public方法*/
    show: function () {
        console.log("show method");
    }
};

/** 测试 */
var p2_1 = new Person2();
var p2_2 = new Person2();
p2_1.init("李世民", 24, 115, 160);
p2_2.init("孙悟空", 25, 120, 170);
console.log(p2_1.name + p2_1.height); // 访问公有属性，这是可以正常访问的
console.log(p2_2.name + p2_2.height); // 访问公有属性，这是可以正常访问的
console.log((p2_1 instanceof Person2)); // p2_1是Person2类的实例，结果是true
console.log((p2_2 instanceof Person2)); // p2_2是Person2类的实例，结果是true
// 当==两边的内容是对象或者是对象的函数属性时，则比较内存地址是否相等
console.log((p2_1.init == p2_2.init)); // true
p2_1.name = "灭世魔尊"; // 为公共属性重新赋值
console.log(p2_1.name); // 访问公有属性，这是可以正常访问的
p2_1.show(); // 调用类的公共函数，这次允许的