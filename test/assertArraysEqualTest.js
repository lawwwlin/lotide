const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(undefined, ["1", "2", 3]); // testing edge case 1
assertArraysEqual("le", ["1", "2"]); // comparing string of length 2 to array of length 2 (testing edge case 2)
assertArraysEqual(["1", "2", "3", "4"], ["1", "2", 3]); // fail
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // fail
assertArraysEqual([1, 2, 3], [3, 2, 1]); // fail
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([], []); // => should PASS
assertArraysEqual(["hello"], ["hello"]); // => should PASS
assertArraysEqual([1], [1]); // => should PASS
assertArraysEqual([1, "hello", 0, []], [1, "hello", 0, []]); // testing array as an element
assertArraysEqual([1, "hello", 0, [], [1, "hello", 3, []]], [1, "hello", 0, [], [1, "hello", 3, []]]); // the ultimate test for recursion