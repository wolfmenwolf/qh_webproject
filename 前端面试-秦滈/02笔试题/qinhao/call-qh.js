Function.prototype.myCall = function (context) {
  context.fn = this;
  let args = [];
  for (let i = 1,len = arguments.length; i <len ; i++) {
    args.push(arguments[i]);
  }

  context.fn(...args);
  let result = context.fn(...args);
  delete context.fn;
  return result;
};
