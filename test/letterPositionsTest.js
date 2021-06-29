const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

//tests
const result = letterPositions("lighthouse in the house");
const expected = {l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], ' ': [ 10, 13, 17 ], n: [12]}
describe("letterPositions", () => {
  it("should be {l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], ' ': [ 10, 13, 17 ], n: [12]}, given 'lighthouse in the house'", () => {
    assert.deepEqual(result, expected);
  });
});