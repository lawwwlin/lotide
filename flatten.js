const flattenArrays = function(arr) {
  let newArr = [];
    for (let ele of arr) {
      if (Array.isArray(ele)) {
        newArr = newArr.concat(flatten(ele));
      } else {
        newArr.push(ele);
      }
    }
  return newArr;
};

const flatten = function(arr) {
  let newArr = [];
  if (arr.length === 0) {
    newArr.push(undefined);
  } else if (arr.length === 1) {
    newArr = newArr.concat(arr); // add the only element of the array to newArr
  } else {
    newArr = newArr.concat(flattenArrays(arr));
  }
  return newArr;
};

module.exports = flatten;