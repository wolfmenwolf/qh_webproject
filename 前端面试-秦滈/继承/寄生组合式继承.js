/**
 * 寄生组合式继承
 * 寄生组合式继承是将寄生式继承与组合继承结合起来的一种继承方式，
 * 主要是用 Object.create 来代替原来实例化父构造函数，
 * 它解决了组合继承中调用两次父构造函数的弊端，也是最理想的继承范式。
 * 注意：给 Child.prototype 添加新属性一定要放到赋值之后，不然原来添加的属性会被替换。
 * 《JavaScript高级程序设计》中对寄生组合式继承的评价是这样的：
 * 这种方式的高效率体现它只调用了一次 Parent 构造函数，
 * 并且因此避免了在 Parent.prototype 上面创建不必要的、
 * 多余的属性。与此同时，原型链还能保持不变；
 * 因此，还能够正常使用 instanceof 和 isPrototypeOf。
 * 开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。
 * @param name
 * @param age
 * @constructor
 */
function Child(name, age) {
    Parent.call(this, name, age);
    this.name = name;this.age = age;
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
Child.prototype = Object.create(Parent.prototype);
Child.prototype.getName = function() {
    console.log('child', this.name);
}
const child = new Child('tom', 23);
child.getName();
child.getAge();

