  /** || 返回第一个不为false的那个值(对象亦可)或者最后一个值(如果全部都为false的话) */
  var a = 2;
  var b = 90;
  var c = a || b; // 在JavaScript中，非0的数字就代表true, 0就代表false
  console.log(c); // 2，返回第一个不为false的那个值，所以值是2

  var bFalse1 = false;
  var bFalse2 = false;
  var num = 0; // 0代表false
  var result = bFalse1 || bFalse2 || num;
  console.log(num); // 0, 如果全部都为false的话，返回最后一个值

  /** 如果一个运算数是对象，另一个是 Boolean 值，返回该对象。*/
  var obj = new Object();
  var bTrue = true;
  var bFalse = false;
  console.log((obj || bTrue)); //{}
  console.log((bTrue || obj)); // true, 如果第一个运算数值为 true，就不再计算第二个运算数。
  console.log((obj || bFalse)); // {}
  console.log((bFalse || obj)); // {}

  /** 如果两个运算数都是对象，返回第一个对象 */
  var obj1 = new Object();
  var obj2 = new Object();
  console.log((obj1 == (obj1 || obj2))); // true
  console.log((obj2 == (obj1 || obj2))); // false

  /** 如果某个运算数是 null，返回 null。*/
  var c = 1;
  var d = null;
  console.log((!!d)); // false
  console.log((c || d)); // 1
  console.log((d || c)); // 1

  var o = new Object();
  console.log((o || d)); // {}
  console.log((d || o)); // {}

  var zero = 0;
  console.log((zero || d)); // null
  console.log((d || zero)); // 0

  var bTrue = true;
  var bResult = (bTrue || bUnknown);
  /*变量 bUnknown 是未定义的。不过，由于变量 bTrue 的值为 true，bUnknown 不会被计算，因此输出的是 "true"。*/
  console.log(bResult); // true

  bFalse = false;
  bResult = (bFalse || bUnknown); // 这里报错
  console.log(bResult); // 不会执行这一行