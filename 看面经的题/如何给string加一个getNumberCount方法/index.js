String.prototype.getNumberCount = function () {
    let reg = /\d/g
    let res = this.match(reg)
    return res.length
}

console.log("32huhu".getNumberCount())