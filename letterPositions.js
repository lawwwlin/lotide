const eqArrays = function(arr1, arr2) {
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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[i]) {
      results[i].push(i);
    } else {
      results[i].push(undefined);
    }
  }
  return results;
};

//tests
const result1 = letterPositions("lighthouse in the house")
assertArraysEqual(result1["l"], [0]);
assertArraysEqual(result1["i"], [1, 11]);
assertArraysEqual(result1["g"], [2]);
assertArraysEqual(result1["h"], [3, 5, 15, 18]);
assertArraysEqual(result1["t"], [4, 14]);
assertArraysEqual(result1["o"], [6, 19]);
assertArraysEqual(result1["u"], [7, 20]);
assertArraysEqual(result1["s"], [8, 21]);
assertArraysEqual(result1["e"], [9, 16, 22]);
assertArraysEqual(result1["n"], [12]);
assertArraysEqual(result1["a"], []);

