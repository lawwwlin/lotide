const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (obj, callback) => {
  const solKey = "";
  const keys = Object.keys(obj);
  const keysUntil = takeUntil(keys, callback);
  const keyPos = keysUntil.length - 1;
  solKey = Object.keys(obj)[keyPos];
  return solKey;
};

const takeUntil = (array, callback) => {
  const arr = [];
  for (const element of array) {
    if (!callback(element)) {
      arr.push(element)
    } else {
      break;
    }
  }
  return arr;
};


// tests
const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
assertEqual(result1, "noma");
