const assertEqual = require("../assertEqual");
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('eqArray', () => {
  it('should be false, given eqArrays(undefined, ["1", "2", 3])', () => {
    assert.deepEqual(eqArrays(undefined, ["1", "2", 3]), false);
  });
  it('should be false, given eqArrays("le", ["1", "2"])', () => {
    assert.deepEqual(eqArrays("le", ["1", "2"]), false);
  });
  it('should be false, given eqArrays(["1", "2", "3", "4"], ["1", "2", 3])', () => {
    assert.deepEqual(eqArrays(["1", "2", "3", "4"], ["1", "2", 3]), false);
  });
  it('should be false, given eqArrays(["1", "2", "3"], ["1", "2", 3])', () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
  it('should be false, given eqArrays([1, 2, 3], [3, 2, 1])', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it('should be true, given eqArrays([1, 2, 3], [1, 2, 3])', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it('should be true, given eqArrays([], [])', () => {
    assert.deepEqual(eqArrays([], []), true);
  });
  it('should be true, given eqArrays(["hello"], ["hello"])', () => {
    assert.deepEqual(eqArrays(["hello"], ["hello"]), true);
  });
  it('should be true, given eqArrays([1], [1])', () => {
    assert.deepEqual(eqArrays([1], [1]), true);
  });
  it('should be true, given eqArrays([1, "hello", 0, []], [1, "hello", 0, []])', () => {
    assert.deepEqual(eqArrays([1, "hello", 0, []], [1, "hello", 0, []]), true);
  });
  it('should be true, given eqArrays([1, "hello", 0, [], [1, "hello", 3, []]], [1, "hello", 0, [], [1, "hello", 3, []]])', () => {
    assert.deepEqual(eqArrays([1, "hello", 0, [], [1, "hello", 3, []]], [1, "hello", 0, [], [1, "hello", 3, []]]), true);
  });
  it('should be true, given eqArrays([1, "hello", 0, [], [1, "hello", 3, [[1, [2, "no"], 3]]]], [1, "hello", 0, [], [1, "hello", 3, [1, [2], 3]]])', () => {
    assert.deepEqual(eqArrays([1, "hello", 0, [], [1, "hello", 3, [[1, [2, "no"], 3]]]], [1, "hello", 0, [], [1, "hello", 3, [1, [2], 3]]]), false);
  });
  it('should be false, given eqArrays([[[[[[[[[1]]]]]]]]], [[[[[[[[["1"]]]]]]]]])', () => {
    const array1 = [[[[[[[[[1]]]]]]]]];
    const array2 = [[[[[[[[["1"]]]]]]]]];
    assert.deepEqual(eqArrays(array1, array2), false);
  });
  it('should be true, given eqArrays([[[[[[[[["are they equal"]]]]]]]]], [[[[[[[[["are they equal"]]]]]]]]])', () => {
    const array3 = [[[[[[[[["are they equal"]]]]]]]]];
    const array4 = [[[[[[[[["are they equal"]]]]]]]]];
    assert.deepEqual(eqArrays(array3, array4), true);
  });
  it('should be true, given eqArrays([[2, 3], [4]], [[2, 3], [4]])', () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
  it('should be false, given eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])', () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });
  it('should be false, given eqArrays([[2, 3], [4]], [[2, 3], 4])', () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });

});

// object tests: stil can't compare objects
// const person1 = {name: "Alice", age: 20};
// const person2 = {name: "Bob", age: 20};
// const person3 = {name: "Alice", age: 21};
// const array5 = [person1, person2];
// const array6 = [person1, person3];
// assertEqual(eqArrays(array5, array6), false);
// assertEqual(eqArrays(array5, [{name: "Alice", age: 20}, {name: "Bob", age: 20}]), true);