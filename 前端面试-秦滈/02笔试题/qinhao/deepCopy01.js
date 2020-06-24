function checkedType(target) {
  return Object.prototype.toString.call(target).slice(8,-1);
}
//实现深度克隆
