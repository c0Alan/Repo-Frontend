/**
 * typeof : 以字符串的形式打印数据类型
 */

// 1.数值型（number）
console.log("数值型: ");
var numType;
console.log(parseInt(numType)); // NaN
console.log(typeof parseInt(numType)); // number
/**
 * isFinite() 函数用于检查其参数是否是无穷大，如果 number 是有限数字（或可转换为有限数字），
 * 那么返回 true。否则，如果 number 是 NaN（非数字），或者是正、负无穷大的数，则返回 false。
 */
console.log(isFinite(parseInt(numType)) + "\n"); // false

// 2.布尔型（boolean）
console.log("布尔型: ");
var boolType1;
var boolType2 = false;
console.log(typeof boolType1); // undefined
console.log(typeof boolType2 + "\n"); // boolean

// 3. 字符串(String)
console.log("字符串: ");
var str1;
var str2 = "strType";
console.log(typeof str1); // undefined
console.log(typeof str2 + "\n"); // string

// 4.未定义（Undefined）
console.log("未定义: ");
var undef; // undefined
console.log(typeof undef + "\n"); // undefined

// 5.对象（Object）
console.log("对象: ");
var obj1;
var obj2 = null;
var obj3 = "str";
var obj4 = {};
var obj5 = new Object();

console.log(typeof obj1); // undefined
console.log(typeof obj2); // object
console.log(typeof obj3); // string
console.log(typeof obj4); // object
console.log(typeof obj5 + "\n"); // object

// 6.空值（Null）
console.log("空值: ");
var null1;
var null2 = null;
var null3 = "str";
console.log(null1 === null); //false
console.log(null2 === null); //true
console.log(null3 === null); //false
console.log("\n");

// 7.数组（Array）
console.log("数组: ");
function isArray1(arr) {
    return Object.prototype.toString.apply(arr) === '[object Array]';
}
function isArray2(arr) {
    if(arr === null || typeof arr === 'undefined'){
        return false;
    }
    return arr.constructor === Array;
}
var arr1 = null;
var arr2 = "";
var arr3 ;
var arr4 = [1,2,3];
var arr5 = new Array();
console.log(isArray1(arr1)); // false
console.log(isArray1(arr2)); // false
console.log(isArray1(arr3)); // false
console.log(isArray1(arr4)); // true
console.log(isArray1(arr5)); // true

console.log(isArray2(arr1)); // false
console.log(isArray2(arr2)); // false
console.log(isArray2(arr3)); // false
console.log(isArray2(arr4)); // true
console.log(isArray2(arr5)); // true
console.log("\n");