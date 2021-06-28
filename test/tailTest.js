const assertEqual = require('../assertEqual');
const tail = require('../tail');

const arr1 = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(arr1);
assertEqual(arr1[0], "Yo Yo");
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const arr2 =  [];
const result2 = tail(arr2);
assertEqual(result2.length, 0);
console.log("Tail function returns an array: " + Array.isArray(result2));
assertEqual(result2[0], undefined); // returns undefined for empty element

const arr3 = [3];
const result3 = tail(arr3);
assertEqual(result3.length, 0);
assertEqual(result3[0], undefined); // returns undefined for empty element

const arr4 = ["one element"];
const result4 = tail(arr4);
assertEqual(result4.length, 0);
assertEqual(result4[0], undefined); // returns undefined for empty element