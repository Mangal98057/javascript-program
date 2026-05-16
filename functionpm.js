function login (username){
    if(username===undefined){
        console.log('please enter username')
        return
    }
    return (`login sucessfully ${username}`)
}
console.log(login('mangal'))


//chart function use add any product

function addChartPrice(val1,val2,...num1){
    return num1
}
console.log(addChartPrice(100,200,300,400)) 
/*val1=100,
val2=200,
num1=[300,400]*/

//array with function 

const arr1=[200,300,400,500]
function callArray(anyarray){
      return anyarray[3]
}
console.log(callArray(arr1))


//object with function
const user={
    userName:"mangal singh",
    email:"mangal123@gmail.com"

}
function handleObject(anyobject){
    console.log(`my user name ${user.userName} and my email ${user.email}`)


}
handleObject()



//function expression
const add=function sum(x,y){
    return x+y
}
console.log(add(4,3))

const name=function(){
    console.log("mangal singh")
}
name()

