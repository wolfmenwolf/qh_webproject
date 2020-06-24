/**
 * 改进2: 传统冒泡排序中每一趟排序操作只能找到
 * 一个最大值或最小值,
 * 我们考虑利用在每趟排序中进行正向
 * 和反向两遍冒泡的方法一次可以得到两个最终值
 * (最大者和最小者) ,
 * 从而使排序趟数几乎减少了一半。
 * @param arr3
 * @returns {*}
 */
function bubbleSort3(arr3) {
  var low = 0;
  var high= arr.length-1; //设置变量的初始值
  var tmp,j;
  console.time('2.改进后冒泡排序耗时');
  while (low < high) {
    for (j= low; j< high; ++j) //正向冒泡,找到最大者
      if (arr[j]> arr[j+1]) {
        tmp = arr[j]; arr[j]=arr[j+1];arr[j+1]=tmp;
      }
    --high; //修改high值, 前移一位
    for (j=high; j>low; --j) //反向冒泡,找到最小者
      if (arr[j]<arr[j-1]) {
        tmp = arr[j]; arr[j]=arr[j-1];arr[j-1]=tmp;
      }
    ++low; //修改low值,后移一位
  }
  console.timeEnd('2.改进后冒泡排序耗时');
  return arr3;}
