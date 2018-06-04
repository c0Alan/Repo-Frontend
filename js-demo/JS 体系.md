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



## 对象类型

Object

Function

```js
var obj1 = new Object();
var obj2 = obj1;
obj2.name = "李白";
console.log(obj1.name); // 李白
```

引用数据类型赋值过程图

![引用数据类型赋值过程](image\引用数据类型赋值过程.png)





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