function myNew (fn, ...args) {
    //1、创建一个新的对象
    const obj = {};
    //2、使这个对象可以通过__proto__连接到构造函数的原型
    if (fn.prototype !== null) {
        obj.__proto__ = fn.prototype;
    }
    //调用构造函数，this指向obj新对象。
    let res = fn.call(obj, ...args);
    if (res && (typeof res === 'object' || typeof res === 'function')) {
        return res;
    }
    return obj;
}

