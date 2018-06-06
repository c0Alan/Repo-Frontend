// 4. 数据共享
// 有时候，我们需要所有实例对象，能够读写同一项内部数据。这个时候，只要把这个内部数据，封装在类对象的里面、createNew()方法的外面即可。
var Cat = {　　　　
    sound: "喵喵喵",
    　　　　createNew: function () {　　　　　　
        var cat = {};　　　　　　
        cat.makeSound = function () {
            alert(Cat.sound);
        };　　　　　　
        cat.changeSound = function (x) {
            Cat.sound = x;
        };　　　　　　
        return cat;　　　　
    }
};
// 　然后，生成两个实例对象：
var cat1 = Cat.createNew();
var cat2 = Cat.createNew();
cat1.makeSound(); // 喵喵喵
// 这时，如果有一个实例对象，修改了共享的数据，另一个实例对象也会受到影响。
cat2.changeSound("啦啦啦");
cat1.makeSound(); // 啦啦啦

/** 
 * 极简主义，看起来很美好，但是也有缺点，首先是不能使用instanceof 判断对象所属的类，
 * "cat1 instanceof Cat"无法通过，另外，极简主义虽然摆脱了使用原型链的缺点（属性不能私有、创建、继承对象不够直观），
 * 但也暴露了没用原型链的弊端：每一次生成一个实例，都必须为重复的内容，多占用一些内存。
 * 
 */