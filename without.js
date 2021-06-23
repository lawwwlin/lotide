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

const without = function(arr1, arr2) { // arr1 is source array, and arr2 is array of items to remove
  let arr = [];
  for (let i of arr1) {
    let sol = arr2.indexOf(i);
    if (sol === -1) {
      arr.push(i);
    }
  }
  return arr;
};



// test cases
const words = ["hello", "world", "lighthouse"];
const result1 = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(result1, ["hello", "world"]);

const arr2 = ["1", "2", "3"];
const result2 = without(arr2, [1, 2, "3"]);
assertArraysEqual(result2, ["1", "2"]);

const booleans = [true, false, true];
const result3 = without(booleans, [true]);
assertArraysEqual(result3, [false]);

const numbers = [1, 2, 3, 4, 5];
const result4 = without(numbers, []);
assertArraysEqual(result4, numbers);

const repeated = ["hello", "hello", "hello", "hello"];
const result5 = without(repeated, ["hello"]);
assertArraysEqual(result5, []);


