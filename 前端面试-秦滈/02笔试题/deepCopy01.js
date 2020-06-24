//定义检测数据类型的功能函数
function checkedType(target) {
  /**
   *Object.prototype.toString()
   * 该方法返回描述某个对象数据类型的字符串，
   * 如自定义的对象没有被覆盖，
   * 则会返回“[object type]”，
   * 其中，type则是实际的对象类型。
   * 在使用该方法检测的时候，
   * 可以使用Object.prototype.toString.call()
   * 或者Object.prototype.toString.apply()进行测试，
   * 如
   * 复制代码
   * 1 var toString = Object.prototype.toString;
   * 2 toString.call(new Date);//[object Date]
   * 3 toString.call(new String);//[object String]
   * 4 toString.call(Math);//[object Math]
   * 5 toString.call(undefined);//[object Undefined]
   * 6 toString.call(null);//[object Null]
   * 复制代码
   * 因此，引出Object.prototype.toString.call(obj).slice(8,-1)，如
   * Object.prototype.toString.call('ESStudio balabala……');
   * //"[object String]"
   * Object.prototype.toString.call('ESStudio balabala……').slice(8,-1);
   * //"String"
   * slice(startIndex,endIndex)，从0开始索引，
   * 其中8代表从第8位（包含）开始截取
   * （本例中代表空格后面的位置），
   * -1代表截取到倒数第一位（不含），
   * 所以正好截取到[object String]
   * 中的String。
   */
  return Object.prototype.toString.call(target).slice(8, -1)
}
//实现深度克隆---对象/数组
function clone(target) {
//判断拷贝的数据类型
//初始化变量result 成为最终克隆的数据
  let result, targetType = checkedType(target);
  if (targetType === 'object') {
    result = {}
  } else if (targetType === 'Array') {
    result = []
  } else {
    return target
  }
//遍历目标数据
  for (let i in target) {
//获取遍历数据结构的每一项值。
    let value = target[i];
//判断目标结构里的每一值是否存在对象/数组
    if (checkedType(value) === 'Object' ||
      checkedType(value) === 'Array') { //对象/数组里嵌套了对象/数组
//继续遍历获取到value值
      result[i] = clone(value)
    } else { //获取到value值是基本的数据类型或者是函数。
      result[i] = value;
    }
  }
  return result
}
