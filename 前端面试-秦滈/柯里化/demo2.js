var curry = function(fn) {
    var func = function() {
        var _args = [].slice.call(arguments, 0);
        console.log("_args1",_args);
        var func1 = function() {
            [].push.apply(_args, arguments);

            console.log("_args2",_args);
            return func1;
        };
        func1.toString = func1.valueOf = function() {
            return fn.apply(fn, _args);
        };
        return func1;
    };
    return func;
};
var add = function() {
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    })};

var adder = curry(add);
console.log(adder(1)(2)(3));