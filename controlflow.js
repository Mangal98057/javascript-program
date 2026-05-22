//if statement 

/*
| Operator | Meaning            |
| -------- | ------------------ |
| `==`     | Equal              |
| `===`    | Strict Equal       |
| `!=`     | Not Equal          |
| `!==`    | Strict Not Equal   |
| `>`      | Greater Than       |
| `<`      | Less Than          |
| `>=`     | Greater Than Equal |
| `<=`     | Less Than Equal    |
*/

// if(2==="2"){
//     console.log(true)
// }
// else {
//     console.log(false)
// }

// const age = 18

// if(age>17){
//     console.log('vote for')
// }
// else{
//     console.log('no vote')
// }

// const score=100
// if(score >50){
//     const power="fly"
//     console.log(`user power ,${power}`)
// }


//nested condition
// const price = 1200
// if(price>1100){
//     console.log("price greater 1100")
// }else if(price>1150){
//     console.log("price greater then 1150")
// }else if(price>400){
//     console.log('price greater then 400')
// }else if(price>1300){
//     console.log('price greter then 1300')
// }else{
//     console.log('price 1200')
// }

const userLogedIn=true
const userDebitCard=true
const userLoginEmail=true
const userLoginFromGoogle=false

if(userLogedIn && userDebitCard){
    console.log("buy course")
}
else if(userLoginEmail || userLoginFromGoogle){
    console.log('loged in user')
}
else{
    console.log("please register")
}
