const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1); // array of keys for object1
  const keys2 = Object.keys(object2); // array of keys for object2
  if (keys1.length !== keys2.length) {
    console.log("length doesn't match");
    return false;
  } else {
    for (let key of keys1) {
      const value1 = object1[key];
      const value2 = object2[key];
      console.log(value1, value2);
      if (Array.isArray(value1)) {
        console.log("array comparison");
        if (!eqArrays(value1, value2)) {
          console.log(value1, value2);
          return false;
        }
      } else {
        console.log("none array comparison");
        if (value1 !== value2) {
          return false;
        }
      }
    }
  }
  return true;
};

const eqArrays = function (arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!Array.isArray(arr1[i]) || !Array.isArray(arr2[i])) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    } else {
      eqArrays(arr1[i], arr2[i]);
    }
  }

  return true;
};

// tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
