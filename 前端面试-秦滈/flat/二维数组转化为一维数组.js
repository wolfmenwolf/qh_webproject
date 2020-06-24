let arr = [[0, 1], [2, 3], [4, 5]]
let newArr = arr.reduce((pre,cur)=>{
  return pre.concat(cur)},[])
console.log(newArr); // [0, 1, 2, 3, 4, 5]
