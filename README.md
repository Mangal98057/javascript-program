# JavaScript Short Notes

## Table of Contents

1. Introduction
2. Variables
3. Data Types
4. Operators
5. Type Conversion
6. Conditional Statements
7. Loops
8. Functions
9. Arrow Functions
10. Arrays
11. Objects
12. DOM Basics
13. Events
14. ES6 Features
15. Asynchronous JavaScript
16. Classes
17. Error Handling
18. Local Storage
19. JSON
20. Important Interview Points

---

# 1. Introduction

JavaScript is a scripting language used to make web pages interactive.

### Uses

* Web Development
* Mobile Apps
* Backend Development
* Games
* APIs

---

# 2. Variables

Variables store data.

```javascript
var a = 10;
let b = 20;
const c = 30;
```

## Difference

| Keyword | Reassign | Redeclare | Scope    |
| ------- | -------- | --------- | -------- |
| var     | Yes      | Yes       | Function |
| let     | Yes      | No        | Block    |
| const   | No       | No        | Block    |

---

# 3. Data Types

## Primitive Types

```javascript
let name = "Mangal"; // String
let age = 22; // Number
let isLogin = true; // Boolean
let x = null; // Null
let y; // Undefined
let id = Symbol(); // Symbol
let big = 123n; // BigInt
```

## Non-Primitive

```javascript
let arr = [1,2,3];
let obj = {name:"Ram"};
```

---

# 4. Operators

## Arithmetic Operators

```javascript
+  -  *  /  %  **
```

## Comparison Operators

```javascript
==  ===  !=  !==  >  <
```

## Logical Operators

```javascript
&&  ||  !
```

## Assignment Operators

```javascript
+=  -=  *=  /=
```

---

# 5. Type Conversion

## Implicit Conversion

```javascript
"5" + 1 // "51"
```

## Explicit Conversion

```javascript
Number("5")
String(10)
Boolean(1)
```

---

# 6. Conditional Statements

## if Statement

```javascript
if(age >= 18){
   console.log("Adult");
}
```

## if else

```javascript
if(age >= 18){
   console.log("Adult");
}else{
   console.log("Minor");
}
```

## switch

```javascript
switch(day){
   case 1:
      console.log("Monday");
      break;
   default:
      console.log("Invalid");
}
```

## Ternary Operator

```javascript
age >= 18 ? "Adult" : "Minor";
```

---

# 7. Loops

## for Loop

```javascript
for(let i=0;i<5;i++){
   console.log(i);
}
```

## while Loop

```javascript
let i = 0;
while(i < 5){
   console.log(i);
   i++;
}
```

## do while

```javascript
do{
   console.log(i);
   i++;
}while(i < 5)
```

## for...of

```javascript
for(let value of arr){
   console.log(value);
}
```

## for...in

```javascript
for(let key in obj){
   console.log(key);
}
```

---

# 8. Functions

## Normal Function

```javascript
function add(a,b){
   return a+b;
}
```

## Function Expression

```javascript
const sum = function(a,b){
   return a+b;
}
```

## Callback Function

```javascript
function greet(name, callback){
   callback();
}
```

---

# 9. Arrow Functions

## Syntax

```javascript
const add = (a,b) => a+b;
```

## Single Parameter

```javascript
const greet = name => `Hello ${name}`;
```

## Multiple Lines

```javascript
const test = () => {
   let a = 5;
   return a;
}
```

---

# 10. Arrays

## Create Array

```javascript
let arr = [1,2,3];
```

## Common Methods

```javascript
arr.push(4)
arr.pop()
arr.shift()
arr.unshift(0)
arr.includes(2)
```

## map

```javascript
arr.map(value => value * 2)
```

## filter

```javascript
arr.filter(value => value > 2)
```

## reduce

```javascript
arr.reduce((a,b)=>a+b)
```

---

# 11. Objects

## Create Object

```javascript
const user = {
   name:"Mangal",
   age:22
}
```

## Access Values

```javascript
user.name
user["age"]
```

## Object Methods

```javascript
Object.keys(user)
Object.values(user)
```

---

# 12. DOM Basics

## Select Elements

```javascript
document.getElementById()
document.querySelector()
document.querySelectorAll()
```

## Change Content

```javascript
element.innerHTML = "Hello"
element.textContent = "Hi"
```

## Create Element

```javascript
const p = document.createElement("p")
```

---

# 13. Events

## Click Event

```javascript
button.addEventListener("click", ()=>{
   console.log("Clicked")
})
```

## Common Events

* click
* submit
* input
* keydown
* mouseover

---

# 14. ES6 Features

## Template Literals

```javascript
`Hello ${name}`
```

## Destructuring

```javascript
const {name, age} = user;
```

## Spread Operator

```javascript
const newArr = [...arr]
```

## Rest Operator

```javascript
function sum(...nums){
   return nums;
}
```

## Default Parameters

```javascript
function greet(name="Guest"){}
```

---

# 15. Asynchronous JavaScript

## setTimeout

```javascript
setTimeout(()=>{
   console.log("Hello")
},2000)
```

## Promise

```javascript
const promise = new Promise((resolve,reject)=>{
   resolve("Success")
})
```

## async await

```javascript
async function test(){
   const data = await fetch(url)
}
```

---

# 16. Classes

```javascript
class Person{
   constructor(name){
      this.name = name;
   }

   greet(){
      console.log(this.name)
   }
}
```

## Inheritance

```javascript
class Student extends Person{}
```

---

# 17. Error Handling

```javascript
try{
   console.log(a)
}catch(error){
   console.log(error)
}finally{
   console.log("Done")
}
```

---

# 18. Local Storage

## Store Data

```javascript
localStorage.setItem("name","Mangal")
```

## Get Data

```javascript
localStorage.getItem("name")
```

## Remove Data

```javascript
localStorage.removeItem("name")
```

---

# 19. JSON

## Convert Object to JSON

```javascript
JSON.stringify(obj)
```

## Convert JSON to Object

```javascript
JSON.parse(data)
```

---

# 20. Important Interview Points

## Difference Between == and ===

```javascript
5 == "5" // true
5 === "5" // false
```

## Hoisting

Variables and functions move to top during execution.

## Closures

A function remembers variables from outer scope.

## Scope Types

* Global Scope
* Function Scope
* Block Scope

## this Keyword

Refers to current object.

## Event Bubbling

Event moves from child to parent.

---

# Common Array Interview Questions

## Reverse Array

```javascript
arr.reverse()
```

## Find Duplicate

```javascript
const duplicate = arr.filter((item,index)=> arr.indexOf(item)!==index)
```

## Remove Duplicate

```javascript
const unique = [...new Set(arr)]
```

---

# Common String Questions

## Reverse String

```javascript
str.split("").reverse().join("")
```

## Palindrome

```javascript
str === str.split("").reverse().join("")
```

---

# Tips

* Practice daily
* Learn DOM properly
* Build projects
* Practice interview questions
* Understand async JavaScript deeply

---

# Best Practice

* Use `const` by default
* Use meaningful variable names
* Avoid global variables
* Write reusable functions
* Use strict equality `===`

---

# Conclusion

JavaScript is one of the most important programming languages for web development. Learn basics first, then DOM, ES6, async programming, and frameworks like React.
