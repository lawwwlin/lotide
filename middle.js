// Function returns the middle element(s) of the array
const middle = function(array) {
  let midArray = [];
  const checkedArr = checkMid(array.length);
  midArray = accessCheck(checkedArr, array);
  return midArray;
};

const checkMid = function(length) {
  let mid = [];
  if (length <= 2) {
    return mid;
  } else if (oddChecker(length)) {   // odd
    mid.push(Math.floor(length / 2));
  } else {                           // even
    mid.push((length / 2) - 1);
    mid.push(length / 2);
  }
  return mid;
};

const oddChecker = (n) => n % 2 === 1;

const accessCheck = function(checkedArr, arrayToReturn) {
  let array = [];
  for (let i of checkedArr) {
    array.push(arrayToReturn[i]);
  }
  return array;
};

module.exports = middle;