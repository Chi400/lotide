const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};



function countLetters(string) {
  var result = {};
  // run for loop to initialize object with 'number' types
  for (var letter in string) {
    result[string[letter]] = 0;
  }
  // run loop second time to increment values
  for (var letter in string) {
    result[string[letter]]++;
  }
  // remove spaces
  delete result[" "];
  console.log(result);
}


countLetters("lighthouse in the house");



