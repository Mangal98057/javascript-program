"use strict"; //javascript code new version use only
//alert("hello")// we are using node js,not browsers

//data types in javascript
/*data types define what kind of value of variale can stroe.*/

//primitive datatypes 
// call by value
//(stored by value)

let name="mangal"//string
console.log(typeof name)
//string can use "" ,'',``(template literals)

let age =21 //number
console.log(typeof age)

//for very large numbers use BigInt 
let big = 11132334555335533n
console.log(typeof big)

//boolean (true/false)
 let useLogin =true
 console.log(typeof useLogin)

 // underfined declared but not assigned
 let x;
 console.log(x)

 //Null intentional empty value
 let data=null;
 console.log(data)

 //undefined -> value not assigned 
 //null -> value intentionally empty

 //symbol unique identifier 
 let id =Symbol("id")
 console.log(id)


 //Non Premitive (reference type)
 //object stores multiple values
 let user={
    name:"mangal singh",
    age: 21
 }
 console.log(user)

 //Array (special object)
 let arr= [1,2,3]
 console.log(arr)

 //Function 
//  function name(){
//     return "mangal"
//  }
 //typeof operator
 //typeof null === "object" ? it is a javascript bug legacy issue

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack memory (premetive type)

//heap memory (non-premetive type)

let myName="mangal"  //this is stack create a prototype
let Name=myName
console.log(Name)


let user1={         
   email:"smangal@gmail.com"    

}
let user2={
   email:"seema@12gmail.com"
}
console.log(user1)
console.log(user2)