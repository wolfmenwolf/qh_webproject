// ES5 方式
Function.prototype.bind = Function.prototype.bind || function() {
    var self = this;
    var rest1 = Array.prototype.slice.call(arguments);
    var context = rest1.shift();
    return function() {
        var rest2 = Array.prototype.slice.call(arguments);
        return self.apply(context, rest1.concat(rest2))
    }}

// ES6 方式
Function.prototype.bind = Function.prototype.bind || function(...rest1) {
    const self = this;
    const context = rest1.shift();
    return function(...rest2) {
        return self.apply(context, [...rest1, ...rest2])
    }}