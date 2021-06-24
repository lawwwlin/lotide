const map = (array, callback) => {
  // temporary code:
  console.log('array: ', array);
  console.log('callback: ', callback);

  const results = [];
  return results;
}

// tests
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
