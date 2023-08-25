// 需求
// 编写函数f，它的参数是一个非负的整数，它的返回值是一个它的二进制值中的"1"的个数

const f1 = (num) => {

  // 你的代码

}

const m = f(10); // 10的二进制是： 1010, 其中有2个1 
console.log(m) // 所以结果是2

// #参考1
// toString(2)可以得到一个数的n进制表示。例如： Number(2).toString(2) ===> 10


const f2 = (num) => {

  // 你的代码
  return Number(num).toString(2).split("").reduce((acc,cur)=>(cur==='1'? ++acc : acc),0)

}
