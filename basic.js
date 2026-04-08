"use strict";
var stdName = "John Doe";
var stdAge = 25;
var isStudent = true;
console.log("Student Name: " + stdName + ", Age: " + stdAge + ", Is Student: " + isStudent);
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice"));
var userName = "hassan";
var age = 20;
var isMarried = false;
console.log("User Name: " + userName + ", Age: " + age + ", Is Married: " + isMarried);
var username = "hassan";
console.log("Username (string): " + username);
username = 10;
console.log("Username (number): " + username);
username = true;
console.log("Username (boolean): " + username);
var person = ["hassan", 20];
console.log("Name: " + person[0] + ", Age: " + person[1]);
var student = {
    name: "hassan",
    age: 20,
    isMarried: false
};
console.log("Student Name: " + student.name + ", Age: " + student.age + ", Is Married: " + student.isMarried);
