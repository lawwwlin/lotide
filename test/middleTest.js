const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

const result0 = middle([]);
assertArraysEqual(result0, []);

const result1 = middle([1]);
assertArraysEqual(result1, []);

const result2 = middle([1, 2]);
assertArraysEqual(result2, []);

const result3 = middle([1, 2, 3]);
assertArraysEqual(result3, [2]);

const result4 = middle([1, 2, 3, 4, 5]);
assertArraysEqual(result4, [3]);

const result5 = middle([1, 2, 3, 4]);
assertArraysEqual(result5, [2, 3]);

const result6 = middle([1, 2, 3, 4, 5, 6]);
assertArraysEqual(result6, [3, 4]);

const result7 = middle(["1", "2", "3", "4", "5"]);
assertArraysEqual(result7, ["3"]);

const result8 = middle(["1", "2", "3", "4", "5", "6"]);
assertArraysEqual(result8, ["3", "4"]);

const result9 = middle(["1", "2", [], "4", "5"]);
assertArraysEqual(result9, [[]]);