// 继承

/** 定义 Student 类 */
function Student(name, age) {
    this.Name = name;
    this.Age = age;
    this.Show = function () {
        console.log("我的名字是：" + this.Name + "，今年：" + this.Age);
    }
    this.SayHello = function () {
        console.log("Hello: " + this.Name);
    }
}

/** 定义MidStu类 */
function MidStu(name, age) {
    this.stu = Student; // MidStu 类继承 Student 类
    this.stu(name, age); // JS中实际上是通过对象冒充来实现继承的，这句话不能少，因为JS是动态语言，如果不执行，则不能实现继承效果
 
    // 在子类 MidStu 中重写父类 Student 的Show方法
    /*this.Show=function(){
    	console.log("MidStu.Show()");
    }*/

    // 在子类 MidStu 中重写父类 Student 的SayHello方法
    this.SayHello = function () {
        console.log("你好，" + this.Name);
    }

}

var midStu = new MidStu("令狐冲", 20); // 创建一个 MidStu 类实例对象
console.log("midStu.Name=" + midStu.Name + "，midStu.Name=" + midStu.Age); // 访问继承下来的属性
midStu.Show(); // 此处调用父类方法
midStu.SayHello(); // 此处调用子类方法, 因为父类方法被覆盖了