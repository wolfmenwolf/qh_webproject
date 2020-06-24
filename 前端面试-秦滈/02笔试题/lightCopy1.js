let obj = {username: 'kobe', age: 39, sex: {option1: '男', option2: '女'}};
let obj1 = obj;
obj1.sex.option1 = '不男不女'; // 修改复制的对象会影响原对象
console.log(obj1, obj);
