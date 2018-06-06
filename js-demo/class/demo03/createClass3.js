// 3. 私有属性和私有方法
// 　在createNew()方法中，只要不是定义在cat对象上的方法和属性，都是私有的。
var Cat = {　　　　
    createNew: function () {　　　　　　
        var cat = {};　　　　　　
        var sound = "喵喵喵"; //私有属性
        　　　　　　
        cat.makeSound = function () {
            alert(sound);
        };　　　　　　
        return cat;　　　　
    }
};
// 　上例的内部变量sound，外部无法读取，只有通过cat的公有方法makeSound()来读取。
var cat1 = Cat.createNew();
alert(cat1.sound); // undefined