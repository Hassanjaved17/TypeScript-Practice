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
// // implicit type is when TypeScript infers the type of a variable based on the assigned value
// var userName = "hassan"; // TypeScript infers the type as string
// var age = 20; // TypeScript infers the type as number
// var isMarried = false; // TypeScript infers the type as boolean
// console.log("User Name: " + userName + ", Age: " + age + ", Is Married: " + isMarried);

// special types (any)
// any type can hold any value and bypasses type checking
//  var username: any = "hassan"; // Initially a string
//  console.log("Username (string): " + username);
//  username = 10;
//  console.log("Username (number): " + username);
//  username = true;
//  console.log("Username (boolean): " + username);

//  TypeScript Types (for objects)
// tuple type (used mostly with arrays) (fixed-length array with different types, order is important and length is fixed)
// A tuple is a fixed-length array where each element can have a different type. It allows you to group related values together and specify their types explicitly.

var person: [string, number] = ["hassan", 20]; // Tuple with a string and a number
console.log("Name: " + person[0] + ", Age: " + person[1]);

var uname: [string, number] = ["Albert", 30];
uname.push("Einstein"); // This will cause an error because the tuple is defined to have only two elements
console.log(uname); // This will cause an error because the tuple is defined to have only two elements


// enum type (mostly used with objects) (used to define a set of named constants, making code more readable and maintainable)
// An enum (short for "enumeration") is a way to define a set of named constants. It allows you to create a collection of related values that can be used in a more readable and maintainable way.
// enum Color {
//     Red, // 0
//     Green, // 1 
//     Blue // 2
// }
// var favoriteColor: Color = Color.Green;
// console.log("Favorite Color: " + favoriteColor);

// enum (set specific keys and values to the constants)
enum obj {
    s
}