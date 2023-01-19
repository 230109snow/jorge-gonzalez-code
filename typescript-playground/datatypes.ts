// TypeScript is a superset of JavaScript, meaning it is simply JavaScript
// but with added features such as type safety.

// This means our editor will warn us when we reassign a variable
// to a value of a different data type.

let lastName = "Gonzalez";

/*** lastName = 10; ***/

// If we run this file using node, it won't have any problem with it
// and will still assign lastName to 10
console.log(lastName);

// However, TypeScript comes with its own compiler called tsc
// and if we execute this file using tsc, it will give us an error

// This is because the benefit is to us as developers, not the browser


// ------------------------------------------------------------------------


// unknown is a special data type provided by TS to be used
// when we don't know a variable's data type ahead of time

let val: unknown; 
console.log(val);

val = true; // this is okay
console.log(val);

val = 7; // also okay
console.log(val);

val = "Revature"; // still okay
console.log(val);

val = [1, 2, 3, 4] // you get the idea
console.log(val);

val = { name: "rache" };
console.log(val);

val = Math.random();
console.log(val);

val = null;
console.log(val);

val = undefined;
console.log(val);

// ---------------------------------------------------------------------

// Type 'unknown' becomes 'undefined' in regular JavaScript
let a: unknown;
console.log(a);

// Since both a and a are type 'unknown' this is okay
let b: unknown;
b = a;

let num : number = 5;

// An unknown type variable can only be assigned to another
// unknown type variable; since num is type 'number', we cannot
// assign a to num

/*** num = a; ***/

// 'any' is a special type that disables type checking
let polyVar : any = 5;
polyVar = true;
polyVar = "hello";

// A variable declared as an 'unknown' can be assigned a value of any type
let c : unknown;
c = 5;
c = true;
c = "hello";


// Although a variable declared as an 'unknown' can be assigned any value,
// you cannot use it an expression like below. Therefore, it is a
// type-safe alternative to 'unknown'

/*** let result = c + 5; ***/

// This forces you to determine what a variable typed as 'unknown' is,
// either through type casting or type narrowing, i.e.
// moving from a less precise type to a more precise type

// A question mark before the type makes the parameter optional
/*** function greet(greeting?: string) ***/

// Since we're returning a string, we don't have to explicitly
// declare the return type of greet()

// We can set a default value for a parameter by assigning its value
// outright in the parentheses, but if you do pass an argument,
// the function will use the argument instead
function greet(greeting: string, name: string = "friend") {
  return `${greeting}, ${name}!`;
}

const message: string = greet("Howdy");

console.log(message);