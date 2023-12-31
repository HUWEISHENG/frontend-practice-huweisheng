Promise.prototype.all = function (promises) {
    let results = [];
    let promiseCount = 0;
    let promisesLength = promises.length;
    return new Promise(function (resolve, reject) {
        for (let val of promises) {
            Promise.resolve(val).then(function (res) {
                promiseCount++;
                // results.push(res);
                results[i] = res;
                // 当所有函数都正确执行了，resolve输出所有返回结果。
                if (promiseCount === promisesLength) {
                    return resolve(results);
                }
            }, function (err) {
                return reject(err);
            });
        }
    });
};

let promise1 = new Promise(function (resolve) {
    resolve(1);
});
let promise2 = new Promise(function (resolve) {
    resolve(2);
});
let promise3 = new Promise(function (resolve) {
    resolve(3);
});

let promiseAll = Promise.all([promise1, promise2, promise3]);
promiseAll.then(function (res) {
    console.log(res);
});