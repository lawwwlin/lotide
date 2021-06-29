const letterPositions = function(sentence) {
  const results = {};
  let counter = 0;
  for (const s of sentence) {
    if (results[s]) {
      results[s].push(counter);
    } else {
      results[s] = [counter];
    }
    counter++;
  }
  return results;
};

module.exports = letterPositions;
