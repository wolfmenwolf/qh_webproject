//触发更新视图
function updateView() {
    console.log('视图更新')
}

//重新定义数组原型
const oldArrayProperty = Array.prototype;
// 创建新对象，原型指向 oldArrayProperty ，再扩展新的方法不会影响原型
const arrProto = Object.create(oldArrayProperty);
['push', 'pop', 'shift', 'unshift', 'splice'].forEach(methodName => {
    arrProto[methodName] = function () {
        updateView();//触发视图更新
        oldArrayProperty[methodName].call(this,...arguments);
    }
});

//重新定义属性，监听起来
function defineReactive(target,key,value) {
    //深度监听
    observer(value);

    //核心API
    Object.defineProperty(target,key,{
        get() {
            return value;
        },
        set(newValue) {
            if(newValue !== value){
                observer(newValue);
                value = newValue;
                updateView();
            }
        }
    })

}

//监听对象属性
function observer(target) {
    if(typeof target !== 'object' || target === null){
       //不是对象或数组
        return target;
    }
    //污染全局Array原型
    //Array.prototype.push = function(){
    // updateView();
    //...
    //}

    if(Array.isArray(target)){
        target.__proto__ = arrProto;
    }
    //重新定义各个属性(for in 也可以遍历数组)
    for (let key in target){
        defineReactive(target,key,target[key]);
    }
}


// 准备数据
const data = {
    name: 'zhangsan',
    age: 20,
    info: {
        address: '北京' // 需要深度监听
    },
    nums: [10, 20, 30]
}

// 监听数据
observer(data)

// 测试
// data.name = 'lisi'
// data.age = 21
// // console.log('age', data.age)
// data.x = '100' // 新增属性，监听不到 —— 所以有 Vue.set
// delete data.name // 删除属性，监听不到 —— 所有已 Vue.delete
// data.info.address = '上海' // 深度监听
data.nums.push(4); // 监听数组

