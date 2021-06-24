const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (obj, callback) => {
  let solKey = "";
  const keys = Object.keys(obj);
  const keysUntil = takeUntil(keys, callback); // takeUntil will return the array BEFORE callback is true
  console.log(keysUntil);
  const keyPos = keysUntil.length; // so keyPos should be one index after
  solKey = Object.keys(obj)[keyPos];
  return solKey;
};

const takeUntil = (array, callback) => {
  const arr = [];
  loopPushUntil(array, arr, callback);
  return arr;
};

const loopPushUntil = (array, arrToPush, callback) => {
  for (const element of array) {
    if (callback(element)) {
      break;
    } else {
      arrToPush.push(element);
    }
  }
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
