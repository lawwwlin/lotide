const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1); // array of keys for object1
  const keys2 = Object.keys(object2); // array of keys for object2
  const val1 = Object.values(object1); // array of values for object1
  const val2 = Object.values(object2); // array of values for object2
  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (let i = 0; i < keys1.length; i++) {
      if (val1[i] !== val2[keys2.findIndex(keys1[i])]) {
        return false;
      }
    }
  }
  return true;
};

const findKeyByValue = function(obj, val) {
  let pos = 0;
  for (const v of Object.values(obj)) { // goes through each value of obj
    if (v === val) {
      return Object.keys(obj)[pos];
    }
    pos++;
  }
  return undefined;
};


// tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), true); // => false