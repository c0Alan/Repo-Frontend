// JavaScript自定义类(原型对象)的方式


// 1. 工厂方法——使用 new Object 创建对象并添加相关属性
// 通过Object直接创建对象
// var p1 = new Object(); //创建一个Object对象
var p1 = {}; // 创建一个Object对象，简写
// 动态增加属性、方法
p1.Name = "梅长苏";
p1.Age = 24;
p1.SayHello = function () {
    console.log("hello: " + p1.Name);
};
p1.SayHello();
for (var propertyName in p1) { // 对象的成员都是对象的key
    console.log(propertyName);
}