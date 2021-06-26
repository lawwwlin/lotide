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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// tests
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

const results2 = map(words, word => word + 2);
console.log(results2);
assertArraysEqual(results2, ["ground2", "control2", "to2", "major2", "tom2"]);

const results3 = map(words, word => "");
console.log(results3);
assertArraysEqual(results3, ["", "", "", "", ""]);