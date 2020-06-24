/**
 * 多重继承是指一个子类同时继承多个父类，拥有这多个类的属性和方法。由于 JavaScript 的继承是基于原型链的，
 * 原型链一般只有一条链，无法同时指向多个不同的对象，因此 JavaScript 中是无法实现传统的多重继承。
 * 注意：原型链的一般实现是单链表，以 [[prototype]] 指针指向下一个对象，直到最终指向 null。
 * 但是可以让父类分别互相继承，子类继承最后那个父类来实现多重继承。
 * 这种实现方式的缺点就是要在每个父类定义的时候继承另一个父类。
 * class Parent1 extends Parent2 {}
 * class Parent2 extends Parent3 {}
 * class Child extends Parent1 {}
 * 另一种实现方式，就是我们前面提到过的 mixin ，
 * mixin 不仅在各大框架中被广泛使用，也可以将多个父类进行混合，
 * 从而实现多重继承的效果。
 * @param mixins
 * @returns {Mixin}
 */
function mixin(...mixins) {
    class Mixin {
        constructor(...args) {
            mixins.forEach(
                mixin => copyProperties(this, new mixin(...args)) // 拷贝实例属性
            )
        }
    }
    mixins.forEach(
        mixin => {
            copyProperties(Mixin, mixin); // 拷贝静态属性
            copyProperties(Mixin.prototype, mixin.prototype); // 拷贝原型属性
        }
    )

    return Mixin;}

function copyProperties(target, source) {
    for (let key of Reflect.ownKeys(source)) {
        if (['constructor', 'prototype', 'name'].indexOf(key) < 0) {
            let desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }}

class Child extends Mixin(Parent1, Parent2, Parent3) {

}