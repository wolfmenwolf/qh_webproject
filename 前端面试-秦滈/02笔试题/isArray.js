Array.myIsArray = function(o) {
  returnObject.prototype.toString.call(Object(o)) === '[object Array]';
};

console.log(Array.myIsArray([])); // true
