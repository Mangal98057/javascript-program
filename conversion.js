// what is conversion 
//changing data from one type of to another
let score ="mangal"
let stringToNumber=Number(score)
console.log(stringToNumber)//NaN
console.log(typeof score)//print string

//types of conversion 
// 1. explicit conversion (manual)
//you convert the type yourself

//string conversion

let num = 10;
let numToString=String(num)//"10" string 
//num.toString()
console.log(typeof numToString)

//Number conversion 
let number = "123"
let stringToNum= Number(number)
console.log( typeof stringToNum)

// Boolean conversion 
let str="mangal"
let stringToBool=Boolean(str)//true
console.log(stringToBool)//true

//2. implicit conversion 
//javascript automatically converts types 
//Explicit conversion means manually converting one data type into another.You control the conversion using built-in methods.

//string to number with check type
let str1 = "100";

let num1 = Number(str1);

console.log(num1);//100
console.log(typeof num1);//number


//number to string with check type
let num3 = 50;

let str3 = String(num3);

console.log(str3);//"50"
console.log(typeof str3);//string