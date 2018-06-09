/** 扩展Object类，添加Clone方法 */
Object.prototype.Clone = function () {
    var objClone;
    if (this.constructor == Object) {
        objClone = new this.constructor();
    } else {
        objClone = new this.constructor(this.valueOf());
    }
    for (var key in this) {
        if (objClone[key] != this[key]) {
            if (typeof (this[key]) == 'object') {
                objClone[key] = this[key].Clone();
            } else {
                objClone[key] = this[key];
            }
        }
    }
    objClone.toString = this.toString;
    objClone.valueOf = this.valueOf;
    return objClone;
}
/*扩展Object类，添加Extend方法来实现JS继承, 目标对象将拥有源对象的所有属性和方法*/
Object.prototype.Extend = function (objDestination, objSource) {
    for (var key in objSource) {
        if (objSource.hasOwnProperty(key) && objDestination[key] === undefined) {
            objDestination[key] = objSource[key];
        }
    }
    return objDestination;
}

/** 定义一个Person类, 继承了Object 类的所有公有属性跟方法, 包括新添加的Clone和Extend方法 */
function Person(_name, _age) {
    this.name = _name;
    this.age = _age;
}

var p = new Person("Tom", 24); // 创建一个人，名字是Tom
var cloneP = p.Clone(); // p调用在Object类中定义的Clone方法来克隆自己，如果能得到一个cloneP，那就证明了Person类确实是继承了Object类，所以就拥有了Clone
console.log(p.age);
console.log(cloneP.age);
console.log((p == cloneP)); // false
cloneP.name = "Jack";
console.log(cloneP.name); // Jack
console.log(p.name); // Tom