'use strict';
function asyncFunction(callback) {
  setTimeout(callback, 1);
  // callback();
}
let color = 'blue';

/**
 * 异步执行, 延迟之后最后执行, 打印的 color 为 green
 */
asyncFunction(() => {
  console.log('The color is', color);
});
color = 'green';
