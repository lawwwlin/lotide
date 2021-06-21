const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let newArray = array.slice(1, array.length);
  return newArray;
}

// tests
const arr1 = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(arr1);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const arr2 =  [];
const result2 = tail(arr2);
assertEqual(result2.length, 0);
console.log("Tail function returns an array: " + result2.isArray());

const arr3 =  [3];
const result3 = tail(arr2);
assertEqual(result3.length, 0);
assertEqual(result3[0], undefined);
