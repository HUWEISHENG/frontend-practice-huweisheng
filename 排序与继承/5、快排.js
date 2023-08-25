var arr = [12, 234, 12, 243, 32, 234, 123345, 221];



//去重1
console.log(new Array(...new Set(arr)));
//去重2
function deleteSame (arr) {
    let res = []
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1] !== arr[i]) {
            res.push(arr[i]);
        }
    }
    return res
}
console.log(deleteSame(arr));
//去重3
arr.forEach((item, index, arr) => {
    if (arr[index] === arr[index - 1]) {
        arr.splice(index, 1)
    }
})
console.log(arr);

function quickSort (arr) {
    if (arr.length <= 1) {
        return arr
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotIndex, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(pivot, quickSort(right))

}
console.log(quickSort(arr));

