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

// test cases
asserArraysEqual(undefined, ["1", "2", 3]); // testing edge case 1
asserArraysEqual("le", ["1", "2"]); // comparing string of length 2 to array of length 2 (testing edge case 2)
asserArraysEqual(["1", "2", "3", "4"], ["1", "2", 3]);
asserArraysEqual(["1", "2", "3"], ["1", "2", 3]);
asserArraysEqual([1, 2, 3], [3, 2, 1]);
asserArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
asserArraysEqual([], []); // => should PASS
asserArraysEqual(["hello"], ["hello"]); // => should PASS
asserArraysEqual([1], [1]); // => should PASS
asserArraysEqual([1, "hello", 0, []], [1, "hello", 0, []]); // testing array as an element
asserArraysEqual([1, "hello", 0, [], [1, "hello", 3, []]], [1, "hello", 0, [], [1, "hello", 3, []]]); // the ultimate test for recursion