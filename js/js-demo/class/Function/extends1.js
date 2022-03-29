// 1. 扩展内置类, 添加动态方法

/** 扩展为String类，为String类增加quote（两边加字符）方法 */
String.prototype.quote = function (quotestr) {
    if (!quotestr) {
        quotestr = "\"";
    }
    return quotestr + this + quotestr;
};

console.log("abc".quote()); // "abc"
console.log("abc".quote('|')); // |abc|

/** 给 Number 对象添加 add 方法 */
Number.prototype.add = function (n) {
    // 哪个对象调用this所在的函数，那么this代表的就是哪个对象实例
    return this + n;
}
var i = new Number(10); // 等价于var i=10;
console.log(i.add(10).add(30)); // 50
var b = 40;
console.log(b.add(90)); // 130

/** Array 类新添加的 findVal 方法, 找到第一个匹配的字符串索引 */
Array.prototype.findVal = function (val) {
    var index = -1;
    //哪个对象调用this所在的函数，那么this代表的就是哪个对象实例
    for (var i = 0; i < this.length; i++) {
        if (val == this[i]) {
            index = i;
            break;
        }
    }
    return index;
}

var arr = new Array();
arr[0] = "aaa";
arr[1] = "bbb";
arr[2] = "ccc";
console.log(arr.findVal("aaa"));