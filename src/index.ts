console.log("hello");
//Numbers
let age: number = 10;

//Number representation in TS
let sales: number = 100_000_000 //_ used to separate out digits like , in 100,000,000

//Based on value, annotation is not needed
let is_completed: boolean = false;
//Without annotation
let is_done = false;

//Any
//Declare a variable but don't initialize its value
let x;
//Any type is not recommended

//Arrays
let nos = [1, 2, '3']; //works
let nums: number[] = [1, 2, 3]; //expects an array of numbers
let nums2 = [1, 2, 3]; //expects an array of numbers due to initialization

//Tuple
//Fixed length Array
let user: [number, string] = [1, 'John'];
//Tuple is ideal for array with 2 elements (key/value pairs)

//Enums (List of related constants)
//Use Pascal naming convention
enum Size { Small = 1, Medium, Large }; //Medium = 2, Large = 3 in enum initialization
let mySize: Size = Size.Medium; // mySize = 2

//Functions
function calculateTax(income: number): number {
  return income * 1.2;
}