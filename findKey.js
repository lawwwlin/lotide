const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (obj, callback) => {
  let key = "";
  const values = Object.values(obj);
  const valuesUntil = takeUntil(values, callback); // takeUntil will return the array BEFORE callback is true
  console.log(valuesUntil);
  const keyPos = valuesUntil.length; // so keyPos should be one index after
  key = Object.keys(obj)[keyPos];
  return key;
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
