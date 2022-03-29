// 极简主义法编写JavaScript类
// 1. 封装
// 首先，它也是用一个对象模拟"类"。在这个类里面，定义一个构造函数createNew()，用来生成实例。

var Cat = {　　　　
    createNew: function () {　　　　　　 // some code here
        　　　　}
};　
// 然后， 在createNew() 里面， 定义一个实例对象， 把这个实例对象作为返回值。
var Cat = {　　　　
    createNew: function () {　　　　　　
        var cat = {};　　　　　　
        cat.name = "大毛";　　　　　　
        cat.makeSound = function () {
            alert("喵喵喵");
        };　　　　　　
        return cat;　　　　
    }
};　
// 使用的时候， 调用createNew() 方法， 就可以得到实例对象。
var cat1 = Cat.createNew();
cat1.makeSound(); // 喵喵喵
　
// 这种方法的好处是， 容易理解， 结构清晰优雅， 符合传统的 "面向对象编程"的构造， 因此可以方便地部署下面的特性。