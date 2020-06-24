// const data = {
//     name: 'zhangsan',
//     age: 20,
// }

const data =  ['a','b','c'];
const proxyData = new Proxy(data,{
    get(target, key, receiver) {
      //只处理本身（非原型）属性
        const ownKeys = Reflect.ownKeys(target);
        if(ownKeys.includes(key)){
            console.log('get',key);
        }

        const result = Reflect.get(target,key,receiver);
        return result;
    },
    set(target, key, val, receiver) {
   //重复数据，不处理
        if(val === target[key]){
            return true;
        }

        const result = Reflect.set(target,key,val,receiver);
        console.log('set',key,val);
        return result;
    },
    deleteProperty(target, p) {
        const result = Reflect.deleteProperty(target,key);
        console.log('delete property',key);
        //console.log('result',result)//true
        return result;//是否删除成功
    }
});