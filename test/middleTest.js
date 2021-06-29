const middle = require('../middle');
const assert = require('chai').assert;

describe("", () => {
  it ("should be [], given []", () => {
    const result0 = middle([]);
    assert.deepEqual(result0, []);
  });
  it ("should be [], given [1]", () => {
    const result1 = middle([1]);
    assert.deepEqual(result1, []);
  });
  it ("should be [], given [1, 2]", () => {
    const result2 = middle([1, 2]);
    assert.deepEqual(result2, []);
  });
  it ("should be [2], given [1, 2, 3]", () => {
    const result3 = middle([1, 2, 3]);
    assert.deepEqual(result3, [2]);
  });
  it ("should be [3], given [1, 2, 3, 4, 5]", () => {
    const result4 = middle([1, 2, 3, 4, 5]);
    assert.deepEqual(result4, [3]);
  });
  it ("should be [2, 3], given [1, 2, 3, 4]", () => {
    const result5 = middle([1, 2, 3, 4]);
    assert.deepEqual(result5, [2, 3]);
  });
  it ("should be [3, 4], given [1, 2, 3, 4, 5, 6]", () => {
    const result6 = middle([1, 2, 3, 4, 5, 6]);
    assert.deepEqual(result6, [3, 4]);
  });
  it ("should be ['3'], given ['1', '2', '3', '4', '5']", () => {
    const result7 = middle(["1", "2", "3", "4", "5"]);
    assert.deepEqual(result7, ["3"]);
  });
  it ("should be ['3', '4', given ['1', '2', '3', '4', '5', '6']", () => {
    const result8 = middle(["1", "2", "3", "4", "5", "6"]);
    assert.deepEqual(result8, ["3", "4"]);
  });
  it ('should be [[]], given ["1", "2", [], "4", "5"]', () => {
    const result9 = middle(["1", "2", [], "4", "5"]);
    assert.deepEqual(result9, [[]]);
  });
});