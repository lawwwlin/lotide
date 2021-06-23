const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1); // array of keys for object1
  const keys2 = Object.keys(object2); // array of keys for object2
  const val1 = Object.values(object1); // array of values for object1
  const val2 = Object.values(object2); // array of values for object2
  if (keys1.length !== keys2.length) {
    console.log("length doesn't match");
    return false;
  } else {
    for (let key of keys1) {
      if (object1.key.isArray) {
        console.log("array comparison");
        if (!eqArrays(object1.key, object2.key)) {
          console.log(object1.key, object2.key);
          return false;
        } else 
        console.log("none array comparison");
        if (object1.key !== object2.key){
          return false;
        }
      }
    }
    // for (let i = 0; i < keys1.length; i++) {
    //   if (val1[i].isArray) {
    //     console.log("array comparison");
    //     if (!eqArrays(val1[i], val2[keys2.indexOf(keys1[i])])) {
    //       console.log(val1[i], val2[keys2.indexOf(keys1[i])]);
    //       return false;
    //     } 
    //   } else {
    //     console.log("none array comparison");
    //     if (val1[i] !== val2[keys2.indexOf(keys1[i])]) {
    //     //if (val1[i] !== val2[keys2.indexOf(keys1[i])]) {
    //       console.log(val1[i], val2[keys2.indexOf(keys1[i])]);
    //       return false;
    //     }
    //   }
    // }
  }
    return true;
  };
  
  const findKeyByValue = function(obj, val) {
    let pos = 0;
    for (const v of Object.values(obj)) { // goes through each value of obj
      if (v === val) {
        return Object.keys(obj)[pos];
      }
      pos++;
    }
    return undefined;
  };
  
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
  
  // tests
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  assertEqual(eqObjects(ab, ba), true); // => true
  
  const abc = { a: "1", b: "2", c: "3" };
  assertEqual(eqObjects(ab, abc), false); // => false
  
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  assertEqual(eqObjects(cd, dc), true); // => true
  
  const cd2 = { c: "1", d: ["2", 3, 4] };
  assertEqual(eqObjects(cd, cd2), false); // => false
  