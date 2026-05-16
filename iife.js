// =====================================
// IIFE = Immediately Invoked Function Expression
// Meaning:
// A function that runs immediately
// after it is created.
// =====================================



// =====================================
// 1. Normal IIFE
// =====================================

(function dB() {

    console.log(`database connected`);

})(); // semicolon important



// =====================================
// Explanation
// =====================================

// (function dB(){})
// → Function expression created

// () 
// → Immediately executes function

// Entire flow:
// Create function + Run immediately



// =====================================
// 2. Arrow Function IIFE
// =====================================

((name) => {

    console.log(`connected, ${name}`);

})('mangal singh');



// =====================================
// Output
// =====================================

// database connected
// connected, mangal singh



// =====================================
// 3. IIFE With Parameters
// =====================================

(function(user, course){

    console.log(`${user} learning ${course}`);

})("Mangal", "JavaScript");



// =====================================
// 4. Private Variables Inside IIFE
// =====================================

(function(){

    let secret = "hidden data";

    console.log(secret);

})();

// console.log(secret)
// ReferenceError
// because secret exists only inside IIFE



// =====================================
// Why Use IIFE?
// =====================================

// 1. Avoid global scope pollution
// 2. Execute code immediately
// 3. Create private variables
// 4. Initialization/setup code



// =====================================
// Important Rule
// =====================================

// Always use semicolon between multiple IIFEs

(function(){
    console.log("First IIFE");
})();

(function(){
    console.log("Second IIFE");
})();