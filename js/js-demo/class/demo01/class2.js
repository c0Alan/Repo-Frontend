// 2.使用构造函数来定义类(原型对象)
/**
    function 类名(){
        this.属性名; // 公共属性
        var 属性名; // 私有属性
        // 凡是定义类的公共属性和公共方法都要使用this
        // 定义类的公共函数
        this.函数名 = function() {
                
        }
        // 定义类的私有函数
        function 函数名(){

        }
    }
 */

/** 定义一个猫类，这种就是使用构造函数来定义类(原型对象) */
function Cat(catOwner) {
    this.Name = "catName"; // public属性
    this.Age; // public属性
    this.Color; // public属性
    var weight = 2; // private属性，只能在Cat类内部使用，Cat类的对象无法访问这个私有属性
    var owner = catOwner;

    // public方法
    this.publicFunction = function () {
        console.log(weight);
        console.log(owner);
        console.log("猫叫...");
    }

    // private方法，只能在Cat类内部使用，Cat类的对象无法访问这个私有方法
    var privateFunction = function () {
        console.log("私有方法");
    }


}

// 如果这样用，那么就当成函数来使用
Cat();

// 如果这样用，那么就当成类来使用
var cat1 = new Cat("God");

// cat1就是一个对象(实例)
console.log(cat1.Name); // 访问公共属性，弹出默认值catName
cat1.Name = "TomCat"; // 访问公共属性
cat1.Age = 3; // 访问公共属性
cat1.Color = "白色"; // 访问公共属性
console.log(cat1.weight); // 访问私有属性，无法访问，弹出 undefined
console.log(cat1.Name + "\t" + cat1.Age + "\t" + cat1.Color); // 访问对象的属性方式1：对象名.属性名
console.log(cat1["Name"] + "\t" + cat1["Age"] + "\t" + cat1["Color"]); // 访问对象的属性方式2：对象名["属性名"]
cat1.publicFunction(); // 调用public方法
// cat1.privateFunction(); // 调用private方法，报错：对象不支持此属性或方法
console.log("");
for (var property in cat1) { // 只打印公有属性
    console.log(property + "\t");
}