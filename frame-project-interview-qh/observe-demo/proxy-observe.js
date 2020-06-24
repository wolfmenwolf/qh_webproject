//创建响应式
function reactive(target={}) {
    if(typeof target !== 'object'|| target == null){
        return target;
    }

    const proxyConf = {
        get(target,key,receiver){
            //只处理本身（非原型的）属性
            const ownKeys = Reflect.ownKeys(target);
            if(ownKeys.includes(key)){
                console.log('get',key);
            }

            const result = Reflect.get(target,key,receiver);
            //深度监听
            //性能如何提升
            return reactive(result)

        },
        set(target,key,val,receiver){
            //重复的数据不处理
            if(val === target[key]){
                return true;
            }

            const ownKeys = Reflect.ownKeys(target);
            if(ownKeys.includes(key)){
                console.log("已有的 key",key);
            }else {
                console.log("新增的key",key)
            }

            const result = Reflect.set(target,key,val,receiver);
            console.log('set',key,val);
            return  result;

        },
        deleteProperty(target,key){
            const result = Reflect.deleteProperty(target,key);
            console.log('delete property',key);
            return result;// 是否删除成功
        }

    };

    const observed = new Proxy(target,proxyConf);
    return  observed;
}

// 测试数据
const data = {
    name: 'zhangsan',
    age: 20,
    info: {
        city: 'beijing',
        a: {
            b: {
                c: {
                    d: {
                        e: 100
                    }
                }
            }
        }
    }
};
const proxyData = reactive(data);
proxyData.info.a.b.c.d.e = 101;
console.log(proxyData);