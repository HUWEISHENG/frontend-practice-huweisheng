var arr = [12, 234, 12, 243, 32, 234, 123345, 221];
//冒泡
function bubble (arr) {
    if (!arr) return
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
// console.log(bubble(arr));

//选择排序
function SelectionSort (arr) {
    if (!arr) return
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        if (min !== i) {
            [arr[min], arr[i]] = [arr[i], arr[min]]
        }
    }
    return arr
}
// console.log(SelectionSort(arr));

//插入排序
function insertionSort (arr) {
    if (!arr) return
    let len = arr.length
    for (let i = 1; i < arr.length; i++) {
        //如果右边小于左边一直交换
        for (let j = i; (j > 0) && (arr[j] < arr[j - 1]); j--) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        }
    }
    return arr
}
console.log(insertionSort(arr));