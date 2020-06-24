/**
 * #快速排序（Quick Sort）
 * #算法简介快速排序的基本思想：
 * 通过一趟排序将待排记录分隔成独立的两部分，
 * 其中一部分记录的关键字均比另一部分的关键字小，
 * 则可分别对这两部分记录继续进行排序，
 * 以达到整个序列有序。#算法描述和实现
 * 1.从数组中选择中间一项作为主元；
 * 2.创建两个指针，左边一个指向数组的第一项，
 * 右边指向数组最后一项。
 * 移动左指针直到我们找到一个比主元大的元素，
 * 接着，移动右指针直到找到一个比主元小的元素。然后交换它们，
 * 重复这个过程，直到左指针超过了右指针。
 * 这个过程是的比主元小的值都排在了主元之前，
 * 而比主元大的值都排在了主元之后，这一步叫划分操作。
 * 3.接着，算法对划分的小数组
 * （较主元小的值组成的子数组，
 * 以及较主元大的值组成的子数组）
 * 重复之前的两个步骤，直至数组以完全排序。
 * @param a
 * @param b
 * @returns {number}
 */
// 快速排序const quickSort = (function() {
// 默认状态下的比较函数
// 快速排序const quickSort = (function() {
// 默认状态下的比较函数
const quickSort = (function() {
function compare(a, b) {
  if (a === b) {
    return 0
  }
  return a < b ? -1 : 1
}

function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]]
}

// 分治函数
function partition(array, left, right) {
// 用index取中间值而非splice
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (compare(array[i], pivot) === -1) {
      i++
    }
    while (compare(array[j], pivot) === 1) {
      j--
    }
    if (i <= j) {
      swap(array, i, j);
      i++
      j--
    }
  }
  return i
}
// 快排函数
function quick(array, left, right) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right);
    if (left < index - 1) {
      quick(array, left, index - 1)
    }
    if (index < right) {
      quick(array, index, right)
    }
  }
  return array
}
return function quickSort(array) {
  return quick(array, 0, array.length - 1)
}})();

