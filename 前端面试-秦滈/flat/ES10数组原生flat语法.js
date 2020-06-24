let ary = [1, [2, [3, [4, 5]]], 6];
let str = JSON.stringify(ary);
let arr_flat = ary.flat(3);
console.log("arr_flat",arr_flat);
