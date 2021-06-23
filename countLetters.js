const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const results = {};
  for (const s of str) {
    console.log(s);
    if (str[s]) {
      if (results[s]) {
        results += 1;
      } else {
        results = 1;
      }
    }
  }
  return results;
};

// test
const result = countLetters("lighthouse in the house");
assertEqual(result["l"], 1);
assertEqual(result["i"], 2);
assertEqual(result["g"], 1);
assertEqual(result["h"], 4);
assertEqual(result["t"], 2);
assertEqual(result["o"], 2);
assertEqual(result["u"], 2);
assertEqual(result["s"], 2);
assertEqual(result["e"], 3);
assertEqual(result["n"], 1);
assertEqual(result["a"], undefined);