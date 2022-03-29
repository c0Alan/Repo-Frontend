var p1 = new Object(); // 通过Object直接创建对象
// 为p1对象动态添加属性
p1.Age = 20;
p1.Name = "李时珍";
// 扩展Object类，为Object类添加一个Show方法
Object.prototype.Show = function () {
    console.log(this.Age + "\t" + this.Name);
}
console.log(p1.Age);
p1.Show();
console.log("p1.constructor：" + p1.constructor); // 得到对象的构造函数
console.log("Object.prototype：" + Object.prototype); // 得到prototype对象，prototype是静态属性，只能通过"类名.prototype"去访问
console.log("p1.isPrototypeOf(p1)：" + p1.isPrototypeOf(p1)); // false
console.log("p1.hasOwnProperty(\"Age\")：" + p1.hasOwnProperty("Age")); // true
console.log("p1.propertyIsEnumerable(\"Age\")：" + p1.propertyIsEnumerable("Age")); // true
console.log("p1.toString()：" + p1.toString()); // [object Object]
console.log("p1.valueOf()：" + p1.valueOf()); // [object Object]