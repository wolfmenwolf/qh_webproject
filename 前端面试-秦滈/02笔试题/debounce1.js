/**
 * 防抖函数 onscroll 结束时触发一次，延迟执行
 * */
function debounce(func, wait) {
  let timeout;
  returnfunction() {
    let context = this;
    let args = arguments;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}
// 使用
window.onscroll = debounce(function() {
  console.log('debounce');
}, 1000);
