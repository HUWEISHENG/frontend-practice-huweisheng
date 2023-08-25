// 需求
// 请完成代码
const memoize = function(){}

const add = (a,b) => a+b;

const calc = memoize(add); // 函数缓存
calc(10,20);// 30 计算一次
calc(10,20);// 30 不再计算，而直接返回
// #代码
const memoize2 = function (func, content) {
  let cache = Object.create(null)
  content = content || this
  return (...key) => {
    if (!cache[key]) {
      cache[key] = func.apply(content, key)
    }
    return cache[key]
  }
}
