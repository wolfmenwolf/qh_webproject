/**
 * 寄生式继承
 * 寄生式继承的思路和工厂模式类似，即创建一个仅用于封装继承过程的函数，
 * 该函数内部以某种方式来增强对象，最后返回这个对象。
 * 寄生式继承更像是将对象与对象衔接起来，形成一条原型链。
 * 注意：Object.create 接收一个对象 origin ，以这个对象为原型（ prototype ），
 * 创建一个新的对象，这个新对象的[[Prototype]]指向 origin 对象。
 * @param origin
 * @returns {*}
 */
function createAnother(origin) {
    const clone = Object.create(origin);
    clone.say = function() {
        console.log(this.name);
    };
    return clone;}const person = {
    name: 'tom',
    age: 23};
const anotherPerson = createAnother(person);
anotherPerson.say(); // 'tom'