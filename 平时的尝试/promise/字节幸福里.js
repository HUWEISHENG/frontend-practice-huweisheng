// const list = [1, 2, 3, 4]
// const square = num => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(num * num)
//         }, 1000)
//     })
// }

// function test() {
//     list.forEach(async num => {
//         const res = await square(num)
//         console.log(res);
//     })
// }
// test()
setTimeout(()=>{
    console.log(1)
    new Promise((resolve,reject)=>{}).resolve(3).then(function (){console.log(2)})
},0)

setTimeout(()=>{
    console.log(3)
},0)