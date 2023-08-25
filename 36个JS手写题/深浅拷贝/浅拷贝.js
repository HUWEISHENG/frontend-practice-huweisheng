//浅拷贝：只考虑对象类型
//为了遍历一个对象的所有属性时忽略掉继承属性，使用hasOwnProperty()来过滤该对象上的继承属性。
// function shallowCopy(obj) {
//     if (typeof obj != 'object') return obj
//     let res = obj instanceof Array ? [] : {};
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             res[key] = obj[key];
//         }
//     }
//     return res;
// }

const shallowClone = (target) => {

  if (typeof target === 'object' && target !== null) {

    const cloneTarget = Array.isArray(target) ? []: {};

    for (let prop in target) {

      if (target.hasOwnProperty(prop)) {

          cloneTarget[prop] = target[prop];

      }

    }

    return cloneTarget;

  } else {

    return target;

  }

}



console.log(shallowCopy({
    a: 1,
    b: [1],
    c: {}
}))