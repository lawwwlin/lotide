const eqArrays = require("./eqArrays");
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let ans = true;
  const keys1 = Object.keys(object1); // array of keys for object1
  const keys2 = Object.keys(object2); // array of keys for object2
  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (const key of keys1) {
      const value1 = object1[key];
      const value2 = object2[key]; // same key in object 2
      if (!Array.isArray(value1) && !Array.isArray(value2)) { // value1 and value2 are not arrays
        if (typeof value1 === "object" && typeof value2 === "object") { // if they are both objects
          if (!eqObjects(value1, value2)) {
            return false;
          }
        }else { // they are both not arrays, and both not objects
          if (value1 !== value2) {
            return false;
          }
        }
      } else if (Array.isArray(value1) && Array.isArray(value2)) { // they are both arrays
        if (!eqArrays(value1, value2)) {
          return false;
        }
      } else { // they are different type
        return false;
      }
    }
  }
  return ans;
};

module.exports = eqObjects;