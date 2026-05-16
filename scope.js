// ==========================
// 1. Global Scope
// ==========================

// A variable declared outside all functions or blocks
// is called a global variable.

let username = "mangal12";

// Global variables can be accessed anywhere.

function global() {

    console.log(`function outer: ${username}`);

    function innerShow() {
        console.log(`function inner: ${username}`);
    }

    innerShow();
}

global();



// ==========================
// 2. Function Scope
// ==========================

// Variables declared inside a function
// can only be used inside that function.

function demo() {

    let age = 20;

    console.log(age);
}

demo();

// console.log(age);
// ReferenceError: age is not defined



// ==========================
// 3. Block Scope
// ==========================

// Variables declared with let and const
// are block scoped.

{
    let email = "mangal123@gmail.com";

    console.log(email);
}

// console.log(email);
// ReferenceError: email is not defined



// ==========================
// 4. Lexical Scope
// ==========================

// Inner functions can access variables
// from outer functions.

function outer() {

    let name = "seema";

    function inner() {
        console.log(name);
    }

    inner();
}

outer();



// ==========================
// 5. Scope Chain
// ==========================

// JavaScript searches variables
// from inside scope to outside scope.

let globalName = "global";

function outerFunction() {

    let outerVar = "outer";

    function innerFunction() {

        let innerVar = "inner";

        console.log(innerVar);

        console.log(outerVar);

        console.log(globalName);

        // OR

        console.log({ globalName });
    }

    innerFunction();
}

outerFunction();