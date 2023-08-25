// function createCurry(func, args) {
//     var len = func.length;
//     var args = args || [];
//     return function () {
//         var _args = [].slice.call(arguments);
//         [].push.apply(_args, args);
//         if (_args.length < len) {
//             return createCurry.call(this, func, _args);
//         }
//         return func.apply(this, [..._args]);
//     }
// }

function createCurry(func, args) {
    var length = func.length;
    var args = args || [];
    return function () {
        var _args = [].slice.call(arguments);
        [].push.apply(_args, args);
        if (_args.length < length)
            return createCurry.call(this, func, _args);
        return func.apply(this, [..._args])
    }
}

function add(a, b, c) {
    return a + b + c;
}

console.log(createCurry(add)(1, 2)(4));