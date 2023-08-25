//1
var func1 = x => x;
var func2 = x => { x }; //函数
var func3 = x => ({ x }); //括号中为对象
var func4 = function (x) {
    x;
}
console.log('第一题');
console.log(func1(1));
console.log(func2(1));
console.log(func3(1));
console.log(func4(1));

console.log('第二题');
console.log('script start');

new Promise((resolve, reject) => {
    console.log('p 1 resolve');
    resolve();
}).then(() => {
    console.log('p 1');
});
setTimeout(() => {
    console.log('setTimeout');
}, 0);

var s = new Date();
while (new Date() - s < 50); // 阻塞50ms
Promise.resolve().then(() => {
    console.log('p 2');
});
console.log('script end');
//整体script是一个宏任务。宏任务在执行时，如果是同步任务直接执行。异步任务放入任务队列中(包括宏任务队列与微任务队列)。
//在本题中首先进入script执行宏任务。遇到“script start"直接执行，遇到new Promise也直接执行。.then回调函数放入微任务队列中
//遇到setTimeout放入宏任务队列中
//阻塞一段时间
//遇到.then放入微任务队列中
//遇到script end 直接执行
//此时整个script宏任务执行完毕，去微任务队列看有没有任务，去进行清空
//清空微任务队列后执行宏任务队列。如果执行完一个，微任务队列又不为空的时候，又去执行所有的微任务。

// console.log('第三题');
// function Foo () {
//     function getname () {
//         console.log(4);
//     }
// }
// Foo.prototype.getname = function () {
//     console.log(3);
// }
// function Foo2 () {
//     Foo2.getname = function () {
//         console.log(2);
//     }
// }
// Foo2.prototype = Foo.prototype
// let obj = new Foo2();
// obj.getname(); 
//3
