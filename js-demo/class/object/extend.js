// 利用Object的hasOwnProperty方法, 模拟 $.extend() 的实现
function extend(target, source) { //target 旧的 source新的
    　　
    for (var i in source) {
        if (target.hasOwnProperty(i)) {
            target[i] = source[i];
        }
    }
    return target;
}
var a1 = {
    "first": 1,
    "second": "lyl",
    "third": "bob"
};
var b1 = {
    "third": "leo"
};
extend(a1, b1);
for (var i in a1) {
    alert(a1[i]); //原本是bob,现在变成leo了
}