const flatten = require('../flatten');
const assert = require('chai').assert;

describe("flatten", () => {
  it("should be [1, 2, 3, 4, 5, 6], given [1, 2, [3, 4], 5, [6]]", () => {
    const result1 = flatten([1, 2, [3, 4], 5, [6]]);
    assert.deepEqual(result1, [1, 2, 3, 4, 5, 6]);
  });
  it('should be ["1", 2, 3, "4", 5, "6"], given ["1", 2, [3, "4"], 5, ["6"]]', () => {
    const result2 = flatten(["1", 2, [3, "4"], 5, ["6"]]);
    assert.deepEqual(result2, ["1", 2, 3, "4", 5, "6"]);
  });
  it('should be [undefined, 2, 3, "4", 5, 6, "7", true], given [[], 2, [3, ["4", 5]], 6, ["7", true]]', () => {
    const result3 = flatten([[], 2, [3, ["4", 5]], 6, ["7", true]]);
    assert.deepEqual(result3, [undefined, 2, 3, "4", 5, 6, "7", true]);
  });
  it('should be [1, "2", 3, "4", 5, undefined, 6, "7", true], given [1, "2", [3, ["4", [5, []]]], 6, ["7", true]]', () => {
    const result4 = flatten([1, "2", [3, ["4", [5, []]]], 6, ["7", true]]);
    assert.deepEqual(result4, [1, "2", 3, "4", 5, undefined, 6, "7", true]);
  });
  it("should be [undefined, undefined], given [[],[]]", () => {
    const result5 = flatten([[],[]]);
    assert.deepEqual(result5, [undefined, undefined]);
  });
});