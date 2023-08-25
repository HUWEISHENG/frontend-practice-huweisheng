// 核心：为父类实例添加新特性，作为子类实例返回
function Animal (name) {
  // 属性
  this.name = name || 'Animal';
  // 实例方法
  this.sleep = function(){
    console.log(this.name + '正在睡觉！');
  }
}
// 原型方法
Animal.prototype.eat = function(food) {
  console.log(this.name + '正在吃：' + food||"汉堡王");
};

function Cat(nanme){
    var instance = new Animal();
    instance.name = name || "胡伟生"
    return instance
}

// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); // false

// 特点：

// 不限制调用方式，不管是new 子类()还是子类(),返回的对象具有相同的效果
// 缺点：

// 实例是父类的实例，不是子类的实例
// 不支持多继承