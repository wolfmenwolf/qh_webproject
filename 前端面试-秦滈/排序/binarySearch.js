/**
 * 对数复杂度，
 * 随着问题规模n的增长，
 * 计算时间也会随着n对数级增长。
 * 典型的例子是二分查找法。
 * 在二分查找法的代码中，通过while循环，
 * 成 2 倍数的缩减搜索范围，
 * 也就是说需要经过 log2^n 次即可跳出循环。
 * 事实上在实际项目中，
 * O(logn)是一个非常好的时间复杂度，
 * 比如当n=100的数据规模时，
 * 二分查找只需要7次，
 * 线性查找需要100次，
 * 这对于计算机而言差距不大，
 * 但是当有10亿的数据规模的时候，
 * 二分查找依然只需要30次，
 * 而线性查找需要惊人的10亿次，
 * O(logn)时间复杂度的算法随着数据规模的增大，
 * 它的优势就越明显。
 * #O(nlogn)
 * @param arr
 * @param target
 * @returns {number}
 */
function binarySearch(arr, target){
  let max = arr.length - 1;
  let min = 0;
  while (min <= max) {
    let mid = Math.floor((max + min) / 2)
    if (target < arr[mid]) {
      max = mid - 1
    }
    else if (target > arr[mid]) {
      min = mid + 1
    } else {
      return mid
    }
  }
  return -1
}
