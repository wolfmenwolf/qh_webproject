/**
 * #O(n²)平方级复杂度，
 * 典型情况是当存在双重循环的时候，
 * 即把 O(n) 的代码再嵌套循环一遍，
 * 它的时间复杂度就是 O(n²) 了，
 * 代表应用是冒泡排序算法。
 * @param arr
 * @returns {*}
 */
/**
 * 实现思路:
 * 1.比较相邻的元素。如果第一个比第二个大，就交换他们两个。
 * 2.对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。
 * 这步做完后，最后的元素会是最大的数。
 * 3.针对所有的元素重复以上的步骤，除了最后一个。
 * 4.持续每次对越来越少的元素重复上面的步骤，
 * 直到没有任何一对数字需要比较。
 * @param arr
 * @returns {*}
 */
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        var temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
