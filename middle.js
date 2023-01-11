// const eqArrays = (a, b) =>
//   a.length === b.length &&
//   a.every((v, i) => v === b[i]);

// const a = [1, 2, 3];
// const b = [1, 2, 3];
// const str = 'a';
// const strObj = new String('a');


// const assertArraysEqual = function(arr1, arr2, expected) {
//   let actual = eqArrays(arr1,arr2)
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//     return true
//   } else if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//     return false
//   }
// };

// assertArraysEqual([1, 2, 3], [1, 2, 3], true);
// assertArraysEqual([1, 2, 3], [1, 4, 3], false);


const middle = function(arr1) {
  let mid = [];
    if (arr1.length <= 2) {
    } 
    else if (arr1.length % 2 === 0) {
      mid.push(arr1[((arr1.length / 2) - 1)], arr1[(arr1.length / 2)])
    } 
    else {
      mid.push(arr1[((arr1.length - 1) / 2)])
    }
  console.log(mid);
}




middle([1]) // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]