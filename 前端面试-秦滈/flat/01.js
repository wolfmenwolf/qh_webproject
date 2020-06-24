

/**
 *01
 */
let ary01 = str.replace(/(\[\]\))/g, '').split(',');
console.log("ary",ary01);
/**
 * 02
 */
str = str.replace(/(\[\])\)/g, '');
str = '[' + str + ']';
let ary02 = JSON.parse(str);
console.log("ary02",ary02);

/**
 * 03
 */
let result = [];
let fn = function(ary) {
  for(let i = 0; i < ary.length; i++) {
  let item = ary[i];
  if (Array.isArray(ary[i])){
    fn(item);
  } else {
    result.push(item);
  }
}
};

fn(ary);
console.log("03ary",result);
/**
 * 04
 */

function flatten(ary) {
  return ary.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  })
};
let ary = [1, 2, [3, 4], [5, [6, 7]]];
console.log(ary.MyFlat(Infinity));

/**
 * 05
 */

while (ary.some(Array.isArray)) {
  ary = [].concat(...ary);
}

