// It should scan the object and return the first key which contains the given value.
// If no key with that given value is found, then it should return undefined.
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

module.exports = findKeyByValue;