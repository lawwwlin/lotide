const tail = function(array) {
  let newArray = array.slice(1, array.length);
  return newArray;
};

module.exports = tail;
