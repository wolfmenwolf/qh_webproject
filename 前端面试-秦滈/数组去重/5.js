function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error!')
    return
  }
  var arrry= [];
  var  obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      arrry.push(arr[i])
      obj[arr[i]] = 1
    } else {
      obj[arr[i]]++
    }
  }
  return arrry;
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
//[1, "true", 15, false, undefined, null, NaN, 0, "a", {…}]    //两个true直接去掉了，NaN和{}去重
