const assert = require('chai').assert;
const tail = require('../tail');

describe("tail", () => {
  it ("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const arr1 = ["Yo Yo", "Lighthouse", "Labs"];
    const result1 = tail(arr1);
    assert.deepEqual(result1, ['Lighthouse', 'Labs']);
  });
  it ("returns [] for []", () => {
    const arr2 =  [];
    const result2 = tail(arr2);
    assert.deepEqual(result2, []);
  });
  it ("returns [] for [3]", () => {
    const arr3 = [3];
    const result3 = tail(arr3);
    assert.deepEqual(result3, []);
  });
  it ("returns [] for ['one element']", () => {
    const arr4 = ["one element"];
    const result4 = tail(arr4);
    assert.deepEqual(result4, []);
  });
});
