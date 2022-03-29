/** 判断运行结果 */
// 1
// var name = "The Window"; // 用var定义得到的结果为undefined
name = "The Window";
var object = {
    name: "My Object",
    getNameFunc: function () {
        return function () {
            return this.name; // 既然this代表的是调用方法的对象
        };
    }
};
console.log(object.getNameFunc()()); // The Window


// 2
name = "The Window";
var object = {
    name: "My Object",
    getNameFunc: function () {
        var that = this; // this 指向 object, 因为 getNameFunc() 方法时通过 object 调用的
        return function () {
            return that.name;
        };
    }
};
console.log(object.getNameFunc()()); // My Object

// 3
name = "The Window";
var object = {
    name: "My Object",
    getNameFunc: function () {
        that = this; // this 指向 object, 因为 getNameFunc() 方法时通过 object 调用的
        return function () {
            return that.name;
        };
    }
};
console.log(object.getNameFunc()()); // My Object

// 4
name = "The Window";
var object = {
    name: "My Object",
    getNameFunc: function () {
        return function () {
            var that = this;
            return that.name;
        };
    }
};
console.log(object.getNameFunc()()); // The Window

