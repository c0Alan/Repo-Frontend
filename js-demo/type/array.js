var size = 2
var arr1 = new Array(); // 创建一个数组
var arr2 = new Array(size); // 创建一个数组并指定长度，注意不是上限，是长度
var arr3 = new Array("aa", "bb", "cc"); // 创建一个数组，并初始化数组的内容

console.log(arr1.length); // 0
console.log(arr2.length); // 2
console.log(arr3.length); // 3

arr2[10] = 'kk'; // 通过下标修改了数组的长度
console.log(arr2.length); // 101

for (var i in arr2) { // 10:kk, 只打印存在的元素, 不存在的元素不会打印
    console.log(i + ":" + arr2[i]);
}

for (var i = 0; i < arr2.length; i++) { // 根据下标打印, 不存在的元素会打印 undefined
    console.log(i + ":" + arr2[i]);
}

/**
 * arrayObject.splice(index,howmany,item1,.....,itemX)
 * index	必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
 * howmany	必需。要删除的项目数量。如果设置为 0，则不会删除项目。
 * item1, ..., itemX	可选。向数组添加的新项目。
 */
var array1 = [1, 2, 3, 4, 5, 6];
// array1.shift(); // 2,3,4,5,6 //删除第一项
// array1.unshift(7); // 7,1,2,3,4,5,6  //添加第一项
// array1.pop(); // 1,2,3,4,5 //删除最后一项
// array1.push(7); // 1,2,3,4,5,6,7 //添加最后一项
// array1.concat(array1); // 1,2,3,4,5,6,1,2,3,4,5,6 // 数组拼接
// array1.length = 3; // 1,2,3 // 剪切
// array1.splice(1, 3); // 1,5,6, 从下标1 开始删除 3 个元素
// array1.splice(1, 0, 8, 9); // 1,8,9,2,3,4,5,6 // 下标1开始, 不删除元素, 插入 8, 9
// array1.splice(1, 2, 8, 9); // 1,8,9,4,5,6 // 下标1开始, 删除2个元素, 插入 8, 9
array1.toString(); // 1,2,3,4,5,6
console.log(array1.join());