
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// const eqArrays = function(arr1, arr2) {
//   for (i = 0, i < arr1.length, i++) {
//     console.log(arr[i]);
//   }
  
// }

const eqArrays = (a, b) =>
  a.length === b.length &&
  a.every((v, i) => v === b[i]);

const a = [1, 2, 3];
const b = [1, 2, 3];
const str = 'a';
const strObj = new String('a');



//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true);// => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false