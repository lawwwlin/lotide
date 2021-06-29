const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe("countOnly", () => {
  it('should be {Jason: 1, Fang: 2}, given { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    const expected = {Jason: 1, Fang: 2};
    assert.deepEqual(result1, expected);
  });
});
