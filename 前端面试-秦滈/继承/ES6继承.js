/**
 * 在 ES6 中，新增加了 extends 的语法糖，在定义子类的时候可以直接继承父类，
 * 这样统一了继承的方式，让大家不再被各种各样的继承方式困扰。
 * 注意：super关键字作为函数时，只能在构造函数中调用，代表父类的构造函数。
 * 作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
 */
class Parent {
    constructor(name, age) {
        this.name = name;
    }
    say() {
        console.log('my name is', this.name);
    }}class Child extends Parent {
    constructor(name, age) {
        super(name);
        this.name = name;
        this.age = age;
    }}const child = new Child('tom', 23);
child.say();