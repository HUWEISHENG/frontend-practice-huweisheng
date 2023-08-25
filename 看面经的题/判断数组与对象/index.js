let a = [1, 2]

let b = {
    name: "huweisheng"
}

//1.利用Array.isArray()
console.log(Array.isArray(a)) //true
console.log(Array.isArray(b)) //false

//2.利用.length属性
console.log(a.length) //3
console.log(b.length) //undefined

//3.toString()
//.toString()
console.log(a.toString()); //1,2
console.log(b.toString()); //[object Object]

//Object.prototype.toString.call
console.log(Object.prototype.toString.call(a)); //[object Array]
console.log(Object.prototype.toString.call(b)); //[object Object]

//.contructor()
console.log(a.constructor()); //[]
console.log(b.constructor()); //{}

// .Array.prototype.isPrototypeOf
console.log(Array.prototype.isPrototypeOf(a)); //true
console.log(Array.prototype.isPrototypeOf(b)); //false