"use strict";
console.log("hello");
//Numbers
let age = 10;
//Number representation in TS
let sales = 100000000; //_ used to separate out digits like , in 100,000,000
//Based on value, annotation is not needed
let is_completed = false;
//Without annotation
let is_done = false;
//Any
//Declare a variable but don't initialize its value
let x;
//Any type is not recommended
//Arrays
let nos = [1, 2, '3']; //works
let nums = [1, 2, 3]; //expects an array of numbers
let nums2 = [1, 2, 3]; //expects an array of numbers due to initialization
//Tuple
//Fixed length Array
let user = [1, 'John'];
//Tuple is ideal for array with 2 elements (key/value pairs)
