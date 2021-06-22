//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match. 
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }

  if (arr1.length != arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!Array.isArray(arr1[i]) || !Array.isArray(arr2[i])){
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    } 
    else {
      eqArrays(arr1[i], arr2[i]);
    }
  }

  return true;
};

// test cases
console.log("This should be false: " + eqArrays(undefined, ["1", "2", 3])); // testing edge case 1
console.log("This should be false: " + eqArrays("le", ["1", "2"])); // comparing string of length 2 to array of length 2 (testing edge case 2)
console.log("This should be false: " + eqArrays(["1", "2", "3", "4"], ["1", "2", 3]));
console.log("This should be false: " + eqArrays(["1", "2", "3"], ["1", "2", 3]));
console.log("This should be false: " + eqArrays([1, 2, 3], [3, 2, 1]));
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([], []), true); // => should PASS
assertEqual(eqArrays(["hello"], ["hello"]), true); // => should PASS
assertEqual(eqArrays([1], [1]), true); // => should PASS
assertEqual(eqArrays([1, "hello", 0, []], [1, "hello", 0, []]), true); // testing array as an element
assertEqual(eqArrays([1, "hello", 0, [], [1, "hello", 3, []]], [1, "hello", 0, [], [1, "hello", 3, []]]), true); // the ultimate test for recursion 