const eqObjects = require('../eqObjects');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe('eqObjects', () => {
  it('should be true, given { a: "1", b: "2" } and { b: "2", a: "1" }', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  it('should be false, given { a: "1", b: "2" } and { a: "1", b: "2", c: "3" }', () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.strictEqual(eqObjects(ab, abc), false);
  });
  it('should be true, given { c: "1", d: ["2", 3] } and { d: ["2", 3], c: "1" }', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.strictEqual(eqObjects(cd, dc), true);
  });
  it('should be false, given { c: "1", d: ["2", 3] } and { c: "1", d: ["2", 3, 4] }', () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.strictEqual(eqObjects(cd, cd2), false);
  });
  it('should be true, given { a: ["1", 2, true], b: "2" } and { b: "2", a: ["1", 2, true] }', () => {
    const ab2 = { a: ["1", 2, true], b: "2" };
    const ba2 = { b: "2", a: ["1", 2, true] };
    assert.strictEqual(eqObjects(ab2, ba2), true);
  });
  it('should be false, given { a: ["1", 2, false], b: "2" } and { b: "2", a: ["1", 2, true] }', () => {
    const ab3 = { a: ["1", 2, false], b: "2" };
    const ba3 = { b: "2", a: ["1", 2, true] };
    assert.strictEqual(eqObjects(ab3, ba3), false);
  });
  it('should be true, given eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })', () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it('should be false, given eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })', () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  it('should be false, given eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })', () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });
  it('should be false, given eqObjects({ a: { y: { y: { y: 0, z: 2 }, z: 1 }, z: 1 }, b: 2 }, { a: { y: { y: { y: 0, z: 1 }, z: 1 }, z: 1 }, b: 2 })', () => {
    assert.strictEqual(eqObjects({ a: { y: { y: { y: 0, z: 2 }, z: 1 }, z: 1 }, b: 2 }, { a: { y: { y: { y: 0, z: 1 }, z: 1 }, z: 1 }, b: 2 }), false);
  });
  it('should be false, given eqObjects({ a: { y: { y: { y: 0, z: "1" }, z: 1 }, z: 1 }, b: 2 }, { a: { y: { y: { y: 0, z: "2" }, z: 1 }, z: 1 }, b: 2 })', () => {
    assert.strictEqual(eqObjects({ a: { y: { y: { y: 0, z: "1" }, z: 1 }, z: 1 }, b: 2 }, { a: { y: { y: { y: 0, z: "2" }, z: 1 }, z: 1 }, b: 2 }), false);
  });

});
