let obj = {
  username: 'kobe'
};
let obj2 = Object.assign(obj);
obj.username = 'wade';
console.log(obj);//{username: "wade"}
