// function flatten(arr) {
//     let res = [];
//     let length = arr.length;
//     for (let i = 0; i < length; i++) {
//         if (Array.isArray(arr[i]) == true) {
//             res = res.concat(flatten(arr[i]));
//         } else {
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }

function flatten(arr) {
    let length = arr.length
    let res = []
    for (let i = 0; i < length; i++) {
        if (Array.isArray(arr[i]) == true) {
            res = res.concat(flatten(arr[i]))
        } else {
            res.push(arr[i])
        }
    }
    return res
}
console.log(flatten([1, [2, [3]]]));