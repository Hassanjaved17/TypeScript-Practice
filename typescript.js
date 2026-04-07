"use strict";
// Primitive Types
// string, nunber, boolean
// Explicit Type
// var userName: string = "hassan";
// var age: number = 30;
// var isMarried: boolean = false;
// console.log("User Name: " + userName + ", Age: " + age + ", Is Married: " + isMarried);
// function greet(name: string): string { // Function with type annotations
//     return "Hello, " + name + "!" // String interpolation 
// }   
// console.log(greet("John"));// Calling the function
// implicit Type or inference
var userName = "hassan"; // TypeScript infers the type as string
var age = 20; // TypeScript infers the type as number
var isMarried = false; // TypeScript infers the type as boolean
console.log("User Name: " + userName + ", Age: " + age + ", Is Married: " + isMarried);
