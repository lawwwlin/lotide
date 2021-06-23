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

// Given an array with other arrays inside, it can flatten it into a single-level array.

const flattenArrays = function(arr) {
  let newArr = [];
    for (let ele of arr) {
      if (Array.isArray(ele)) {
        newArr = newArr.concat(flatten(ele));
      } else {
        newArr.push(ele);
      }
    }
  return newArr;
};

const flatten = function(arr) {
  let newArr = [];
  if (arr.length <= 1) {
    newArr = newArr.concat(arr); // add the only element of the array to newArr
  } else {
    newArr = newArr.concat(flattenArrays(arr));
  }
  return newArr;
};


// test cases
const result = flatten([1, 2, [3, 4], 5, [6]]);
asserArraysEqual(result, [1, 2, 3, 4, 5, 6]);
console.log(result.length, [1, 2, 3, 4, 5, 6].length);