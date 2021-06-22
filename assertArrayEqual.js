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

const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// test cases
assertArrayEqual(undefined, ["1", "2", 3]); // testing edge case 1
assertArrayEqual("le", ["1", "2"]); // comparing string of length 2 to array of length 2 (testing edge case 2)
assertArrayEqual(["1", "2", "3", "4"], ["1", "2", 3]);
assertArrayEqual(["1", "2", "3"], ["1", "2", 3]);
assertArrayEqual([1, 2, 3], [3, 2, 1]);
assertArrayEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArrayEqual([], []); // => should PASS
assertArrayEqual(["hello"], ["hello"]); // => should PASS
assertArrayEqual([1], [1]); // => should PASS
assertArrayEqual([1, "hello", 0, []], [1, "hello", 0, []]); // testing array as an element
assertArrayEqual([1, "hello", 0, [], [1, "hello", 3, []]], [1, "hello", 0, [], [1, "hello", 3, []]]); // the ultimate test for recursion