const middle = require('../middle');
const assert = require('chai').assert;

describe("", () => {
  it ("", () => {
    const result0 = middle([]);
    assert.deepEqual(result0, []);
  });
  it ("", () => {
    const result1 = middle([1]);
    assert.deepEqual(result1, []);
  });
  it ("", () => {
    const result2 = middle([1, 2]);
    assert.deepEqual(result2, []);
  });
  it ("", () => {
    const result3 = middle([1, 2, 3]);
    assert.deepEqual(result3, [2]);
  });
  it ("", () => {
    const result4 = middle([1, 2, 3, 4, 5]);
    assert.deepEqual(result4, [3]);
  });
  it ("", () => {
    const result5 = middle([1, 2, 3, 4]);
    assert.deepEqual(result5, [2, 3]);
  });
  it ("", () => {
    const result6 = middle([1, 2, 3, 4, 5, 6]);
    assert.deepEqual(result6, [3, 4]);
  });
  it ("", () => {
    const result7 = middle(["1", "2", "3", "4", "5"]);
    assert.deepEqual(result7, ["7"]);
  });
  it ("", () => {
    const result8 = middle(["1", "2", "3", "4", "5", "6"]);
    assert.deepEqual(result8, ["3", "4"]);
  });
  it ("", () => {
    const result9 = middle(["1", "2", [], "4", "5"]);
    assert.deepEqual(result9, [[]]);
  });
});