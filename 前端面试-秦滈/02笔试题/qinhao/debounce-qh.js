//防抖
//防抖函数原理：
// 在事件被触发n秒后再执行回调，
// 如果在这n秒内又被触发，
// 则重新计时。
/**
 * 按钮提交场景：
 * 防止多次提交按钮，
 * 只执行最后提交的一次
 * 服务端验证场景：
 * 表单验证需要服务端配合，
 * 只执行一段连续的输入事件的最后一次，
 * 还有搜索联想词功能类似
 * 生存环境请用lodash.debounce
 * @param fn
 * @param delay
 * @returns {Function}
 */
const debounce = (fn,delay) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this,args);
    },delay)
  }
};
