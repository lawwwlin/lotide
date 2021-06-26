//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
assertEqual(eqArrays([1, "hello", 0, [], [1, "hello", 3, []]], [1, "hello", 0, [], [1, "hello", 3, []]]), true); 
assertEqual(eqArrays([1, "hello", 0, [], [1, "hello", 3, [[1, [2, "no"], 3]]]], [1, "hello", 0, [], [1, "hello", 3, [1, [2], 3]]]), false);
const array1 = [[[[[[[[[1]]]]]]]]];
const array2 = [[[[[[[[["1"]]]]]]]]];
assertEqual(eqArrays(array1, array2), false);
const array3 = [[[[[[[[["are they equal"]]]]]]]]];
const array4 = [[[[[[[[["are they equal"]]]]]]]]];
assertEqual(eqArrays(array3, array4), true);

// object tests: stil can't compare objects
// const person1 = {name: "Alice", age: 20};
// const person2 = {name: "Bob", age: 20};
// const person3 = {name: "Alice", age: 21};
// const array5 = [person1, person2];
// const array6 = [person1, person3];
// assertEqual(eqArrays(array5, array6), false);
// assertEqual(eqArrays(array5, [{name: "Alice", age: 20}, {name: "Bob", age: 20}]), true);