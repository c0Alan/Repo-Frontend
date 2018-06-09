# 变量

## 定义变量

　　在定义变量时，统一使用"**var 变量名**"表示，例如：var str;甚至可以省略var这个关键字

## JavaScript变量的类型如何决定

JavaScript中变量的数据类型是由JS引擎决定的

```js
var name = "aaa"; //name是string类型
var age = 2; //age是number类型
var flag = true; //flag是boolean类型
var email; //email只是声明，没有赋值，因此代表的类型是"undefined"，也就是无法确定
name = 10; //name自动变成了number类型
```

## typeof 查看数据类型

typeof 运算符有一个参数，即要检查的变量或值。例如：

```js
var sTemp = "test string";
alert (typeof sTemp);    //输出 "string"
alert (typeof 86);    //输出 "number"
```

对变量或值调用typeof运算符将返回下列值之一：

- **undefined - 如果变量是 Undefined 类型的**
- **boolean - 如果变量是 Boolean 类型的**
- **number - 如果变量是 Number 类型的**
- **string - 如果变量是 String 类型的**
- **object - 如果变量是一种引用类型或 Null 类型的**

# 操作符

## == & ===

```
当==两边的内容是字符串时，则比较字符串的内容是否相等。
当==两边的内容是数字时，则比较数字的大小是否相等。
当==两边的内容是对象或者是对象的函数属性时，则比较内存地址是否相等。
==用于一般比较，===用于严格比较，==在比较的时候可以转换数据类型，===严格比较，只要类型不匹配就返回flase。
```

## (NOT) !

在JavaScript 中，逻辑NOT运算符与C和Java中的逻辑 NOT 运算符相同，都由感叹号（!）表示。

与逻辑 OR 和逻辑 AND 运算符不同的是，逻辑 NOT 运算符返回的一定是 Boolean 值。

逻辑 NOT 运算符的行为如下：

```
如果运算数是对象，返回 false
如果运算数是数字 0，返回 true
如果运算数是 0 以外的任何数字，返回 false
如果运算数是 null，返回 true
如果运算数是 NaN，返回 true
如果运算数是 undefined，发生错误
```

​	判断JavaScript变量的Boolean 值时，也可以使用逻辑NOT运算符。这样做需要在一行代码中使用两个 NOT 运算符。无论运算数是什么类型，第一个NOT运算符返回 Boolean值，第二个NOT将对该Boolean值取反，从而给出变量真正的Boolean值。使用not运算符判断JavaScript变量的Boolean值是一个非常有用的技巧，只要知道了变量的boolean值，那么当使用变量进行&&或者||运算时，就可以很快知道运算的结果了。

## (AND) &&

逻辑AND运算的运算数可以是任何类型的，不止是Boolean值，如果某个运算数不是原始的Boolean型值，逻辑AND运算并不一定返回Boolean值
逻辑AND运算符的运算行为如下：

```
如果一个运算数是对象，另一个是 Boolean 值，返回该对象。
如果两个运算数都是对象，返回第二个对象。
如果某个运算数是 null，返回 null。
如果某个运算数是 NaN，返回 NaN。
如果某个运算数是 undefined，发生错误。
如果两个运算数都是boolean类型，则返回boolean值
```

## (OR) ||

在JavaScript中，0，"",false,null,undefined,NaN均表示false

JavaScript的逻辑 OR 运算也是简便运算，对于逻辑 OR 运算符来说，如果第一个运算数值为 true，就不再计算第二个运算数，如果某个运算数不是 Boolean 值，逻辑 OR 运算并不一定返回 Boolean 值.

逻辑||的运算规则如下：

```
如果一个运算数是对象，另一个是 Boolean 值，返回该对象。
如果两个运算数都是对象，返回第一个对象。
如果某个运算数是 null，返回 null。
如果某个运算数是 NaN，返回 NaN。
如果某个运算数是 undefined，发生错误。
```

​	对于这些运算规则，没有必要死记硬背，因为在JavaScript中，可以使用逻辑Not运算符来判断JavaScript变量的Boolean值，判断的方式就是"!!变量名".

# 流程语句

# 数据类型

​	基本数据类型是由固定数目的字节组成，这些字节可以在解析器的较底层进行操作，比如Number和 Boolean；而引用数据类型，可以包含任意数目的属性和元素，因此它们无法像基本数据类型那样很容易的操作。由于，引用数据类型的值是会发生变化的， 所以通过跟基本数据类型一样的值传递方式，也就没什么意义了，因为会牵涉到大量的内存的复制和比较，效率太低。所以引用数据类型是通过引用传递方式，实际传递的只是对象的一个地址。比如Array和Function，因为它们都是特殊的对象所以它们都是引用类型。另外，引用类型是可以添加属性，基本类型虽然也可以添加属性，也不会报错，经测试添加完之后却是无法访问的。

## JS中的数据类型

前五种为基本数据类型: 

1. 数值型（Number）：包括整数、浮点数。
2. 布尔型（Boolean）
3. 字符串型（String）
4. 空值(Null)
5. 未定义（Undefined）
6. 对象（Object）
7. 数组（Array）

## Boolean 

创建 Boolean 对象的语法：

```
new Boolean(value);	//构造函数
Boolean(value);		//转换函数
```

Boolean 对象属性

