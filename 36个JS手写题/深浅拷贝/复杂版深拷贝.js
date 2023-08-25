     // 使用weakmap解决循环引用
     // 优点：
     // 1 .WeakMap来记录对象是否被克隆,主要考虑一下三点。
    //  2 .WeakMap对象是key=>value形式，不会重复记录
    //  3 .WeakMap是弱引用，如果不在使用，空间会直接释放
     const isComplexDataType = obj => (typeof obj === 'object' || typeof obj === 'function') && (obj !== null)

     function deepCopy (obj, hash= new WeakMap()) {
       // 不是对象（普通值类型/function）,null,undefined,正则，Date都会直接返回
       if(obj == null || typeof obj != 'object') {
        return obj
       }
       if(obj instanceof RegExp ) {
          return new RegExp(obj)
       }
       if( obj instanceof Date) {
        return new Date(obj)

       }

       // 判断是否循环引用的（判断属性是不是存在了）
       if(hash.get(obj)) return hash.get(obj)

       let cloneObj = new obj.constructor()

      // 存obj
       hash.set(obj, cloneObj)

       for(let key in obj) {
        // in 循环会遍历原型链的，所以需要判断是否是当前对象的属性
        if(obj.hasOwnProperty(key)) {
              cloneObj[key] = (isComplexDataType(obj[key]) && typeof obj[key] !== 'function') ? deepCopy(obj[key], hash) : obj[key]
        }
       }

       return cloneObj
       
     }
