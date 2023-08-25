function Animal(name) {
    this.name = name;
    this.color = ["black", "red"];
}

Animal.prototype.getColor = function () {
    return this.color;
}

function Dog(name, age) {
    Animal.call(this, name)
    this.age = age;
}

Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

let dog1 = new Dog("huhu", 21);
dog1.color.push("pink");
console.log(dog1);

let dog2 = new Dog("weiwei", 18);
console.log(dog2.getColor())
console.log(dog2);

// 优点:
// 1、创建子类实例，可以向父类构造函数传参数；
// 2、父类的实例方法定义在父类的原型对象上，可以实现方法复用；
// 3、不共享父类的构造方法及属性；
// 缺点: 调用了2次父类的构造方法