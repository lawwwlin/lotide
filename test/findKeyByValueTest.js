const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe('findKeyByValue', () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire",
    random: "The Expanse"
  };
  it('should be "drama", given "The Wire"', () => {
    result1 = findKeyByValue(bestTVShowsByGenre, "The Wire");
    assert.strictEqual(result1, 'drama');
  });
  it('should be undefined, given "That \'70s Show"', () => {
    result2 = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    assert.strictEqual(result2, undefined);
  });
  it('should be "sci_fi", given "The Expanse"', () => {
    result3 = findKeyByValue(bestTVShowsByGenre, "The Expanse");
    assert.strictEqual(result3, 'sci_fi');
  });
});
