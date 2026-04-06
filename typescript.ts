// Primitive Types
// string, nunber, boolean

// var userName: string = "hassan";
// var age: number = 30;
// var isMarried: boolean = false;

// console.log("User Name: " + userName + ", Age: " + age + ", Is Married: " + isMarried);

function greet(name: string): string { // Function with type annotations
    return "Hello, " + name + "!" // String interpolation 
}   
console.log(greet("John"));// Calling the function
