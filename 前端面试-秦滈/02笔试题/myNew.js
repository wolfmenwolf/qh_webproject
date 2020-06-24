function myNew() {
    const Constructor = arguments[0],
        args = [...arguments].slice(1), // arguments是类数组，因此需要转换为数组才能使用slice方法
        obj = {};
    Constructor.apply(obj, args);
// 设置[[Prototype]]指针（不推荐）
    obj.__proto__ = Constructor.prototype;
// 设置[[prototype]]指针（推荐）
    Object.setPrototypeOf(obj, Constructor.prototype);
    return obj;}


function Person(name, age) {
    this.name = name;
    this.age = age;}
    myNew(Person, 'tom', 23);
new Person('tom', 23);