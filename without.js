const eqArrays = (a, b) =>
  a.length === b.length &&
  a.every((v, i) => v === b[i]);

const a = [1, 2, 3];
const b = [1, 2, 3];
const str = 'a';
const strObj = new String('a');


const assertArraysEqual = function(arr1, arr2, expected) {
  let actual = eqArrays(arr1,arr2)
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return false
  }
};


const without = function (source, exclude) {
  newArr = [];
  for (let i = 0; i < source.length; i++) {
    if (!exclude.includes(source[i])) {
      newArr.push(source[i]);
    }
  }
  return newArr;
};


console.log(without([1, 2, 3], [1]))
console.log(without(["1", "2", "3"], [1, 2, "3"]))
