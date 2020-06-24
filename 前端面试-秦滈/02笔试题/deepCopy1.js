/**
 * 浅拷贝只复制地址值，
 * 实际上还是指向同一堆内存中的数据，
 * 深拷贝则是重新创建了一个相同的数据，
 * 二者指向的堆内存的地址值是不同的。
 * 这个时候修改赋值前的变量数据不会影响赋值后的变量。
 * 要实现一个完美的深拷贝太复杂了，
 * 这里简单介绍一下吧，可以应用于大部分场景了
 * 判断类型函数
 */
function getType(obj) {
  const str = Object.prototype.toString.call(obj);
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };
  if (obj instanceof Element) {
    // 判断是否是dom元素，如div等
    return'element';
  }
  return map[str];
}
