/**
 * 封装
 * 封装就是把抽象出来的属性和对属性的操作封装在一起，
 * 属性被保护在内部，程序的其它部分只有通过被授权的操作(函数)，才能对属性进行操作！
 */

/** 定义一个Person类 */
function Person(_name, _age, _salary) {
	this.Name = _name; // 定义 类的公开属性
	var Age = _age; // 定义 Person类的私有属性
	var Salary = _salary;

	// 定义Person类的公开方法
	this.Show = function () {
		console.log("Age=" + Age + "\t" + "Salary=" + Salary); //在公开方法里面访问类的私有属性是允许的
	}
	
	// 定义Person类的私有方法
	function privateFn() {
		console.log("我是Person类的私有函数privateFn");
	}

	var privateFn2 = function () {
		console.log("我是Person类的私有函数privateFn2");
	}
}

/**
 * 通过prototype给可以类的所有对象添加公共(public)方法，
 * 但是这种方式定义的方法不能去访问类的私有属性和私有方法
 */
Person.prototype.Fn = function () {
	console.log("访问公共属性this.Name=" + this.Name); //访问公共属性，OK的
	//console.log("访问私有属性Aag="+Age); //访问私有属性，这里会报错“Age未定义”
	//privateFn(); //调用私有方法，这里会报错“缺少对象”
}

var p1 = new Person("郭靖", 18, 2300);
console.log("p1.Name=" + p1.Name); //访问公有属性，这是可以正常访问的
console.log("p1.Age=" + p1.Age + "\t" + "p1.Salary=" + p1.Salary); //不能使用类的对象去直接访问类私有属性，这是访问不了的，结果都是undefined
p1.Show(); //调用类的公共函数，这次允许的
p1.Fn(); //调用类的公共函数，这次允许的
//console.log("p1.privateFn()："+p1.privateFn()+"&nbsp;p1.privateFn2()："+p1.privateFn2());//不能使用类的对象去调用类的私有方法，这里会报错”对象不支持此属性或者方法“