

// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let value = 0; value < array1.length; value += 1) {
//     if ((Array.isArray(array1[value]) || Array.isArray(array2[value])) && eqArrays(array1[value], array2[value]) === false) {
//       return false;
//     } else if (Array.isArray(array1[value]) || Array.isArray(array2[value])) {
//       eqArrays(array1[value], array2[value]);
//     } else if (array1[value] !== array2[value]) {
//       return false;
//     }
//   }
//   return true;
// };

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




const letterPositions = function(sentence) {
  // logic to update results here
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      // skipping spaces
      continue;
    }
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  // console.log(results); test to see what the array is
  console.log(results);
};



letterPositions("lighthouse in the house");


letterPositions("hello");