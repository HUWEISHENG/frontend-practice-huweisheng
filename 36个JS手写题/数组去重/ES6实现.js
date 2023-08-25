var unique = (arr) => {
    return [...new Set(arr)]
}


let arr = [1, 3, 3, 4, 5]

console.log(unique(arr))