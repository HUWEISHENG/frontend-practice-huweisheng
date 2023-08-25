function Animal() {
    this.color = ["white", "black"];
}

Animal.prototype.getColor = function () {
    return this.color;
}

function Dog() {

}

Dog.prototype = new Animal();
Dog.prototype.constructor=Animal;

let dog1 = new Dog()
dog1.color.push("pink");
console.log(dog1.getColor());

let dog2 = new Dog()
console.log(dog2.getColor());

/*原型链继承存在的问题：
问题1：原型中包含的所有属性将被所有实例共享；
问题2：子类在实例化的时候不能给父类构造函数传参；*/
// 要想为子类新增属性和方法，必须要在new Animal()这样的语句之后执行，不能放到构造器中
// 无法实现多继承