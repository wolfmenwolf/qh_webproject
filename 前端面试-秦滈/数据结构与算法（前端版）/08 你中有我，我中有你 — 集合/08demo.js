/**将一个N * N的数组实现从右上到左下打印



const arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]]

function rotateArr(arr) {
// 。。。一系列操作}

// 输出的结果为43,82,7,121,6,11,165,10,159,1413

    解：**/

function rotateArr(arr) {
    let len = arr.length; // 获取到N的长度
    let min = -len; // 定义一个最小值为 min
    for (let index = len - 1; index > min; index--) {
// 将每个index作为打印的初始值，需要从上到下打印数据
        let middle = index;
        for (let i = 0; i < len; i++) {
            if(arr[i][middle])
                console.log(arr[i][middle])
        }
        middle ++
    }
}