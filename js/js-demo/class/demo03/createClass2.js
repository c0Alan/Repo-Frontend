// 2. 继承
// 　　让一个类继承另一个类，实现起来很方便。只要在前者的createNew()方法中，调用后者的createNew()方法即可。
// 　　先定义一个Animal类：

var Animal = {　　　　
    createNew: function () {　　　　　　
        var animal = {};　　　　　　
        animal.sleep = function () {
            alert("睡懒觉");
        };　　　　　　
        return animal;　　　　
    }
};　
// 然后， 在Cat的createNew() 方法中， 调用Animal的createNew() 方法
var Cat = {　　　　
    createNew: function () {　　　　　　
        var cat = Animal.createNew();　　　　　　
        cat.name = "大毛";　　　　　　
        cat.makeSound = function () {
            alert("喵喵喵");
        };　　　　　　
        return cat;　　　　
    }
};　
// 这样得到的Cat实例， 就会继承Animal类。
var cat1 = Cat.createNew();
cat1.sleep(); // 睡懒觉