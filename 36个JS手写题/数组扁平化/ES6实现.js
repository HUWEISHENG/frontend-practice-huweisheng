// function flatten(arr) {
//     while (arr.some(item => {
//             return Array.isArray(item)
//         })) {
//         arr = [].concat(...arr);
//     }
//     return arr;
// }

function flatten(arr) {
    while (arr.some(item => {
            return Array.isArray(item)
        })) {
        arr = [].concat(...arr);
        console.log(arr);
    }
    return arr;
}
console.log(flatten([1, [2, [3]]]));