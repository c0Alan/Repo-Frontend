// 2、原型方式
// 需要说明的是，使用原型方式编写JavaScript类是无法给类添加私有属性和私有方法的，使用原型方式添加的属性和方法都是public的。

/*定义一个Person类*/
function Person(_name, _age, _weight, _height) {
    this.init(_name, _age, _weight, _height);
}

/*使用原型的方式定义Person类的public属性：name,age,weight,height，使用原型的方式添加的属性都是public的*/
Person.prototype.name;
Person.prototype.age;
Person.prototype.weight;
Person.prototype.height;
/*使用原型的方式给Person类添加public方法，使用原型的方式添加的方法都是public的*/
/*使用原型的方式给Person类添加init方法*/
Person.prototype.init = function (_name, _age, _weight, _height) {
    if (_name != undefined && _age != undefined && _weight != undefined && _height != undefined) {
        this.name = _name;
        this.age = _age;
        this.weight = _weight;
        this.height = _height;
        console.log("this.name=" + this.name + ",this.age=" + this.age + ",this.weight=" + this.weight + ",this.height=" + this.height);
    }

}
/*使用原型的方式给Person类添加show方法*/
Person.prototype.show = function () {
    console.log("show method");
}


/** 测试 */
var p1 = new Person("孤傲苍狼", 24, 115, 160);
var p2 = new Person("白虎神皇", 25, 120, 170);
var p3 = new Person();
p3.init("齐白石", 26, 130, 180); // 调用public方法init初始化p3对象
console.log((p1 instanceof Person)); // p1是Person类的实例，结果是true
console.log((p2 instanceof Person)); // p2是Person类的实例，结果是true
console.log((p3 instanceof Person)); // p3是Person类的实例，结果是true
// 当==两边的内容是对象或者是对象的函数属性时，则比较内存地址是否相等
console.log((p1.show == p2.show)); // true
console.log((p1.show == p2.show)); // true
console.log(p1.height); // 访问公有属性，这是可以正常访问的
console.log(p2.height); // 访问公有属性，这是可以正常访问的
p3.name = "王阳明"; // 为公共属性重新赋值
console.log(p3.name); // 访问公有属性，这是可以正常访问的
p1.show(); // 调用类的公共函数，这次允许的