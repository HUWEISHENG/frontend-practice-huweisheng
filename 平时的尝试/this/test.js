// var a = 20;
// var foo = {
//     a: 10,
//     getA: function () {
//         return this.a;
//     }
// }
// console.log(foo.getA()); // 10

// var test = foo.getA;
// console.log(test()); // 20

// var p = { v: 1 };

// function fuc(param) {
//   param.v = 2; //1
//   param = { v: 3 };
//   param = 4;
// }

// fuc(p);

// console.log(p.v);

// 'use strict';
// var a = 20;

// function foo() {
//   var a = 1;
//   var obj = {
//     a: 10,
//     c: this.a + 20,
//     fn: function () {
//       return this.a;
//     }
//   }
//   return obj.c;
// }
// console.log(foo()); // ？
// console.log(window.foo()); // ?

// // demo03
// var a = 20;
// var obj = {
//   a: 10,
//   c: this.a + 20,
//   fn: function () {
//     return this.a;
//   }
// }

// console.log(obj.c);
// console.log(obj.fn());


function foo() {
  console.log(this.a)
}

function active(fn) {
  fn(); // 真实调用者，为独立调用
}

var a = 20;
var obj = {
  a: 10,
  getA: foo
}

active(obj.getA);