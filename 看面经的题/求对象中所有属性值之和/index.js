// 代码题

// #需求
// 解析 let a={b:10,c:{d:[11,12],e:13}}，实现 10+11+12+13 效果？

// #思路
// 递归

// #代码
var a = { b: 10, c: {d: [11,12, {k: 1}], j: 100}, e: 13, f: 100}

function sum(obj) {
  var total = 0;
  
  if(Array.isArray(obj)) {
    return obj.reduce((acc,cur)=>{
      return acc + typeof cur === 'number'? cur :  sum(cur)   
    }, total)
  }
  
  var values = Object.values(obj)
  values.forEach(it => {
    total +=  typeof it === 'number' ? it : sum(it)
  })
  return total
}

var s = sum(a) // 
console.log('数值之和是', s)