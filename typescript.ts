// Primitive Types
// string, nunber, boolean

// Explicit Type
// explicit type is when you explicitly declare the type of a variable using type annotations (The best practice is to use explicit types for better code readability and maintainability   )
// var userName: string = "hassan";
// var age: number = 30;
// var isMarried: boolean = false;
// console.log("User Name: " + userName + ", Age: " + age + ", Is Married: " + isMarried);

// Function with type annotations 
// function greet(name: string): string { // Function with type annotations
//     return "Hello, " + name + "!" // String interpolation 
// }   
// console.log(greet("John"));// Calling the function

// implicit Type or inference
// implicit type is when TypeScript infers the type of a variable based on the assigned value
var userName = "hassan"; // TypeScript infers the type as string
var age = 20; // TypeScript infers the type as number
var isMarried = false; // TypeScript infers the type as boolean
console.log("User Name: " + userName + ", Age: " + age + ", Is Married: " + isMarried);

// special types (any)
// any type can hold any value and bypasses type checking
 

    