| 属性                                                         | 描述                                  |
| ------------------------------------------------------------ | ------------------------------------- |
| [constructor](http://www.w3school.com.cn/jsref/jsref_constructor_boolean.asp) | 返回对创建此对象的 Boolean 函数的引用 |
| [prototype](http://www.w3school.com.cn/jsref/jsref_prototype_boolean.asp) | 使您有能力向对象添加属性和方法。      |

Boolean 对象方法

| 方法                                                         | 描述                               |
| ------------------------------------------------------------ | ---------------------------------- |
| [toSource()](http://www.w3school.com.cn/jsref/jsref_tosource_boolean.asp) | 返回该对象的源代码。               |
| [toString()](http://www.w3school.com.cn/jsref/jsref_toString_boolean.asp) | 把逻辑值转换为字符串，并返回结果。 |
| [valueOf()](http://www.w3school.com.cn/jsref/jsref_valueOf_boolean.asp) | 返回 Boolean 对象的原始值。        |



## Number 

创建 Number 对象的语法：

```
var myNum=new Number(value);
var myNum=Number(value);
```

Number 对象属性

| 属性                                                         | 描述                                   |
| ------------------------------------------------------------ | -------------------------------------- |
| [constructor](http://www.w3school.com.cn/jsref/jsref_constructor_number.asp) | 返回对创建此对象的 Number 函数的引用。 |
| [MAX_VALUE](http://www.w3school.com.cn/jsref/jsref_max_value.asp) | 可表示的最大的数。                     |
| [MIN_VALUE](http://www.w3school.com.cn/jsref/jsref_min_value.asp) | 可表示的最小的数。                     |
| [NaN](http://www.w3school.com.cn/jsref/jsref_nan_number.asp) | 非数字值。                             |
| [NEGATIVE_INFINITY](http://www.w3school.com.cn/jsref/jsref_negative_infinity.asp) | 负无穷大，溢出时返回该值。             |
| [POSITIVE_INFINITY](http://www.w3school.com.cn/jsref/jsref_positive_infinity.asp) | 正无穷大，溢出时返回该值。             |
| prototype                                                    | 使您有能力向对象添加属性和方法。       |

Number 对象方法

| 方法                                                         | 描述                                                 |
| ------------------------------------------------------------ | ---------------------------------------------------- |
| [toString](http://www.w3school.com.cn/jsref/jsref_tostring_number.asp) | 把数字转换为字符串，使用指定的基数。                 |
| [toLocaleString](http://www.w3school.com.cn/jsref/jsref_tolocalestring_number.asp) | 把数字转换为字符串，使用本地数字格式顺序。           |
| [toFixed](http://www.w3school.com.cn/jsref/jsref_tofixed.asp) | 把数字转换为字符串，结果的小数点后有指定位数的数字。 |
| [toExponential](http://www.w3school.com.cn/jsref/jsref_toexponential.asp) | 把对象的值转换为指数计数法。                         |
| [toPrecision](http://www.w3school.com.cn/jsref/jsref_toprecision.asp) | 把数字格式化为指定的长度。                           |
| [valueOf](http://www.w3school.com.cn/jsref/jsref_valueof_number.asp) | 返回一个 Number 对象的基本数字值。                   |

## String

创建 String 对象的语法：

```
new String(s);
String(s); 
```

String 对象属性:

| 属性                                                         | 描述                       |
| ------------------------------------------------------------ | -------------------------- |
| constructor                                                  | 对创建该对象的函数的引用   |
| [length](http://www.w3school.com.cn/jsref/jsref_length_string.asp) | 字符串的长度               |
| prototype                                                    | 允许您向对象添加属性和方法 |

String 对象方法:

| 方法                                                         | 描述                                                 |
| ------------------------------------------------------------ | ---------------------------------------------------- |
| [anchor()](http://www.w3school.com.cn/jsref/jsref_anchor.asp) | 创建 HTML 锚。                                       |
| [big()](http://www.w3school.com.cn/jsref/jsref_big.asp)      | 用大号字体显示字符串。                               |
| [blink()](http://www.w3school.com.cn/jsref/jsref_blink.asp)  | 显示闪动字符串。                                     |
| [bold()](http://www.w3school.com.cn/jsref/jsref_bold.asp)    | 使用粗体显示字符串。                                 |
| [charAt()](http://www.w3school.com.cn/jsref/jsref_charAt.asp) | 返回在指定位置的字符。                               |
| [charCodeAt()](http://www.w3school.com.cn/jsref/jsref_charCodeAt.asp) | 返回在指定的位置的字符的 Unicode 编码。              |
| [concat()](http://www.w3school.com.cn/jsref/jsref_concat_string.asp) | 连接字符串。                                         |
| [fixed()](http://www.w3school.com.cn/jsref/jsref_fixed.asp)  | 以打字机文本显示字符串。                             |
| [fontcolor()](http://www.w3school.com.cn/jsref/jsref_fontcolor.asp) | 使用指定的颜色来显示字符串。                         |
| [fontsize()](http://www.w3school.com.cn/jsref/jsref_fontsize.asp) | 使用指定的尺寸来显示字符串。                         |
| [fromCharCode()](http://www.w3school.com.cn/jsref/jsref_fromCharCode.asp) | 从字符编码创建一个字符串。                           |
| [indexOf()](http://www.w3school.com.cn/jsref/jsref_indexOf.asp) | 检索字符串。                                         |
| [italics()](http://www.w3school.com.cn/jsref/jsref_italics.asp) | 使用斜体显示字符串。                                 |
| [lastIndexOf()](http://www.w3school.com.cn/jsref/jsref_lastIndexOf.asp) | 从后向前搜索字符串。                                 |
| [link()](http://www.w3school.com.cn/jsref/jsref_link.asp)    | 将字符串显示为链接。                                 |
| [localeCompare()](http://www.w3school.com.cn/jsref/jsref_localeCompare.asp) | 用本地特定的顺序来比较两个字符串。                   |
| [match()](http://www.w3school.com.cn/jsref/jsref_match.asp)  | 找到一个或多个正则表达式的匹配。                     |
| [replace()](http://www.w3school.com.cn/jsref/jsref_replace.asp) | 替换与正则表达式匹配的子串。                         |
| [search()](http://www.w3school.com.cn/jsref/jsref_search.asp) | 检索与正则表达式相匹配的值。                         |
| [slice()](http://www.w3school.com.cn/jsref/jsref_slice_string.asp) | 提取字符串的片断，并在新的字符串中返回被提取的部分。 |
| [small()](http://www.w3school.com.cn/jsref/jsref_small.asp)  | 使用小字号来显示字符串。                             |
| [split()](http://www.w3school.com.cn/jsref/jsref_split.asp)  | 把字符串分割为字符串数组。                           |
| [strike()](http://www.w3school.com.cn/jsref/jsref_strike.asp) | 使用删除线来显示字符串。                             |
| [sub()](http://www.w3school.com.cn/jsref/jsref_sub.asp)      | 把字符串显示为下标。                                 |
| [substr()](http://www.w3school.com.cn/jsref/jsref_substr.asp) | 从起始索引号提取字符串中指定数目的字符。             |
| [substring()](http://www.w3school.com.cn/jsref/jsref_substring.asp) | 提取字符串中两个指定的索引号之间的字符。             |
| [sup()](http://www.w3school.com.cn/jsref/jsref_sup.asp)      | 把字符串显示为上标。                                 |
| [toLocaleLowerCase()](http://www.w3school.com.cn/jsref/jsref_toLocaleLowerCase.asp) | 把字符串转换为小写。                                 |
| [toLocaleUpperCase()](http://www.w3school.com.cn/jsref/jsref_toLocaleUpperCase.asp) | 把字符串转换为大写。                                 |
| [toLowerCase()](http://www.w3school.com.cn/jsref/jsref_toLowerCase.asp) | 把字符串转换为小写。                                 |
| [toUpperCase()](http://www.w3school.com.cn/jsref/jsref_toUpperCase.asp) | 把字符串转换为大写。                                 |
| toSource()                                                   | 代表对象的源代码。                                   |
| [toString()](http://www.w3school.com.cn/jsref/jsref_toString_string.asp) | 返回字符串。                                         |
| [valueOf()](http://www.w3school.com.cn/jsref/jsref_valueOf_string.asp) | 返回某个字符串对象的原始值。                         |



## Object

```js
var obj1 = new Object();
var obj2 = obj1;
obj2.name = "李白";
console.log(obj1.name); // 李白
```

引用数据类型赋值过程图

![引用数据类型赋值过程](image\引用数据类型赋值过程.png)

## Array

Array 对象属性

| 属性                                                         | 描述                               |
| ------------------------------------------------------------ | ---------------------------------- |
| [constructor](http://www.w3school.com.cn/jsref/jsref_constructor_array.asp) | 返回对创建此对象的数组函数的引用。 |
| [length](http://www.w3school.com.cn/jsref/jsref_length_array.asp) | 设置或返回数组中元素的数目。       |
| [prototype](http://www.w3school.com.cn/jsref/jsref_prototype_array.asp) | 使您有能力向对象添加属性和方法。   |

Array 对象方法

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [concat()](http://www.w3school.com.cn/jsref/jsref_concat_array.asp) | 连接两个或更多的数组，并返回结果。                           |
| [join()](http://www.w3school.com.cn/jsref/jsref_join.asp)    | 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。 |
| [pop()](http://www.w3school.com.cn/jsref/jsref_pop.asp)      | 删除并返回数组的最后一个元素                                 |
| [push()](http://www.w3school.com.cn/jsref/jsref_push.asp)    | 向数组的末尾添加一个或更多元素，并返回新的长度。             |
| [reverse()](http://www.w3school.com.cn/jsref/jsref_reverse.asp) | 颠倒数组中元素的顺序。                                       |
| [shift()](http://www.w3school.com.cn/jsref/jsref_shift.asp)  | 删除并返回数组的第一个元素                                   |
| [slice()](http://www.w3school.com.cn/jsref/jsref_slice_array.asp) | 从某个已有的数组返回选定的元素                               |
| [sort()](http://www.w3school.com.cn/jsref/jsref_sort.asp)    | 对数组的元素进行排序                                         |
| [splice()](http://www.w3school.com.cn/jsref/jsref_splice.asp) | 删除元素，并向数组添加新元素。                               |
| [toSource()](http://www.w3school.com.cn/jsref/jsref_tosource_array.asp) | 返回该对象的源代码。                                         |
| [toString()](http://www.w3school.com.cn/jsref/jsref_toString_array.asp) | 把数组转换为字符串，并返回结果。                             |
| [toLocaleString()](http://www.w3school.com.cn/jsref/jsref_toLocaleString_array.asp) | 把数组转换为本地数组，并返回结果。                           |
| [unshift()](http://www.w3school.com.cn/jsref/jsref_unshift.asp) | 向数组的开头添加一个或更多元素，并返回新的长度。             |
| [valueOf()](http://www.w3school.com.cn/jsref/jsref_valueof_array.asp) | 返回数组对象的原始值                                         |

## Function

全局属性和函数可用于所有内建的 JavaScript 对象。

顶层函数（全局函数）

| 函数                                                         | 描述                                               |
| ------------------------------------------------------------ | -------------------------------------------------- |
| [decodeURI()](http://www.w3school.com.cn/jsref/jsref_decodeURI.asp) | 解码某个编码的 URI。                               |
| [decodeURIComponent()](http://www.w3school.com.cn/jsref/jsref_decodeURIComponent.asp) | 解码一个编码的 URI 组件。                          |
| [encodeURI()](http://www.w3school.com.cn/jsref/jsref_encodeuri.asp) | 把字符串编码为 URI。                               |
| [encodeURIComponent()](http://www.w3school.com.cn/jsref/jsref_encodeURIComponent.asp) | 把字符串编码为 URI 组件。                          |
| [escape()](http://www.w3school.com.cn/jsref/jsref_escape.asp) | 对字符串进行编码。                                 |
| [eval()](http://www.w3school.com.cn/jsref/jsref_eval.asp)    | 计算 JavaScript 字符串，并把它作为脚本代码来执行。 |
| [getClass()](http://www.w3school.com.cn/jsref/jsref_getClass.asp) | 返回一个 JavaObject 的 JavaClass。                 |
| [isFinite()](http://www.w3school.com.cn/jsref/jsref_isFinite.asp) | 检查某个值是否为有穷大的数。                       |
| [isNaN()](http://www.w3school.com.cn/jsref/jsref_isNaN.asp)  | 检查某个值是否是数字。                             |
| [Number()](http://www.w3school.com.cn/jsref/jsref_number.asp) | 把对象的值转换为数字。                             |
| [parseFloat()](http://www.w3school.com.cn/jsref/jsref_parseFloat.asp) | 解析一个字符串并返回一个浮点数。                   |
| [parseInt()](http://www.w3school.com.cn/jsref/jsref_parseInt.asp) | 解析一个字符串并返回一个整数。                     |
| [String()](http://www.w3school.com.cn/jsref/jsref_string.asp) | 把对象的值转换为字符串。                           |
| [unescape()](http://www.w3school.com.cn/jsref/jsref_unescape.asp) | 对由 escape() 编码的字符串进行解码。               |

顶层属性（全局属性）

| 方法                                                         | 描述                                   |
| ------------------------------------------------------------ | -------------------------------------- |
| [Infinity](http://www.w3school.com.cn/jsref/jsref_infinity.asp) | 代表正的无穷大的数值。                 |
| [java](http://www.w3school.com.cn/jsref/jsref_java.asp)      | 代表 java.* 包层级的一个 JavaPackage。 |
| [NaN](http://www.w3school.com.cn/jsref/jsref_nan.asp)        | 指示某个值是不是数字值。               |
| [Packages](http://www.w3school.com.cn/jsref/jsref_Packages.asp) | 根 JavaPackage 对象。                  |
| [undefined](http://www.w3school.com.cn/jsref/jsref_undefined.asp) | 指示未定义的值。                       |

## Date  

创建 Date 对象的语法：

```
var myDate=new Date()
```

Date 对象属性

| 属性                                                         | 描述                                 |
| ------------------------------------------------------------ | ------------------------------------ |
| [constructor](http://www.w3school.com.cn/jsref/jsref_constructor_date.asp) | 返回对创建此对象的 Date 函数的引用。 |
| [prototype](http://www.w3school.com.cn/jsref/jsref_prototype_date.asp) | 使您有能力向对象添加属性和方法。     |

Date 对象方法

| 方法                                                         | 描述                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------ |
| [Date()](http://www.w3school.com.cn/jsref/jsref_Date.asp)    | 返回当日的日期和时间。                                 |
| [getDate()](http://www.w3school.com.cn/jsref/jsref_getDate.asp) | 从 Date 对象返回一个月中的某一天 (1 ~ 31)。            |
| [getDay()](http://www.w3school.com.cn/jsref/jsref_getDay.asp) | 从 Date 对象返回一周中的某一天 (0 ~ 6)。               |
| [getMonth()](http://www.w3school.com.cn/jsref/jsref_getMonth.asp) | 从 Date 对象返回月份 (0 ~ 11)。                        |
| [getFullYear()](http://www.w3school.com.cn/jsref/jsref_getFullYear.asp) | 从 Date 对象以四位数字返回年份。                       |
| [getYear()](http://www.w3school.com.cn/jsref/jsref_getYear.asp) | 请使用 getFullYear() 方法代替。                        |
| [getHours()](http://www.w3school.com.cn/jsref/jsref_getHours.asp) | 返回 Date 对象的小时 (0 ~ 23)。                        |
| [getMinutes()](http://www.w3school.com.cn/jsref/jsref_getMinutes.asp) | 返回 Date 对象的分钟 (0 ~ 59)。                        |
| [getSeconds()](http://www.w3school.com.cn/jsref/jsref_getSeconds.asp) | 返回 Date 对象的秒数 (0 ~ 59)。                        |
| [getMilliseconds()](http://www.w3school.com.cn/jsref/jsref_getMilliseconds.asp) | 返回 Date 对象的毫秒(0 ~ 999)。                        |
| [getTime()](http://www.w3school.com.cn/jsref/jsref_getTime.asp) | 返回 1970 年 1 月 1 日至今的毫秒数。                   |
| [getTimezoneOffset()](http://www.w3school.com.cn/jsref/jsref_getTimezoneOffset.asp) | 返回本地时间与格林威治标准时间 (GMT) 的分钟差。        |
| [getUTCDate()](http://www.w3school.com.cn/jsref/jsref_getUTCDate.asp) | 根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。        |
| [getUTCDay()](http://www.w3school.com.cn/jsref/jsref_getUTCDay.asp) | 根据世界时从 Date 对象返回周中的一天 (0 ~ 6)。         |
| [getUTCMonth()](http://www.w3school.com.cn/jsref/jsref_getUTCMonth.asp) | 根据世界时从 Date 对象返回月份 (0 ~ 11)。              |
| [getUTCFullYear()](http://www.w3school.com.cn/jsref/jsref_getUTCFullYear.asp) | 根据世界时从 Date 对象返回四位数的年份。               |
| [getUTCHours()](http://www.w3school.com.cn/jsref/jsref_getUTCHours.asp) | 根据世界时返回 Date 对象的小时 (0 ~ 23)。              |
| [getUTCMinutes()](http://www.w3school.com.cn/jsref/jsref_getUTCMinutes.asp) | 根据世界时返回 Date 对象的分钟 (0 ~ 59)。              |
| [getUTCSeconds()](http://www.w3school.com.cn/jsref/jsref_getUTCSeconds.asp) | 根据世界时返回 Date 对象的秒钟 (0 ~ 59)。              |
| [getUTCMilliseconds()](http://www.w3school.com.cn/jsref/jsref_getUTCMilliseconds.asp) | 根据世界时返回 Date 对象的毫秒(0 ~ 999)。              |
| [parse()](http://www.w3school.com.cn/jsref/jsref_parse.asp)  | 返回1970年1月1日午夜到指定日期（字符串）的毫秒数。     |
| [setDate()](http://www.w3school.com.cn/jsref/jsref_setDate.asp) | 设置 Date 对象中月的某一天 (1 ~ 31)。                  |
| [setMonth()](http://www.w3school.com.cn/jsref/jsref_setMonth.asp) | 设置 Date 对象中月份 (0 ~ 11)。                        |
| [setFullYear()](http://www.w3school.com.cn/jsref/jsref_setFullYear.asp) | 设置 Date 对象中的年份（四位数字）。                   |
| [setYear()](http://www.w3school.com.cn/jsref/jsref_setYear.asp) | 请使用 setFullYear() 方法代替。                        |
| [setHours()](http://www.w3school.com.cn/jsref/jsref_setHours.asp) | 设置 Date 对象中的小时 (0 ~ 23)。                      |
| [setMinutes()](http://www.w3school.com.cn/jsref/jsref_setMinutes.asp) | 设置 Date 对象中的分钟 (0 ~ 59)。                      |
| [setSeconds()](http://www.w3school.com.cn/jsref/jsref_setSeconds.asp) | 设置 Date 对象中的秒钟 (0 ~ 59)。                      |
| [setMilliseconds()](http://www.w3school.com.cn/jsref/jsref_setMilliseconds.asp) | 设置 Date 对象中的毫秒 (0 ~ 999)。                     |
| [setTime()](http://www.w3school.com.cn/jsref/jsref_setTime.asp) | 以毫秒设置 Date 对象。                                 |
| [setUTCDate()](http://www.w3school.com.cn/jsref/jsref_setUTCDate.asp) | 根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。        |
| [setUTCMonth()](http://www.w3school.com.cn/jsref/jsref_setUTCMonth.asp) | 根据世界时设置 Date 对象中的月份 (0 ~ 11)。            |
| [setUTCFullYear()](http://www.w3school.com.cn/jsref/jsref_setUTCFullYear.asp) | 根据世界时设置 Date 对象中的年份（四位数字）。         |
| [setUTCHours()](http://www.w3school.com.cn/jsref/jsref_setutchours.asp) | 根据世界时设置 Date 对象中的小时 (0 ~ 23)。            |
| [setUTCMinutes()](http://www.w3school.com.cn/jsref/jsref_setUTCMinutes.asp) | 根据世界时设置 Date 对象中的分钟 (0 ~ 59)。            |
| [setUTCSeconds()](http://www.w3school.com.cn/jsref/jsref_setUTCSeconds.asp) | 根据世界时设置 Date 对象中的秒钟 (0 ~ 59)。            |
| [setUTCMilliseconds()](http://www.w3school.com.cn/jsref/jsref_setUTCMilliseconds.asp) | 根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。           |
| [toSource()](http://www.w3school.com.cn/jsref/jsref_tosource_boolean.asp) | 返回该对象的源代码。                                   |
| [toString()](http://www.w3school.com.cn/jsref/jsref_toString_date.asp) | 把 Date 对象转换为字符串。                             |
| [toTimeString()](http://www.w3school.com.cn/jsref/jsref_toTimeString.asp) | 把 Date 对象的时间部分转换为字符串。                   |
| [toDateString()](http://www.w3school.com.cn/jsref/jsref_toDateString.asp) | 把 Date 对象的日期部分转换为字符串。                   |
| [toGMTString()](http://www.w3school.com.cn/jsref/jsref_toGMTString.asp) | 请使用 toUTCString() 方法代替。                        |
| [toUTCString()](http://www.w3school.com.cn/jsref/jsref_toUTCString.asp) | 根据世界时，把 Date 对象转换为字符串。                 |
| [toLocaleString()](http://www.w3school.com.cn/jsref/jsref_toLocaleString.asp) | 根据本地时间格式，把 Date 对象转换为字符串。           |
| [toLocaleTimeString()](http://www.w3school.com.cn/jsref/jsref_toLocaleTimeString.asp) | 根据本地时间格式，把 Date 对象的时间部分转换为字符串。 |
| [toLocaleDateString()](http://www.w3school.com.cn/jsref/jsref_toLocaleDateString.asp) | 根据本地时间格式，把 Date 对象的日期部分转换为字符串。 |
| [UTC()](http://www.w3school.com.cn/jsref/jsref_utc.asp)      | 根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。  |
| [valueOf()](http://www.w3school.com.cn/jsref/jsref_valueOf_date.asp) | 返回 Date 对象的原始值。                               |

## Math  

使用 Math 的属性和方法的语法：

```
var pi_value=Math.PI;
var sqrt_value=Math.sqrt(15);
```

注释：Math 对象并不像 Date 和 String 那样是对象的类，因此没有构造函数 Math()，像 Math.sin() 这样的函数只是函数，不是某个对象的方法。您无需创建它，通过把 Math 作为对象使用就可以调用其所有属性和方法。 

Math 对象属性

| 属性                                                         | 描述                                              |
| ------------------------------------------------------------ | ------------------------------------------------- |
| [E](http://www.w3school.com.cn/jsref/jsref_e.asp)            | 返回算术常量 e，即自然对数的底数（约等于2.718）。 |
| [LN2](http://www.w3school.com.cn/jsref/jsref_ln2.asp)        | 返回 2 的自然对数（约等于0.693）。                |
| [LN10](http://www.w3school.com.cn/jsref/jsref_ln10.asp)      | 返回 10 的自然对数（约等于2.302）。               |
| [LOG2E](http://www.w3school.com.cn/jsref/jsref_log2e.asp)    | 返回以 2 为底的 e 的对数（约等于 1.414）。        |
| [LOG10E](http://www.w3school.com.cn/jsref/jsref_log10e.asp)  | 返回以 10 为底的 e 的对数（约等于0.434）。        |
| [PI](http://www.w3school.com.cn/jsref/jsref_pi.asp)          | 返回圆周率（约等于3.14159）。                     |
| [SQRT1_2](http://www.w3school.com.cn/jsref/jsref_sqrt1_2.asp) | 返回返回 2 的平方根的倒数（约等于 0.707）。       |
| [SQRT2](http://www.w3school.com.cn/jsref/jsref_sqrt2.asp)    | 返回 2 的平方根（约等于 1.414）。                 |

Math 对象方法

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [abs(x)](http://www.w3school.com.cn/jsref/jsref_abs.asp)     | 返回数的绝对值。                                             |
| [acos(x)](http://www.w3school.com.cn/jsref/jsref_acos.asp)   | 返回数的反余弦值。                                           |
| [asin(x)](http://www.w3school.com.cn/jsref/jsref_asin.asp)   | 返回数的反正弦值。                                           |
| [atan(x)](http://www.w3school.com.cn/jsref/jsref_atan.asp)   | 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。     |
| [atan2(y,x)](http://www.w3school.com.cn/jsref/jsref_atan2.asp) | 返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。 |
| [ceil(x)](http://www.w3school.com.cn/jsref/jsref_ceil.asp)   | 对数进行上舍入。                                             |
| [cos(x)](http://www.w3school.com.cn/jsref/jsref_cos.asp)     | 返回数的余弦。                                               |
| [exp(x)](http://www.w3school.com.cn/jsref/jsref_exp.asp)     | 返回 e 的指数。                                              |
| [floor(x)](http://www.w3school.com.cn/jsref/jsref_floor.asp) | 对数进行下舍入。                                             |
| [log(x)](http://www.w3school.com.cn/jsref/jsref_log.asp)     | 返回数的自然对数（底为e）。                                  |
| [max(x,y)](http://www.w3school.com.cn/jsref/jsref_max.asp)   | 返回 x 和 y 中的最高值。                                     |
| [min(x,y)](http://www.w3school.com.cn/jsref/jsref_min.asp)   | 返回 x 和 y 中的最低值。                                     |
| [pow(x,y)](http://www.w3school.com.cn/jsref/jsref_pow.asp)   | 返回 x 的 y 次幂。                                           |
| [random()](http://www.w3school.com.cn/jsref/jsref_random.asp) | 返回 0 ~ 1 之间的随机数。                                    |
| [round(x)](http://www.w3school.com.cn/jsref/jsref_round.asp) | 把数四舍五入为最接近的整数。                                 |
| [sin(x)](http://www.w3school.com.cn/jsref/jsref_sin.asp)     | 返回数的正弦。                                               |
| [sqrt(x)](http://www.w3school.com.cn/jsref/jsref_sqrt.asp)   | 返回数的平方根。                                             |
| [tan(x)](http://www.w3school.com.cn/jsref/jsref_tan.asp)     | 返回角的正切。                                               |
| [toSource()](http://www.w3school.com.cn/jsref/jsref_tosource_math.asp) | 返回该对象的源代码。                                         |
| [valueOf()](http://www.w3school.com.cn/jsref/jsref_valueof_math.asp) | 返回 Math 对象的原始值。                                     |

## RegExp  

RegExp 对象表示正则表达式，它是对字符串执行模式匹配的强大工具。

直接量语法

```
/pattern/attributes
```

创建 RegExp 对象的语法：

```
new RegExp(pattern, attributes);
```

参数

参数 *pattern* 是一个字符串，指定了正则表达式的模式或其他正则表达式。

参数 *attributes* 是一个可选的字符串，包含属性 "g"、"i" 和 "m"，分别用于指定全局匹配、区分大小写的匹配和多行匹配。ECMAScript 标准化之前，不支持 m 属性。如果 *pattern* 是正则表达式，而不是字符串，则必须省略该参数。

修饰符

| 修饰符                                                   | 描述                                                     |
| -------------------------------------------------------- | -------------------------------------------------------- |
| [i](http://www.w3school.com.cn/jsref/jsref_regexp_i.asp) | 执行对大小写不敏感的匹配。                               |
| [g](http://www.w3school.com.cn/jsref/jsref_regexp_g.asp) | 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。 |
| m                                                        | 执行多行匹配。                                           |

方括号

方括号用于查找某个范围内的字符：

| 表达式                                                       | 描述                               |
| ------------------------------------------------------------ | ---------------------------------- |
| [[abc\]](http://www.w3school.com.cn/jsref/jsref_regexp_charset.asp) | 查找方括号之间的任何字符。         |
| [[^abc\]](http://www.w3school.com.cn/jsref/jsref_regexp_charset_not.asp) | 查找任何不在方括号之间的字符。     |
| [0-9]                                                        | 查找任何从 0 至 9 的数字。         |
| [a-z]                                                        | 查找任何从小写 a 到小写 z 的字符。 |
| [A-Z]                                                        | 查找任何从大写 A 到大写 Z 的字符。 |
| [A-z]                                                        | 查找任何从大写 A 到小写 z 的字符。 |
| [adgk]                                                       | 查找给定集合内的任何字符。         |
| [^adgk]                                                      | 查找给定集合外的任何字符。         |
| (red\|blue\|green)                                           | 查找任何指定的选项。               |

元字符

元字符（Metacharacter）是拥有特殊含义的字符：

| 元字符                                                       | 描述                                        |
| ------------------------------------------------------------ | ------------------------------------------- |
| [.](http://www.w3school.com.cn/jsref/jsref_regexp_dot.asp)   | 查找单个字符，除了换行和行结束符。          |
| [\w](http://www.w3school.com.cn/jsref/jsref_regexp_wordchar.asp) | 查找单词字符。                              |
| [\W](http://www.w3school.com.cn/jsref/jsref_regexp_wordchar_non.asp) | 查找非单词字符。                            |
| [\d](http://www.w3school.com.cn/jsref/jsref_regexp_digit.asp) | 查找数字。                                  |
| [\D](http://www.w3school.com.cn/jsref/jsref_regexp_digit_non.asp) | 查找非数字字符。                            |
| [\s](http://www.w3school.com.cn/jsref/jsref_regexp_whitespace.asp) | 查找空白字符。                              |
| [\S](http://www.w3school.com.cn/jsref/jsref_regexp_whitespace_non.asp) | 查找非空白字符。                            |
| [\b](http://www.w3school.com.cn/jsref/jsref_regexp_begin.asp) | 匹配单词边界。                              |
| [\B](http://www.w3school.com.cn/jsref/jsref_regexp_begin_not.asp) | 匹配非单词边界。                            |
| \0                                                           | 查找 NUL 字符。                             |
| [\n](http://www.w3school.com.cn/jsref/jsref_regexp_newline.asp) | 查找换行符。                                |
| \f                                                           | 查找换页符。                                |
| \r                                                           | 查找回车符。                                |
| \t                                                           | 查找制表符。                                |
| \v                                                           | 查找垂直制表符。                            |
| [\xxx](http://www.w3school.com.cn/jsref/jsref_regexp_octal.asp) | 查找以八进制数 xxx 规定的字符。             |
| [\xdd](http://www.w3school.com.cn/jsref/jsref_regexp_hex.asp) | 查找以十六进制数 dd 规定的字符。            |
| [\uxxxx](http://www.w3school.com.cn/jsref/jsref_regexp_unicode_hex.asp) | 查找以十六进制数 xxxx 规定的 Unicode 字符。 |

量词

| 量词                                                         | 描述                                        |
| ------------------------------------------------------------ | ------------------------------------------- |
| [n+](http://www.w3school.com.cn/jsref/jsref_regexp_onemore.asp) | 匹配任何包含至少一个 n 的字符串。           |
| [n*](http://www.w3school.com.cn/jsref/jsref_regexp_zeromore.asp) | 匹配任何包含零个或多个 n 的字符串。         |
| [n?](http://www.w3school.com.cn/jsref/jsref_regexp_zeroone.asp) | 匹配任何包含零个或一个 n 的字符串。         |
| [n{X}](http://www.w3school.com.cn/jsref/jsref_regexp_nx.asp) | 匹配包含 X 个 n 的序列的字符串。            |
| [n{X,Y}](http://www.w3school.com.cn/jsref/jsref_regexp_nxy.asp) | 匹配包含 X 至 Y 个 n 的序列的字符串。       |
| [n{X,}](http://www.w3school.com.cn/jsref/jsref_regexp_nxcomma.asp) | 匹配包含至少 X 个 n 的序列的字符串。        |
| [n$](http://www.w3school.com.cn/jsref/jsref_regexp_ndollar.asp) | 匹配任何结尾为 n 的字符串。                 |
| [^n](http://www.w3school.com.cn/jsref/jsref_regexp_ncaret.asp) | 匹配任何开头为 n 的字符串。                 |
| [?=n](http://www.w3school.com.cn/jsref/jsref_regexp_nfollow.asp) | 匹配任何其后紧接指定字符串 n 的字符串。     |
| [?!n](http://www.w3school.com.cn/jsref/jsref_regexp_nfollow_not.asp) | 匹配任何其后没有紧接指定字符串 n 的字符串。 |

RegExp 对象属性

| 属性                                                         | 描述                                     | FF   | IE   |
| ------------------------------------------------------------ | ---------------------------------------- | ---- | ---- |
| [global](http://www.w3school.com.cn/jsref/jsref_regexp_global.asp) | RegExp 对象是否具有标志 g。              | 1    | 4    |
| [ignoreCase](http://www.w3school.com.cn/jsref/jsref_regexp_ignorecase.asp) | RegExp 对象是否具有标志 i。              | 1    | 4    |
| [lastIndex](http://www.w3school.com.cn/jsref/jsref_lastindex_regexp.asp) | 一个整数，标示开始下一次匹配的字符位置。 | 1    | 4    |
| [multiline](http://www.w3school.com.cn/jsref/jsref_multiline_regexp.asp) | RegExp 对象是否具有标志 m。              | 1    | 4    |
| [source](http://www.w3school.com.cn/jsref/jsref_source_regexp.asp) | 正则表达式的源文本。                     | 1    | 4    |

RegExp 对象方法

| 方法                                                         | 描述                                               | FF   | IE   |
| ------------------------------------------------------------ | -------------------------------------------------- | ---- | ---- |
| [compile](http://www.w3school.com.cn/jsref/jsref_regexp_compile.asp) | 编译正则表达式。                                   | 1    | 4    |
| [exec](http://www.w3school.com.cn/jsref/jsref_exec_regexp.asp) | 检索字符串中指定的值。返回找到的值，并确定其位置。 | 1    | 4    |
| [test](http://www.w3school.com.cn/jsref/jsref_test_regexp.asp) | 检索字符串中指定的值。返回 true 或 false。         | 1    | 4    |

支持正则表达式的 String 对象的方法

| 方法                                                         | 描述                             | FF   | IE   |
| ------------------------------------------------------------ | -------------------------------- | ---- | ---- |
| [search](http://www.w3school.com.cn/jsref/jsref_search.asp)  | 检索与正则表达式相匹配的值。     | 1    | 4    |
| [match](http://www.w3school.com.cn/jsref/jsref_match.asp)    | 找到一个或多个正则表达式的匹配。 | 1    | 4    |
| [replace](http://www.w3school.com.cn/jsref/jsref_replace.asp) | 替换与正则表达式匹配的子串。     | 1    | 4    |
| [split](http://www.w3school.com.cn/jsref/jsref_split.asp)    | 把字符串分割为字符串数组。       | 1    | 4    |



# 方法



# 面向对象

## 封装

## 继承

## 多态

```
所谓多态，就是指一个引用在不同情况下的多种状态，在Java中多态是指通过指向父类的引用，来调用不同子类中实现的方法。
JS实际上是无态的，是一种动态语言，一个变量的类型是在运行过程中由JS引擎决定的，所以说，JS天然支持多态。
```

## this

1、this不能在类定义的外部使用，只能在类定义的内部使用。
2、哪个对象调用this所在的函数，那么this代表的就是哪个对象实例。

## 编写类的方式

### 1、构造函数方式

​	用构造函数模拟"类"，在其内部用this关键字指代实例对象。
这种方式的优点是：可以根据参数来构造不同的对象实例 ，每个对象的属性一般是不相同的，缺点是构造每个实例对象时，方法不能共享，Person类里面定义的那些方法，p1对象有一份，p2也有一份，那么在内存中就得开辟两块内存空间来分别存储p1的方法和p2的方法，这样就造成了内存的浪费。对于一个类的不同实例对象，这些对象的属性一般是不相同的，但是方法是相同的，所以节约内存的做法就是把方法放到内存的一块区域中存放，然后每个实例对象都从这块内存中取出方法。

### 2、原型方式

​	需要说明的是，使用原型方式编写JavaScript类是无法给类添加私有属性和私有方法的，使用原型方式添加的属性和方法都是public的。
原型方式的优点：所有对象实例都共享类中定义的方法，这样就没有造成内存浪费。缺点，第一，不能定义类的私有属性和私有方法，第二，给在创建对象，给对象的属性初始化时，需要额外写一个初始化对象的方法。

### 3、构造函数+原型

​	构造函数方式和原型方式都有各自的优缺点，因此可以把这两种方式合并起来，用构造函数方式来定义类的属性(public属性，private属性)，用原型方式来定义类的方法(public方法)。互补不足，这就有了第三种写法。
第三种方式通过前两种方式的结合，算是达到了一个比较理想的写法了，可以通过传参构造对象实例，对象实例都共享同一份方法不造成内存浪费。第三种方式在开发中用得最多，我本人也是采用这种方式来编写JavaScript类。

## 编写类的扩展方法

在​J​a​v​a​S​c​r​i​p​t​中​可以使​用​类的p​r​o​t​o​t​y​p​e属性来​扩​展​类的属​性​和​方​法，在实际开发当中，
当JavaScript内置的那些类所提供的动态方法和动态属性不满足我们实际开发时，
我们就可以通过"prototype"属性给自定义类添加方法和属性或者扩展原有的类中的方法和属性。

### 一、扩展JavaScript内置类，添加动态方法

语法格式：
类名.prototype.方法名 = function([param1],[param2],....[paramn]) {
.................
}
[param1],[param2],....[paramn]这些参数都是可选的
使用这种方式给类添加的扩展方法都是动态的，动态方法是针对类的实例对象的，
所以调用必须要用"对象.方法名"的形式去调用，不能用"类名.方法名"的形式去调用！
1.1、使用prototype属性扩展String类
String类是JavaScript内置的一个类，但是这个String类没有quote方法，
此时就可以使用String类的prototype属性去扩展String类了，为String类添加一个实例方法(动态方法)，
这样每一个String类对象就都有quote方法了，这就达到了将String类扩展的效果，增强了String类的使用。


 ```js
/* 扩展为String类，为String类增加quote（两边加字符）方法 */
String.prototype.quote = function(quotestr) {
    if (!quotestr) {
        quotestr = """;
    }
    return quotestr + this + quotestr;   
};

// 测试String类新添加的quote方法
alert("abc".quote());      
alert("abc".quote("|"));
 ```


测试结果：
1.2、使用prototype扩展Number类

```js
Number.prototype.add=function(n){
    // 哪个对象调用this所在的函数，那么this代表的就是哪个对象实例
    return this+n;
}
// 测试Number类新添加的add方法
var i= new Number(10); // 等价于var i=10;
alert("i.Add(10).Add(30)的结果是："+i.Add(10).Add(30));
var b=40;
alert("b.Add(90)的结果是："+b.Add(90));
```

测试结果：
1.3、使用prototype扩展Array类

```js
Array.prototype.findVal=function(val){
        var index=-1;
        //哪个对象调用this所在的函数，那么this代表的就是哪个对象实例
        for(var i=0;i<this.length;i++){
            if(val==this[i]){
                index=i;
                break;
            }
        }
        return index;
    }
测试Array类新添加的findVal方法
var arr = new Array();
arr[0]="aaa";
arr[1]="bbb";
arr[2]="ccc";
alert("arr.FindVal("aaa")返回的索引是："+arr.FindVal("aaa"));
```

测试结果：
以上三个小例子就是使用类的prototype属性扩展了String类，Number类，Array类，
分别给这三个类添加了本身不存在的quote，add，findVal方法，JavaScript所有的类都可以使用prototype去扩展，
当觉得类本身提供的方法和属性不满足实际应用需求时，就可以根据需要进行扩展，为类添加新的方法和属性，增强类的使用功能！

### 二、扩展JavaScript内置类，添加静态方法

JavaScript是可以给类添加静态的扩展方法的，语法格式如下：
类名.方法名 = function([param1],[param2],....[paramn]) {
.................
}
[param1],[param2],....[paramn]这些参数都是可选的
使用这种方式给类添加的扩展方法都是静态的，动态方法是针对类的实例对象的，
所以调用必须要用"对象.方法名"的形式去调用，而静态方法是针对类的，用"类名.方法名"的形式去调用！
C#中的String类有一个静态的Format方法非常强大，在拼接字符串时特别方便，JavaScript的String类并没有Format方法，
但是我们可以去扩展String类，为String类添加类似C#中的String类的静态的Format方法

```js
// 范例：扩展String类，添加Format静态方法，模仿C#中的String.Format方法
// ----------------------------------------------------------------------
// <summary>
// 扩展String类，添加Format静态方法，模仿C#中的String.Format方法
// </summary>
// <returns>str</returns>
// ----------------------------------------------------------------------
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
                var re = new RegExp('\{' + (i - 1) + '\}', 'gm');
                str = str.replace(re, arguments[i]);
            }
        }
        return str;
    }
}

// 测试为String类扩展的Format静态方法
var str="我是{0}，我在总结{1}和{2}的学习，我很喜欢{3}这2门语言!";
//使用"类名.方法名"的形式去调用类的静态方法
//把str中的占位符{0}，{1}，{2}，{3}用具体的内容替换掉
str = String.Format(str,"孤傲苍狼","java","JavaScript","'java'和'JavaScript'");
alert(str);
```


运行结果：
这个小例子就是扩展了String类，给String类添加了一个静态的Format方法，
JavaScript所有的类都可以添加静态扩展方法，当觉得类本身提供的静态方法和静态属性不满足实际应用需求时，
就可以根据需要进行扩展，为类添加新的静态方法和静态属性，增强类的使用功能！
以上就是对JavaScript编写类的扩展方法的总结，大家可以根据实际情况对JavaScript内置的那些类编写扩展方法，
满足在开发中实际需求！有一个比较著名的prototype.js库就是针对JavaScript内置的那些类进行扩展，编写了大量的扩展方法！

# Ojbect 对象

Object类是所有JavaScript类的基类(父类)，提供了一种创建自定义对象的简单方式，不再需要程序员定义构造函数。

Object对象，是所有JavaScript对象的超类(基类)。Object.prototype(Obecjt的原型)定义了Js对象的基本方法和属性。

主要属性

```
1.constructor：对象的构造函数。
2.prototype：获得类的prototype对象，static性质。
```



主要方法

```
1.hasOwnProperty(propertyName)
判断对象是否有某个特定的属性。必须用字符串指定该属性，例如，obj.hasOwnProperty("name")，返回布尔值。此方法无法检查该对象的原型链中是否具有该属性；该属性必须是对象本身的一个成员。
2.isPrototypeOf(object)
判断该对象是否为另一个对象的原型。
3.propertyIsEnumerable(propertyName)
通过这个方法我们可以检测出这个对象成员是否是可遍历的，如果是可遍历出来的，证明这个对象就是可以利用for in 循环进行遍历的，
4.toString()：返回对象对应的字符串
5.valueOf()：返回对象对应的原始类型
```



## 构造函数

2.1 new Object() ：返回一个Object实例
2.2 new Object(value) ：根据value的值，返回不同的对象(Number、Boolean、String)
参数：
①value {number | bool | string} ：一个数字、布尔值或者字符串
返回值：
{Number、Boolean、String} 返回一个转换后的对象

```js
// 示例 ：
var o = new Object(123);
console.log(o); // => Number对象
o = new Object(true);
console.log(o); // => Boolean对象
o = new Object('abc');
console.log(o); // => String对象
```

## 实例属性

3.1 __proto__ ：设置或返回对象的原型对象(IE中不支持此属性)
说明：
1) 赋值时，对象继承新原型的所有方法和属性，以及新原型的原型链中的所有方法和属性。
2) 属性名称以两个下划线开始和结束。
3) 对象的__proto__ == 对象类的prototype

```js
// 示例：
// 1.自定义对象多层继承
function People(name) {
  this.name = name;
}
function Student(age) {
    this.age = age;
}
Student.prototype = new People(); // 设置Student的原型为People对象
var s = new Student(22);
console.log(s.proto); // => People 对象
console.log(Student.prototype); // => People 对象
console.log(s.proto == Student.prototype); // => true
// 2.对象直接量
var p = {}; // 等于new Object()
console.log(p.proto == Object.prototype); // => true
```



3.2 prototype ：设置或返回对象类的原型对象
说明：
1) prototype为对象类的属性。__proto__是对象的属性。
2)  Js内置对象(Array、Date等对象)都有一个只读的prototype属性。 可将属性和方法添加到原型中，但不能为内置对象分配其他原型。
3) 自定义对象的prototype属性可进行读写操作。

```js
// 示例：
var Student = function (name) {
    this.name = name;
};
// 给Student的原型添加一个sayHello方法
Student.prototype.sayHello = function () {
    alert('Hello,' + this.name);
}
var st = new Student('张三'); // 初始化对象st
console.log(st.name); // => 张三
st.sayHello(); // 弹出：Hello,张三
```



3.3 constructor ：表示创建此对象的构造函数
说明：
1) 设置或返回创建此对象的构造函数。
2) 若一个对象有多层继承，将返回最先调用的构造函数。
3) obj.constructor.prototype 可表示对象的原型。

```js
// 示例：
// 1.内置对象
var str = 'abc';
console.log(str.constructor); // => function String 构造函数
var o = {};
console.log(o.constructor); // => function Object 构造函数
// 2.自定义对象多层继承 ：constructor返回最先调用的构造函数
function People(name) {
    this.name = name; // s对象初始化时，先调用People构造函数，再调用Student构造函数
    console.log('People调用');
}
function Student(age) {
    this.age = age;
    console.log('Student调用');
}
Student.prototype = new People(); // 设置Student的原型为People对象
var s = new Student(22);
console.log(s.constructor); // => function People 构造函数
```



总结：__proto__、prototype、constructor 的关系
说明：
1) 对象的__proto__ 等于 类的prototype
2) 对象的constructor 等于 类，所以obj.constructor.prototype 可表示对象的原型。

```js
// 示例：
var o = {};
console.log(o.proto === Object.prototype); // true ：对象的proto等于类的prototype
console.log(o.constructor === Object); // true ：对象的constructor 等于 类
console.log(o.constructor.prototype === Object.prototype); // true ：o.constructor.prototype 可表示对象的原型。
```

　　

## 实例方法

4.1 hasOwnProperty(propertyName) ：判断对象是否拥有一个指定名称的实例属性(非继承)
参数：
①propertyName {string} ：属性名称。
返回值：
{bool} 判断对象是否拥有一个指定名称的本地定义(非继承)的属性；此方法不会检查对象原型链中的属性。
true ：属性为对象的实例属性，非继承。
false ：属性不为对象的实例属性。

```js
// 示例 ：
// 1.Object对象
var o = new Object();
o.name = '自定义属性'; // 定义一个实例属性
console.log(o.hasOwnProperty('name')); // => true：name属性为实例o自己定义的，而非继承
console.log(o.hasOwnProperty('toString')); // => false：toString为继承属性
// 2.自定义对象
var Student = function (name) {
    this.name = name;
};
// 给Student的原型添加一个sayHello方法
Student.prototype.sayHello = function () {
    alert('Hello,' + this.name);
}
// 给Student的原型添加一个age属性
Student.prototype.age = '';
var st = new Student('张三'); // 初始化对象st
console.log(st.hasOwnProperty('name')); // => true ：调用构造函数时，通过this.name附加到实例对象上
console.log(st.hasOwnProperty('sayHello')); // => false ：sayHello方法为原型上的成员
console.log(st.hasOwnProperty('age')); // => false ：age属性为原型上的成员
```



4.2 isPrototypeOf(obejct) ：判断某个原型是否出现在对象的原型链中
语法：
prototype.isPrototypeOf(object)
参数：
①obejct {object} ：被检测的对象。
返回值：
{bool} 返回某个原型是否出现在对象的原型链中
true ：是
false ：不是

```js
// 示例 ：
// 1.Obejct对象
var o = new Object();
console.log(Object.prototype.isPrototypeOf(o)); // => true ：o为Obejct一个对象
// 2.Array
var array = [1, 2, 3];
console.log(Array.prototype.isPrototypeOf(array)); // => true ：数组原型
console.log(Object.prototype.isPrototypeOf(array)); // => true ：Object是所有对象的基原型
// 3.自定义对象
var People = function () {
}
var Student = function () {
}
// 设置Student类的原型为People
Student.prototype = new People();
var st = new Student();
console.log(Student.prototype.isPrototypeOf(st)); // => true ：st为Student一个对象
console.log(People.prototype.isPrototypeOf(st)); // => true ：Student的原型为People
console.log(Object.prototype.isPrototypeOf(st)); // =>true ：Object是所有对象的基原型
```



4.3 propertyIsEnumerable(propertyName) ：判断指定名称的属性是否为实例属性并且是可枚举的(可用for/in循环枚举)
参数：
①propertyName {string} ：属性名称
返回值：
{bool} 判断属性是否为实例属性并且是可枚举的(可用for/in循环枚举)，不考虑原型链中的成员。
true ：是
false ：不是

```js
// 示例 ：
// 1.Array对象
var array = [1, 2, 3];
array.name = 'Array';
console.log(array.propertyIsEnumerable('name')); // => true ：name属性为实例属性
console.log(array.propertyIsEnumerable('join')); // => false ：join方法继承自Array
console.log(array.propertyIsEnumerable('length')); // => false ：length属性继承自Array
console.log(array.propertyIsEnumerable('toString')); // => false ：toString方法继承自Object
// 2.自定义对象
var Student = function (name) {
    this.name = name;
}
// 定义一个原型方法
Student.prototype.sayHello = function () {
    alert('Hello' + this.name);
};
var a = new Student('tom');
console.log(a.propertyIsEnumerable('name')); // => true ：name为自身定义的实例属性
console.log(a.propertyIsEnumerable('age')); // => false ：age属性不存在，也返回false
console.log(a.propertyIsEnumerable('sayHello')); // => false ：sayHello属于原型方法
```



4.4 toLocaleString() ：返回当前对象的一个本地化的字符串表示
4.5 toString() ：返回当前对象的一个字符串表示形式
4.6 valueOf() ：返回当前对象的原始值
参数：无
返回值：
{object} 返回当前对象关联的原始值，若没有相关联的值，则返回对象本身

```js
// 示例 ：
var a = [1, 2, 3];
console.log(a.valueOf()); // => [1, 2, 3]
var b = true;
console.log(b.valueOf()); // => true
var c = {};
console.log(c.valueOf()); // => Object {}
var s = 'abc';
console.log(s.valueOf()); // => abc
// 自定义个对象，重写valueOf
var customObject = {};
customObject.valueOf = function () {
    return '自定义对象';
}
console.log(customObject.valueOf()); // => 自定义对象
```



## 静态方法

5.1 Object.create(prototype, propertyDescriptor)：创建并返回一个指定原型和指定属性的对象
参数：
①prototype {prototype} ：返回对象的原型，可以为null。若为null，对象的原型为undefined。
②propertyDescriptor {propertyDescriptor} 可选：属性描述符。
属性描述符：设置属性的一系列特性；
语法格式：
propertyName: {
  value: '', // 设置此属性的值
  writable: true, // 设置此属性是否可写入；默认为false：只读
  enumerable: true, // 设置此属性是否可枚举(通过for/in预付)；默认为false：不可枚举
  configurable: true // 设置此属性是否可配置；如：是否可以修改属性的特性及删除属性。默认为false
}
返回值：
{object} 返回一个指定原型和指定属性的对象

```js
// 示例 ：
// 建立个自定义对象，设置name和age属性
var obj = Object.create(null, {
  name: {
      value: 'tom',
      writable: true,
      enumerable: true,
      configurable: true
  },
  age: {
      value: 22
  }
});
console.log(obj.name); // => tom
console.log(obj.age); // => 22
obj.age = 28;
console.log(obj.age); // => 22 ：age属性的writable默认为false，此属性为只读
for (p in obj) {
    console.log(p); // => name ：只输出name属性；age属性的enumerable默认为false，不能通过for/in 枚举
}
```



5.2  Object.defineProperties(object, propertyDescriptor) ：添加/修改对象一个或多个属性的特性
参数：
①object {object} ：对象
②propertyDescriptor {propertyDescriptor} 属性描述符。
说明：
若对象包含此属性，则是修改此属性的特性；否则为为对象添加此属性。

```js
// 示例 ：
var obj = {};
// 为对象添加name和age属性
Object.defineProperties(obj, {
    name: {
        value: 'tom',
        enumerable: true
    },
    age: {
        value: 22,
        enumerable: true
    }
});
for (p in obj) {
    console.log(p); // => name、age ：输出name和age属性
}
```




5.3 Object.defineProperty(obj, propertyName, propertyDescriptor) ：添加/修改对象指定属性的特性
参数：
①object {object} ：对象
②propertyName {string} ：属性的名称
③propertyDescriptor {propertyDescriptor} 属性描述符。
说明 ：
若对象包含此属性，则是修改此属性的特性；否则为添加此属性。

```js
// 示例：
var obj = {};
// 添加一个name属性
Object.defineProperty(obj, 'name', {
        value: 'tom',
        writable: true,
        enumerable: true,
        configurable:true
    }
);
console.log(obj.name); // => tom ：输出name属性的value的值
```



5.4 Object.freeze(object) ：冻结对象，使其不能添加属性以及无法对现有的实例属性进行特性更改、值修改、属性删除等操作
参数：
①object {object} ：对象
说明 ：
1) 此操作不可逆，冻结后无法进行解封。
2) 只影响实例属性，不影响原型属性。

```js
// 示例：
var obj = {
    name: 'tom',
    age: 22
};
Object.freeze(obj); // 冻结对象
obj.email = '123@qq.com';
console.log(obj.email); // undefined ：无法添加属性
obj.age = 25;
console.log(obj.age); // 22 ：无法设置属性的值
```



5.5 Object.getOwnPropertyDescriptor(object, propertyName) ：返回对象属性的描述符
参数：
①object {object} ：对象
②propertyName {propertyName} 属性名称
返回值：
{propertyDescriptor} 属性描述符对象
示例 ：
var obj = {
    name: 'tom',
    age: 22
};

var propertyDes = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(propertyDes); // => Object {value: "tom", writable: true, enumerable: true, configurable: true} ：输出描述符对象
　　
5.6 Object.getOwnPropertyNames(object) ：返回一个数组，包含对象的所有实例属性和方法，不包含原型继承的属性和方法
参数：
①object {object} ：对象
返回值：
{Array} 一个数组，包含对象的所有实例属性和方法，不包含原型继承的属性和方法
示例 ：
var obj = {
    name: 'tom',
    age: 22,
    sayHello: function () {
        alert('Hello' + this.name);
    }
};
console.log(Object.getOwnPropertyNames(obj)); // => ["name", "age", "sayHello"] ：返回对象的实例成员

5.7 Object.getPrototypeOf(object) ：返回对象的上一级原型
参数：
①object {object} ：对象
返回值：
{object} 返回原型对象
示例 ：
// 1.对象直接量
var obj = {
    name: 'tom',
    age: 22,
    sayHello: function () {
        alert('Hello' + this.name);
    }
};
console.log(Object.getPrototypeOf(obj)); // => Object 对象：对象直接量的原型为Object

// 2.自定义对象
var People = function (name) {
    this.name = name;
};

var p = new People('tom');
var people = Object.getPrototypeOf(p);
console.log(people); // => People 对象：new 创建的对象使用构造函数的prototype属性作为他们的原型
console.log(Object.getPrototypeOf(people)); // => Object 对象：原型People的原型为Object
　　
5.8 Object.isExtensible(object) ：判断是否可向对象添加新的属性
5.9 Object.isFrozen(object) ：判断对象是否冻结;true：不能修改对象的现有属性特性和值并且不能添加新的属性
5.10 Object.isSealed(object) ：判断对象是否封闭;true：不能修改对象的现有属性特性并且不能添加新的属性

5.11 Object.keys(object) ：返回一个数组，包含对象的可枚举的实例属性名称
参数：
①object {object} ：对象
返回值：
{Array} 返回一个数组，包含对象可枚举的实例属性名称
说明：
此方法与getOwnPropertyNames()类似，但getOwnPropertyNames()包含了可枚举和不可枚举的成员
示例 ：
var obj = {
    name: 'tom',
    age: 22,
    sayHello: function () {
        alert('Hello' + this.name);
    }
};

// 1)getOwnPropertyNames与keys方法返回的内容都相同
console.log(Object.getOwnPropertyNames(obj)); // => ["name", "age", "sayHello"] ：返回对象的所有实例成员
console.log(Object.keys(obj)); // => ["name", "age", "sayHello"] ：返回对象的所有可枚举成员

// 设置对象的name属性不可枚举
Object.defineProperty(obj, 'name', {
        enumerable: false
    }
);

// 2)keys方法，只包含可枚举成员
console.log(Object.getOwnPropertyNames(obj)); // => ["name", "age", "sayHello"] ：返回对象的所有实例成员
console.log(Object.keys(obj)); // => ["age", "sayHello"] ：返回对象的所有可枚举成员

5.12 Object.preventExtensions(object) ：设置对象不能添加新的属性
参数：
①object {object} ：对象
返回值：
{object} 返回此对象
示例 ：
var obj = {
    name: 'tom',
    age: 22
};
Object.preventExtensions(obj); // 设置对象不能添加新的属性
obj.email = '123@qq.com';
console.log(obj.email); // => undefined ：无法向对象添加新的属性

5.13 Object.seal(object) ：密封对象，使其无法修改现有属性的特性以及不能添加新的属性
参数：
①object {object} ：对象
返回值：
{object} 返回此对象
示例 ：
var obj = {
    name: 'tom',
    age: 22
};
Object.seal(obj); // 密封对象
obj.email = '123@qq.com';
console.log(obj.email); // => undefined ：无法向对象添加新的属性

// 报异常：无法修改对象属性的特性
Object.defineProperty(obj, 'name', {
        enumerable: false
    }
);

## 属性描述符

分为数据属性和访问器属性；
两者可相互转换，若转换后未设置enumerable和configurable特性(两类属性描述符都包含这2个特性)，将默认采用转换前的值。
6.1 数据属性
说明：包含属性的操作特性；如：设置值、是否可枚举等等
特性名称	描述	默认值
value	设置属性的值	undefined
writable	是否可修改属性的值；true：可修改属性的值；false：不可修改属性的值	false　　
enumerable	是否可枚举属性；true：可枚举，可通过for/in语句枚举属性；false：不可枚举	false
configurable	是否可修改属性的特性；true：可修改属性的特性(如把writable从false改为true)；false：不可修改属性的特性	false


默认值：
1)在使用Object.defineProperty、Object.defineProperties 或 Object.create 函数的情况下添加数据属性，writable、enumerable和configurable默认值为false。
2)使用对象直接量创建的属性，writable、enumerable和configurable特性默认为true。
示例：
// 1)对象直接量；属性特性默认为true
var o1 = {
    name: 'tom'
};
console.log(Object.getOwnPropertyDescriptor(o1, 'name')); // => Object {value: "tom", writable: true, enumerable: true, configurable: true}

// 2)通过Object.create创建，属性特性默认为false
var o2 = Object.create(null, {
    name: {value:'tom'}
});
console.log(Object.getOwnPropertyDescriptor(o2, 'name')); // => Object {value: "tom", writable: false, enumerable: false, configurable: false}

6.2 访问器属性
说明：设置属性的访问方式；set、get特性等
特性名称	描述	默认值
get	属性的返回值函数	undefined
set	属性的设置值函数；含有一个赋值参数	undefined
enumerable	是否可枚举属性；true：可枚举，可通过for/in语句枚举属性；false：不可枚举	false
configurable	是否可修改属性的特性；true：可修改属性的特性(如把writable从false改为true)；false：不可修改属性的特性	false


示例：
var obj = {};

// 添加一个属性，并设置为访问器属性
Object.defineProperty(obj, "name", {
    get: function () {
        return this._name; // get和set里的变量不要使用属性，如：属性为name，get和set用的是_name
    },
    set: function (x) {
        if (isNaN(x)) {
            this._name = x;
        } else {
            this._name = 'name不能为纯数字';
        }
    },
    enumerable: true,
    configurable: true
});

console.log(Object.getOwnPropertyDescriptor(obj, 'name')); // => Object {get: function, set: function, enumerable: true, configurable: true}
obj.name = '12';
console.log(obj.name); // => name不能为纯数字

# 闭包

## 一、变量的作用域

​	全局变量和局部变量。

## 二、闭包

​	解决从外部读取局部变量的问题.

​	闭包就是在另一个作用域中保存了一份它从上一级函数或者作用域得到的变量，而这些变量是不会随上一级函数的执行完成而销毁.

实例:

```js
function f1() {
    var n = 999;
    // nAdd是一个没有使用var声明的全局变量，这个变量现在指向了在f1函数内部声明的一个匿名函数
    nAdd = function () {
        n += 1
    }

    function f2() {
        console.log(n);
        // n = n + 1; // 这里对n做操作也是有效的
    }
    return f2;
}
var result = f1(); // result就是f2函数
result(); // 第一次调用result函数 999
nAdd(); // nAdd代表的就是在f1函数内部声明的一个匿名函数，nAdd()就是在调用匿名函数
result(); // 第二次调用result函数 1000
```



## 三、闭包的用途

最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。

## 四、使用闭包的注意点

1）由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。

2）闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。

# 原型链

## 一、概念

　　ECMAScript中描述了原型链的概念，并将原型链作为实现继承的主要方法。其基本思想是利用原型让一个引用类型继承另一个引用类型的属性和方法。在JavaScript中，用 `__proto__ `属性来表示一个对象的原型链。当查找一个对象的属性时，JavaScript 会向上遍历原型链，直到找到给定名称的属性为止！

​	在JavaScript中，Object类是所有类的父类，所以Person类从Object类继承，继承了Object类的所有public属性和public方法.

```js
 /*定义一个Person类*/
 function Person(_name,_age){
     this.name = _name;
     this.age = _age;
 }
// Person类通过使用原型(prototye)的方式继承Object类的：
Person.prototype = new Object();// 让Person类继承Object类
```

　　由于JavaScript规定，任何类都继承自Object类，所以"Person.prototype = new Object(); "即使我们不写，JavaScript引擎也会自动帮我们加上这句话，或者是使用"Person.prototype = Object.prototype;"这种方式，让Person类去继承Object类。"Person.prototype = new Object();"，其实这样就相当于Object对象是Person的一个原型，这样就相当于了把Object对象的属性和方法复制到了Person上了。

## 二、new 运算符

```js
var p  = new Person("Tom",24); // 创建一个人，名字是Tom
console.log((p.__proto__ === Person.prototype)); // true
// 很简单的一段代码，我们来看看这个new究竟做了什么？我们可以把new的过程拆分成以下三步：
1.var p={}; 初始化一个对象p。
2.p.__proto__=Person.prototype; // 将对象p的 __proto__ 属性设置为 Person.prototype
3.Person.call(p,"Tom",24); // 调用构造函数Person来初始化p。
```

​	每个对象都会在其内部初始化一个属性，就是 `__proto__`，当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么他就会去`__proto__`里找这个属性，这个 `__proto__`又会有自己的`__proto__`，于是就这样一直找下去，也就是我们平时所说的原型链的概念。

​	按照标准，`__proto__`是不对外公开的，也就是说是个私有属性，在IE下是无法访问`__proto__`属性的，但是Firefox的引擎将他暴露了出来成为了一个公有的属性，我们可以对外访问和设置。

​	其实prototype只是一个假象，他在实现原型链中只是起到了一个辅助作用，换句话说，他只是在new的时候有着一定的价值，而原型链的本质，其实在于`__proto__`。

# 处理事件

## 处理窗口事件
onload事件
onunload事件
onbeforeunload事件
onresize事件
onmove事件
onabort事件
onerror事件
onfocus事件和onblur事件
onscroll事件
onDOMContentLoaded事件
## 处理鼠标事件
onmousedown事件
onmouseup事件
onmousemove事件
onmouseover事件
onmouseout事件
ondblclick事件
onclick事件
## 表单事件处理
onsubmit事件
onreset事件
onchange事件
onselect事件
onclick事件
onblur事件
onfocus事件
## 按键事件处理
onkeydown事件
onkeyup事件
onkeypress事件
## 高级事件处理
addEventListener方法
removeEventListener方法
dispatchEvent方法
initEvent方法
stopPropagation方法
preventDefault方法

# 对象和DOM

## 关于节点操纵

DOM 2和W3C
DOM 2术语
DOM 3

## 添加节点

## 删除节点

## 删除特定的节点

## 插入节点

## 替换节点

## 用对象字面量编写代码

# 处理图像

## 创建翻转器
## 创建更有效的翻转器
## 构建三状态翻转器
## 由链接触发翻转器
## 让多个链接触发一个翻转器
## 处理多个翻转器
## 创建循环的广告条
## 在循环广告条中添加链接
## 建立循环式幻灯片
## 显示随机图像
## 随机开始循环显示图像
# 窗口与框架
## 防止页面显示在框架中
## 设置目标
## 用JavaScript加载iframe
## iframe的使用
## 创建动态iframe
## 在文档之间共享函数
## 打开新窗口
## 为窗口加载不同的内容
# 表单处理
## 选择并转移导航菜单
## 动态地改变菜单
## 建立必须填写的字段
## 根据其他字段对字段进行检查
## 标识有问题的字段
## 准备进行表单验证
## 处理单选按钮
## 用一个字段设置另一个字段
## 检验Zip编码
## 验证电子邮件地址
#  表单和正则表达式
## 用正则表达式验证电子邮件地址
## 验证文件名
## 提取字符串
## 格式化字符串
## 对字符串进行格式化和排序
## 对字符串进行格式化和验证
## 使用正则表达式替换元素
# JavaScript和cookie
## 建立第一个cookie
## 读取cookie
## 显示cookie
## 使用cookie作为计数器
## 删除cookie
## 处理多个cookie
## 显示新内容提醒信息
## 
# 建立动态页面
## 在网页上显示当前日期
## 处理周中的日期
## 根据时间对消息进行定制
## 根据时区显示日期
## 把24小时制转换为12小时制
## 创建倒数计数器
## 隐藏和显示层
## 移动文档中的对象
## 日期方法



# JavaScript基础教程（第9版） 目录

第1章　了解JavaScript
1.1　JavaScript是什么
1.2　JavaScript不是Java
1.3　JavaScript的起源
1.4　JavaScript可以做什么
1.5　JavaScript不能做什么
1.6　JavaScript及其他
1.6.1　jQuery是什么
1.6.2　Ajax是什么
1.7　组合式语言
1.7.1　对象
1.7.2　属性
1.7.3　方法
1.7.4　将对象、属性和方法组合在一起
1.7.5　DOM简介
1.8　处理事件
1.9　值和变量
1.9.1　操作符
1.9.2　赋值和比较
1.9.3　比较
1.10　编写对JavaScript友好的HTML
1.10.1　结构、表现和行为
1.10.2　div和span
1.10.3　class和id
1.11　要使用什么工具
第2章　开始
2.1　将脚本放在哪里
2.2　关于函数
2.3　使用外部脚本
2.4　在脚本中添加注释
2.5　向用户发出警告
2.6　确认用户的选择
2.7　提示用户
2.8　用链接对用户进行重定向
2.9　使用JavaScript改进链接
2.10　使用多级条件
2.11　处理错误
第3章　第一个Web应用程序
3.1　用循环进行重复操作
3.2　将值传递给函数
3.3　探测对象
3.4　处理数组
3.5　处理有返回值的函数
3.6　更新数组
3.7　使用do/while循环
3.8　以多种方式调用脚本
3.9　组合使用JavaScript和CSS
3.10　检查状态
3.11　处理字符串数组
第4章　处理图像
4.1　创建翻转器
4.2　创建更有效的翻转器
4.3　构建三状态翻转器
4.4　由链接触发翻转器
4.5　让多个链接触发一个翻转器
4.6　处理多个翻转器
4.7　创建循环的广告条
4.8　在循环广告条中添加链接
4.9　建立循环式幻灯片
4.10　显示随机图像
4.11　随机开始循环显示图像
第5章　窗口与框架
5.1　防止页面显示在框架中
5.2　设置目标
5.3　用JavaScript加载iframe
5.4　iframe的使用
5.5　创建动态iframe
5.6　在文档之间共享函数
5.7　打开新窗口
5.8　为窗口加载不同的内容
第6章　表单处理
6.1　选择并转移导航菜单
6.2　动态地改变菜单
6.3　建立必须填写的字段
6.4　根据其他字段对字段进行检查
6.5　标识有问题的字段
6.6　准备进行表单验证
6.7　处理单选按钮
6.8　用一个字段设置另一个字段
6.9　检验Zip编码
6.10　验证电子邮件地址
第7章 表单和正则表达式
7.1　用正则表达式验证电子邮件地址
7.2　验证文件名
7.3　提取字符串
7.4　格式化字符串
7.5　对字符串进行格式化和排序
7.6　对字符串进行格式化和验证
7.7　使用正则表达式替换元素
第8章　处理事件
8.1　处理窗口事件
8.1.1　onload事件
8.1.2　onunload事件
8.1.3　onbeforeunload事件
8.1.4　onresize事件
8.1.5　onmove事件
8.1.6　onabort事件
8.1.7　onerror事件
8.1.8　onfocus事件和onblur事件
8.1.9　onscroll事件
8.1.10　onDOMContentLoaded事件
8.2　处理鼠标事件
8.2.1　onmousedown事件
8.2.2　onmouseup事件
8.2.3　onmousemove事件
8.2.4　onmouseover事件
8.2.5　onmouseout事件
8.2.6　ondblclick事件
8.2.7　onclick事件
8.3　表单事件处理
8.3.1　onsubmit事件
8.3.2　onreset事件
8.3.3　onchange事件
8.3.4　onselect事件
8.3.5　onclick事件
8.3.6　onblur事件
8.3.7　onfocus事件
8.4　键事件处理
8.4.1　onkeydown事件
8.4.2　onkeyup事件
8.4.3　onkeypress事件
8.5　高级事件处理
8.5.1　addEventListener方法
8.5.2　removeEventListener方法
8.5.3　dispatchEvent方法
8.5.4　initEvent方法
8.5.5　stopPropagation方法
8.5.6　preventDefault方法
第9章　JavaScript和cookie
9.1　建立第一个cookie
9.2　读取cookie
9.3　显示cookie
9.4　使用cookie作为计数器
9.5　删除cookie
9.6　处理多个cookie
9.7　显示新内容提醒信息
第10章　对象和DOM
10.1　关于节点操纵
10.1.1　DOM 2和W3C
10.1.2　DOM 2术语
10.1.3　DOM 3
10.2　添加节点
10.3　删除节点
10.4　删除特定的节点
10.5　插入节点
10.6　替换节点
10.7　用对象字面量编写代码
第11章　建立动态页面
11.1　在网页上显示当前日期
11.2　处理周中的日期
11.3　根据时间对消息进行定制
11.4　根据时区显示日期
11.5　把24小时制转换为12小时制
11.6　创建倒数计数器
11.7　隐藏和显示层
11.8　移动文档中的对象
11.9　日期方法
第12章　JavaScript应用示例
12.1　使用可折叠菜单
12.2　添加下拉菜单
12.3　改进下拉菜单
12.4　带说明的幻灯片
12.5　一个娱乐姓名生成器
12.6　柱状图生成器
12.7　样式表切换器
第13章　Ajax简介
13.1　Ajax的定义
13.2　读取服务器数据
13.3　解析服务器数据
13.4　刷新服务器数据
13.5　从服务器获得数据
13.6　用Ajax预览链接
13.7　自动补全表单字段
13.8　检查文件是否存在
第14章　工具包、框架和库
14.1　添加jQuery
14.2　使用jQuery更新页面
14.3　使用jQuery交互
14.4　交互与更新
14.5　条纹表格
14.6　表格排序
第15章　用jQuery设计页面
15.1　突出显示新元素
15.2　创建可折叠菜单
15.3　创建更漂亮的对话框
15.4　自动完成字段
15.5　添加可排序选项卡
15.6　使用复选框作为按钮
15.7　在页面中添加日历
15.8　使用ThemeRoller定制外观
第16章　基于jQuery的应用
16.1　以jQuery为基础
16.1.1　Ajax、JSON和jQuery
16.1.2　jQuery插件
16.2　拖放元素
16.3　使用jQuery处理外部数据
16.4　使用jQuery插件
16.5　添加jQuery音频插件
第17章　为移动设备编写脚本
17.1　改变方向
17.2　处理触摸事件
17.3　针对不同设备编写特定代码
17.4　定位设备
第18章　bookmarklet
18.1　第一个bookmarklet
18.2　改变页面的背景颜色
18.3　改变页面样式
18.4　查询单词
18.5　查看图像
18.6　显示ISO Latin字符
18.7　将RGB值转换为十六进制
18.8　对值进行转换
18.9　bookmarklet计算器
18.10　缩短URL
18.11　检验页面
18.12　通过电子邮件发送页面
18.13　改变页面大小