/**
 * new操作符做了这些事：
 * 它创建了一个全新的对象
 * 它会被执行[[Prototype]]（也就是__proto__）链接
 * 它使this指向新创建的对象
 * 通过new创建的每个对象将最终被[[Prototype]]链接
 * 到这个函数的prototype对象上
 * 如果函数没有返回对象类型Object
 * (包含Functoin, Array, Date, RegExg, Error)，
 * 那么new表达式中的函数调用将返回该对象引用
 * @returns {Object}
 */
// objectFactory(name, 'cxk', '18')
function objectFactory() {
  const obj = new Object();
  const Constructor = [].shift.call(arguments);

  obj.__proto__ = Constructor.prototype;

  const ret = Constructor.apply(obj, arguments);

  return typeof ret === "object" ? ret : obj;
}
