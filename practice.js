"use strict";
// ex : 01
let name = "Hassan";
let batch = 18;
let isHired = true;
console.log("Name: " + name);
console.log("Batch: " + batch);
console.log("Is Hired: " + isHired);
// ex : 02
let city = "Las Vegas";
city = 5;
// err // Type 'number' is not assignable to type 'string'.
// ex : 03
function multiply(a, b) {
    return a * b;
}
// err // Argument of type 'string' is not assignable to parameter of type 'number'.
// ex : 04
function greet(name) {
    return "Hello " + !;
}
// err // Argument of type 'number' is not assignable to parameter of type 'string'.
// ex : 05
let skills = ["JavaScript", "TypeScript", "Python"];
let marks = [85, 90, 95];
marks.push("JavaScript");
