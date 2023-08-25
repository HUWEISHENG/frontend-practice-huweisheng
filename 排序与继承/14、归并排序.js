var arr = [12, 234, 12, 243, 32, 234, 123345, 221];
function mergeSort (arr) {
    if (arr.length == 1) return arr
    let pivotIndex = Math.floor(arr.length / 2);
    let left = arr.slice(0, pivotIndex);
    let right = arr.slice(pivotIndex);
    return merge(mergeSort(left), mergeSort(right))
}

//合并函数

function merge (left, right) {
    let leftLen = 0
    let rightLen = 0
    let res = [];
    while (leftLen < left.length && rightLen < right.length) {
        if (left[leftLen] < right[rightLen]) {
            res.push(left[leftLen++]);
        } else {
            res.push(right[rightLen++]);
        }
    }
    return res.concat(left.slice(leftLen), right.slice(rightLen))
}

console.log(mergeSort(arr));