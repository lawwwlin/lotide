// Given an array with other arrays inside, it can flatten it into a single-level array.
// Empty array will hold the value of undefined
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
  if (arr.length === 0) {
    newArr.push(undefined);
  } else if (arr.length === 1) {
    newArr = newArr.concat(arr); // add the only element of the array to newArr
  } else {
    newArr = newArr.concat(flattenArrays(arr));
  }
  return newArr;
};


// test cases
const result = flatten([1, 2, [3, 4], 5, [6]]);
assertArraysEqual(result, [1, 2, 3, 4, 5, 6]);
console.log(result.length, 6);

const result2 = flatten(["1", 2, [3, "4"], 5, ["6"]]);
assertArraysEqual(result2, ["1", 2, 3, "4", 5, "6"]);
console.log(result2.length, 6);

const result3 = flatten([[], 2, [3, ["4", 5]], 6, ["7", true]]);
assertArraysEqual(result3, [undefined, 2, 3, "4", 5, 6, "7", true]);
console.log(result3.length, ["", 2, 3, "4", 5, 6, "7", true].length);

const result4 = flatten([1, "2", [3, ["4", [5, []]]], 6, ["7", true]]);
assertArraysEqual(result4, [1, "2", 3, "4", 5, undefined, 6, "7", true]);
console.log(result4.length, [1, "2", 3, "4", 5, [], 6, "7", true].length);

const result5 = flatten([[],[]]);
assertArraysEqual(result5, [undefined, undefined]);
console.log(result5.length, 2);