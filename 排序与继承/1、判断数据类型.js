var num = 1;
var str = "I am string";
var bol = false;
var arr = [1, 2, 3, 4];
var num1 = new Number(1);

var fuc = function () {
    console.log("i am function");
};
//typeof
console.log(typeof num);
console.log(typeof str);
console.log(typeof bol);
console.log(typeof arr);
console.log(typeof fuc);

//instanceof 检查是否是对应类的原型对象
console.log(num instanceof Number);
console.log(num1 instanceof Number);
console.log(str instanceof String);
console.log(bol instanceof Boolean);
console.log(arr instanceof Array);
console.log(fuc instanceof Function);

//object
console.log(Object.prototype.toString.call(arr));
console.log(Object.prototype.toString.call(fuc));
console.log(Object.prototype.toString.call(num));
console.log(Object.prototype.toString.call(bol));


//constructor
console.log(arr.constructor);
console.log(fuc.constructor);
console.log(num.constructor);
console.log(bol.constructor);

//原型链
console.log(Number.prototype.isPrototypeOf(num));
console.log(Number.prototype.isPrototypeOf(num1));
