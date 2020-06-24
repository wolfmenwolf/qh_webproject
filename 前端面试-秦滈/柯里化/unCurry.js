Function.prototype.unCurry = function() {
    const self = this;
    return function() {
        return Function.prototype.call.apply(self, arguments);
    }}

const obj = {};const push = Array.prototype.push.unCurry();push(obj, 1, 2, 3);
console.log(obj); // { 0: 1, 1: 2, 2: 3}