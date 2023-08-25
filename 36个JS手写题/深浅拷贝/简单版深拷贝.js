// function deepCopy(obj) {
//     if (typeof obj != 'object') return;
//     let res = obj instanceof Array ? [] : {};
//     for (key in obj) {
//         if (obj[key] && typeof obj[key] == 'object') {
//             res[key] = deepCopy(obj[key]);
//         } else {
//             res[key] = obj[key];
//         }
//     }
//     return res;
// }


function deepCopy(obj) {
    if (typeof obj != 'object') return;
    let res = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj[key] && typeof obj[key] == 'object') {
            res[key] = deepCopy(obj[key])
        } else {
            res[key] = obj[key]
        }
    }
    return res;
}
console.log(deepCopy({
    a: 1,
    b: [1],
    c: {}
}))