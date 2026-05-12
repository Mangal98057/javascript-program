//singleton 
//present create constructor use is constructor 
const mySymble=Symbol("key1")
const user1 ={
    name:"mangal singh",
    age:20,
    email:"mangal123@gmail.com",
    isLogin:true,
    loginDays:["monday","sunday"],
    [mySymble]:"key1"
}
console.log(user1.name)//object print using key first option 
console.log(user1[mySymble])//symble print this 
//console.log(user1)//object print 
console.log(user1["name"])//object print using key second option 
user1.email="seema123@gmail.com"
Object.freeze(user1)//freeze object after no change object any 
user1.email="pooja123@gmail.com"
console.log(user1)
