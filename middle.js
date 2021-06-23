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

const asserArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function returns the middle element(s) of the array
const middle = function(array) {
  let mid = [];
    
  return mid;
}

// TEST CODE
const result1 = middle([1]);
asserArraysEqual(result1, []);

const result2 = middle([1, 2]);
asserArraysEqual(result2, []);

const result3 = middle([1, 2, 3]);
asserArraysEqual(result3, [2]);

const result4 = middle([1, 2, 3, 4, 5]);
asserArraysEqual(result4, [3]);

const result5 = middle([1, 2, 3, 4]);
asserArraysEqual(result5, [2, 3]);

const result6 = middle([1, 2, 3, 4, 5, 6]);
asserArraysEqual(result6, [3, 4]);
