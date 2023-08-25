function debounce(fn, delay) {
    let timer = null;
    return function () {
        if (timer) {
          // 事件被触发，清除timer并重新开始计时
          clearTimeout(timer);
          timer = null;
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    }
}

function handle() {
    console.log('防抖' + Math.random())
}

window.addEventListener('scroll', debounce(handle, 500))

// 1、第一次调用函数的时候创建了一个定时器，在指定的时间之后运行代码

// 2、当第二次调用该函数的时候，会清除前一次的定时器并设置另一个

// 3、如果前一个定时器已经执行过了，这个操作就没有任何意义

// 4、当前一个定时器没有执行的时候，就是将他替换成一个新的定时器

// 5、目的是只有在执行函数的请求停止了wait时间之后才执行
// ————————————————
// 版权声明：本文为CSDN博主「芋圆不想 圆」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/m0_52900946/article/details/124778757