/*
* 线性复杂度，
* 随着数据规模n的增长，
* 计算时间也会随着n线性增长。
* 典型的O(n)的例子就是线性查找。
* 线性查找的时间消化与输入的数组数量n成一个线性比例，
* 随着n规模的增大，时间也会线性增长。
* */
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i
    }
  }
  return -1
};
