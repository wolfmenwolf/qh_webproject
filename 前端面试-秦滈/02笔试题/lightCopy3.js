let arr = [1, 3, {
  username: 'kobe'
}];
let arr2=arr.concat();
arr2[2].username = 'wade';
console.log(arr);
