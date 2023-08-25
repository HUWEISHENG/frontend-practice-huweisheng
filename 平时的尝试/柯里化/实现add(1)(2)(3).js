// function add(num) {
//     var temp = function (a) {
//         num += a;
//         return temp;
//     }
//     temp.toString = function () {
//         return num;
//     }
//     return temp;
// }

// console.log(add(1)(2)(3))
// const add = (num) => {
//     const s = (a) => {
//         num += a
//         return s
//     }

//     s.toString = () => {
//         return num
//     }

//     return s
// }
// console.log(add(1)(2)(3)(4)(5)) //15

// function add(a) {
//     var temp = function (b) { // 使用闭包
//         a = a + b; // 累加
//         return temp;
//     }
//     temp.toString = function () { // 重写toSting() 方法
//         return a;
//     }
//     return temp; // 返回一个函数
// }

// console.log(add(1)(3)) // f 4
// console.log(add(1)(3)(5)) // f 9

function sum(...args1) {
    // 求和
    let x = args1.reduce((prev, next) => {
        return prev + next;
    })
    return function (...args2) {
        if (args2.length == 0) return x;
        // 求和
        let y = args2.reduce((prev, next) => {
            return prev + next;
        })
        return sum(x + y)
    }
}
// 测试
console.log(sum(1, 2, 2)(7)()) // 12