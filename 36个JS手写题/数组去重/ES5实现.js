// function unique(arr) {
//     let res = arr.filter(function (item, index, arr) {
//         return index === arr.indexOf(item)
//     });
//     return res;
// }

function unique(arr) {
    let res = arr.filter(function (item, index, arr) {
        return index == arr.indexOf(item)
    })
    return res
}
let arr = [1, 3, 3, 4, 5]

console.log(unique(arr))