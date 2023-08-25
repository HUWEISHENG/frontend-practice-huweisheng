// call
Function.prototype.myCall = function (_this = window, ...val) {
  // _this => window or o
  // this => foo
  _this._this = this
  // val => [1, 2]
  // o.foo(...[1, 2])
  const result = _this._this(...val)
  delete _this._this
  return result
}

const o1 = { name: 'ifer' }
function foo(a, b) {
  console.log(this, a + b) // { name: 'ifer' }
}

foo.myCall(o, 1, 2)
// #apply
Function.prototype.myApply = function (_this = window, val) {
  // _this => window or o
  // this => foo
  _this._this = this
  // val => [1, 2]
  // o.foo(...[1, 2])
  const result = _this._this(...val)
  delete _this._this
  return result
}

const o2 = { name: 'ifer' }
function foo(a, b) {
  console.log(this, a + b) // { name: 'ifer' }
}

foo.myApply(o, [1, 2])
// #bind
Function.prototype.myBind = function (_this = window, ...val) {
  // _this => window or o
  // this => foo
  _this._this = this
  return function () {
    // val => [1, 2]
    // o.foo(...[1, 2], ...arguments)
    const result = _this._this(...val, ...arguments)
    delete _this._this
    return result
  }
}

const o3 = { name: 'ifer' }
function foo(a, b) {
  console.log(this, a + b) // { name: 'ifer' }, 3
}

const newFn = foo.myBind(o, 1)
newFn(2)