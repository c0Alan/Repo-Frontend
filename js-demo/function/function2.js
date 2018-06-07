// 函数名本身就是变量，所以函数也可以当作普通变量来使用
function fn() {
    console.log("this is fn");
}

/*创建Person类*/
function Person(name, age, fn) {
    this.Name = name;
    this.Age = age;
    this.Fn = fn; // 使用传递进来的fn函数为函数属性Fn初始化
}
var p1 = new Person("aaa", 24, fn);
var retVal = p1.Fn();