// 一般的正则验证字符串 reg.test(txt)

//封装后

// function check(reg, txt) {
//     return reg.test(txt);
// }

// console.log(check(/\d+/g, '1test'));

// //currying后
// function curryingCheck(reg) {
//     return function check(txt) {
//         return reg.test(txt);
//     }
// }

// var hasNumber = curryingCheck(/\d+/g);
// console.log(hasNumber(123))

console.log('打印' + 1);
setTimeout(function () {
    console.log('打印' + 2);
})
let p = new Promise(function (resolve, reject) {
    console.log('打印' + 3);
}).then(
    console.log('打印' + 4));;
console.log(p)
//注意此处和下面的区别
//  resolve();
// }).then(function () {
//     console.log(4);
// }
// );


console.log('打印' + 10);
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('打印' + 5);
    });
}).then(
    console.log('打印' + 6));
setTimeout(function () {
    new Promise(function (resolve, reject) {
        console.log('打印' + 7);
    });
})