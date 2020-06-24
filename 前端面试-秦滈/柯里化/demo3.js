var match = curry(function(what, str) {
    return str.match(what);});

match(/\s+/g, "hello world");// [ ' ' ]

match(/\s+/g)("hello world");// [ ' ' ]

var hasSpaces = match(/\s+/g);// function(x) { return x.match(/\s+/g) }

hasSpaces("hello world");// [ ' ' ]

hasSpaces("spaceless");// null