function Parent () {
    this.name = '小李'
}
//父构造函数的原型添加方法
Parent.prototype.callName = function () {
    console.log(this.name);
}
//子构造函数
function Child () {
}
//子构造函数的原型为父构造函数的实例。继承
Child.prototype = new Parent();

let child = new Child();
console.log(child.callName());

//优点：父类的方法可以被继承
//缺点：父类所有的引用属性会被所有子类共享，更改子类的引用属性，其他子类也会受影响