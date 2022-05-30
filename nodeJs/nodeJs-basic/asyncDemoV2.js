'use strict';

function asyncFunction(callback) {
  setTimeout(callback, 200);
}

let color = 'blue';

/**
 * 用JavaScript 闭包可以“冻结”color 的值, color作为参数传入匿名函数内部的本地变量, 与外部变量相互独立
 * 还是异步最后执行
 */
(color => {
  asyncFunction(() => {
    console.log('The color is', color);
  });
})(color);

color = 'green';

console.log("origin color:" + color);
