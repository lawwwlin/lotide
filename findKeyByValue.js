const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// It should scan the object and return the first key which contains the given value. 
// If no key with that given value is found, then it should return undefined.
const findKeyByValue = function(obj, val) {
  let pos = 0;
  for (const v of Object.values(obj)) { // goes through each value of obj
    if (v === val) {
      return obj[pos];
    }
    pos++;
  }
  return undefined;
}



// tests
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
