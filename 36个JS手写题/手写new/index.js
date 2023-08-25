function Person(name, sex) {
    this.name = name;
    this.sex = sex;
}

function myNew(fn, ...args) {
    let obj = {} //创建一个新对象
    if (fn.prototype != null) {
        obj.__proto__ = fn.prototype;
    }
    let res = fn.call(obj, args)
    if (res != null && (typeof res === 'function' || typeof res === 'object')) {
        return res;
    }
    return obj;
}

console.log(myNew(Person, 'huweisheng', 'male'))