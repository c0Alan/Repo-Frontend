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