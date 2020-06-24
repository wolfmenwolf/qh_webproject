/**
 * extend 和 mixin 在很多框架和库中被使用，但两者本质上都是做了对象的合并，适用范围有限。在 ES6 出现之前，如何用 ES5 实现继承也也是前端面试中的常见题型之一，这里将重点介绍组合继承和寄生组合继承。
 * 组合继承
 * 通过原型链的机制，将父类的实例赋值给子类的原型链来实现子类继承父类的属性。
 * 同时，又将父类的构造函数在子类的构造函数中执行，来实现绑定父类构造函数中的属性。
 * 注意：父构造函数的执行一定要放到子构造函数属性定义之前，这样可以避免父构造函数上的属性覆盖子构造函数的属性。
 * 但是组合继承有个问题，就是在设置 Child 的原型时，需要实例化一次 Parent 构造函数，导致了 Parent 构造函数被调用了两次。
 * @param name
 * @param age
 * @constructor
 */
function Child(name, age) {
    Parent.call(this, name, age);
    this.name = name;
    this.age = age;
}
function Parent(name, age) {
    this.name = name;
    this.age = age;
}
Parent.prototype.getName = function() {
    console.log('parent', this.name);
}
Parent.prototype.getAge = function() {
    console.log('parent', this.age);
}
Child.prototype = new Parent();
Child.prototype.getName = function() {
    console.log('child', this.name);
}
var child = new Child('tom', 23);
child.getName();
child.getAge();