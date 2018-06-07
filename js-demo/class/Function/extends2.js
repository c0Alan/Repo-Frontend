// 1. 扩展内置类, 添加静态方法

/** 扩展String类，添加Format静态方法，模仿C#中的String.Format方法 
 * 把str中的占位符{0}，{1}，{2}，{3}用具体的内容替换掉
 */
if (!String.Format) {
    String.Format = function () {
        if (arguments.length == 0) {
            return null;
        }
        var str = arguments[0];
        if (arguments[1] instanceof Array) {
            var arr = arguments[1];
            for (var i = 0; i < arr.length; i++) {
                var re = new RegExp('\{' + i + '\}', 'gm');
                str = str.replace(re, arr[i]);
            }
        } else {
            for (var i = 1; i < arguments.length; i++) {
                var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
                str = str.replace(re, arguments[i]);
            }
        }
        return str;
    }
}

var str = "我是{0}, 我在总结{1}和{2}的学习, 我很喜欢{3}这2门语言!";
str = String.Format(str, "aaa", "java", "JavaScript", "'java'和'JavaScript'");
console.log(str); // 我是aaa, 我在总结java和JavaScript的学习，我很喜欢'java'和'JavaScript'这2门语言!