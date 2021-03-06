// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let ans = true;
  const keys1 = Object.keys(object1); // array of keys for object1
  const keys2 = Object.keys(object2); // array of keys for object2
  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (const key of keys1) {
      const value1 = object1[key];
      const value2 = object2[key]; // same key in object 2
      if (!Array.isArray(value1) && !Array.isArray(value2)) { // value1 and value2 are not arrays
        if (typeof value1 === "object" && typeof value2 === "object") { // if they are both objects
          if (!eqObjects(value1, value2)) {
            return false;
          }
        }else { // they are both not arrays, and both not objects
          if (value1 !== value2) {
            return false;
          }
        }
      } else if (Array.isArray(value1) && Array.isArray(value2)) { // they are both arrays
        if (!eqArrays(value1, value2)) {
          return false;
        }
      } else { // they are different type
        return false;
      }
    }
  }
  return ans;
};

const eqArrays = function(arr1, arr2) {
  let ans = true;
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    ans = false;
    return ans;
  }

  if (arr1.length !== arr2.length) {
    ans = false;
    return ans;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!Array.isArray(arr1[i]) || !Array.isArray(arr2[i])) { // any of arr1[i] or arr2[i] is not an array
      if (arr1[i] !== arr2[i]) {
        ans = false;
        return ans;
      }
    } else { // they are both arrays
      ans = eqArrays(arr1[i], arr2[i]);
    }
  }
  return ans;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false