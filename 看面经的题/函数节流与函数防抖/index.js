function throttle(fn, delay) {
    let canrun = true;
    return function () {
        if (!canrun) return; //如果canrun 为false,直接返回
        canrun = false; //设置为false，这样在执行到fn之前，后面的调用都进不去定时器
        let timeout = setTimeout(() => {
            fn.apply(this, arguments); // 执行fn
            canrun = true;
        }, delay)
    }
}

// function throttle(func, time) {
//     let timeout;
//     return function () {
//         if (!timeout) {
//             func.apply(this, arguments);
//             timeout = setTimeout(() => {
//                 timeout = null;
//             }, time);
//         }
//     };
// }

function handle(e) {
    console.log('节流' + e.target.innerWidth, e.target.innerHeight)
}

window.addEventListener('resize', throttle(handle, 2000))

// 完成节流可以使用时间戳与定时器的写法

// 使用时间戳写法，事件会立即执行，停止触发后没有办法再次执行

function throttled1(fn, delay = 500) {
  let oldtime = Date.now()
  return function (...args) {
    let newtime = Date.now()
    if (newtime - oldtime >= delay) {
      fn.apply(null, args)
      oldtime = Date.now()
    }
  }
}
// 使用定时器写法，delay毫秒后第一次执行，第二次事件停止触发后依然会再一次执行

function throttled2(fn, delay = 500) {
  let timer = null
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, delay)
    }
  }
}
// 可以将时间戳写法的特性与定时器写法的特性相结合，实现一个更加精确的节流。实现如下

function throttled(fn, delay) {
  let timer = null
  let starttime = Date.now()
  return function () {
    let curTime = Date.now() // 当前时间
    let remaining = delay - (curTime - starttime) // 从上一次到现在，还剩下多少多余时间
    let context = this
    let args = arguments
    clearTimeout(timer)
    if (remaining <= 0) {
      fn.apply(context, args)
      starttime = Date.now()
    } else {
      timer = setTimeout(fn, remaining)
    }
  }
}