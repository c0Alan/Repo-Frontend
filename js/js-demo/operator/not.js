/** NOT 运算符返回的一定是 Boolean 值 */

var bFalse = false; //运算数是bool类型的数
var sRed = "red"; //运算数是字符串
var iZero = 0; //运算数是0
var iThreeFourFive = 345; //运算数是 0 以外的任何数字
var oObject = new Object(); //对象
var oNull = null; //运算数是null
var oUndefined; //运算数是undifined
var oNaN = parseInt("abc"); //使用parseInt方法把尝试字符串abc转换成整数，因为abc不是数字，因此是转不了的，所以返回的结果就是NaN

console.log(oNaN); // NaN
console.log((!bFalse)); // true
console.log((!sRed)); // false
console.log((!iZero)); //如果运算数是数字 0，true
console.log((!iThreeFourFive)); //如果运算数是 0 以外的任何数字，返回 false 
console.log((!oObject)); //如果运算数是对象，返回 false 
console.log((!oNaN)); //如果运算数是NaN，返回 true 
console.log((!oNull)); //如果运算数是 null，返回 true 
console.log((!oUndefined)); // true
//console.log((!sBule));//sBule前面没有定义，也就是sBule运算数是 undefined，因此这里发生错误