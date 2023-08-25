function Parent (name) {
    this.info = {
        name,
        age: 18
    }
}
//子类构造函数中调用父类构造函数
function Child (name) {
    Parent.call(this, name);
    this.type = 'child'
}

let child = new Child('dyx');
console.log(child.info.name);
//优点
//可以像父类传参
//父类的引用属性不会共享
//缺点
//子类不能访问父类原型链上的方法，因此方法只能写在构造函数中。每次调用都会重新创建方法

