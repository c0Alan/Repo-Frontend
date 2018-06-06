var Car = function () {};
Car.prototype.hello = function () {
    console.log("hello car");
};
var car = new Car();
car.f = function () {
    console.log("自定义方法");
}
console.log(car.hasOwnProperty("f")); // ture，car对象有f方法
console.log(car.propertyIsEnumerable("f")); // ture，car对象有f方法，f方法是可以被枚举的
console.log(car.hasOwnProperty("hello")); //  false，因为car本身没有hello方法
console.log(car.propertyIsEnumerable("hello")); //  false，没有这个方法当然不能枚举
console.log(car.constructor.prototype.hasOwnProperty("hello")); //  true，car的类Car的原型有hello方法
console.log(car.constructor.prototype.propertyIsEnumerable("hello")); //  true, car的类的Car的原型hello方法是可以被枚举的
console.log(Car.prototype.hasOwnProperty("hello")); //  true，car的类Car的原型有hello方法
console.log(Car.prototype.propertyIsEnumerable("hello")); // true