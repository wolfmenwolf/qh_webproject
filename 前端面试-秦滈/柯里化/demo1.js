// 普通方式
var add1 = function(a, b, c){
    return a + b + c;
};
console.log(add1(1,2,3));
// 柯里化
var add2 = function(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
};
console.log(add2(1)(2)(3));