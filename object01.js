//singleton object
const instaUser= new Object();
console.log(instaUser)//object return 

//non singleton
const user1={}
console.log(user1)//object return

//nested object 
const user2={
    email:"mangal@123gmail.com",
    fullName:{
        firstName:"mangal",
        lastName:"singh",
        NickName:{
            fNickName:"mangalu",
            sNickName:"mangal panday"
        }
    },
    phone:9805442222
}
//console.log(user2)
// const obj1={a:1,b:2}
// const obj2={c:3,d:4}
// const obj3=Object.assign({},obj1,obj2)//no use this syntax 
// const obj4={...obj1,...obj2}//mostly user this syntax 
// console.log(obj3)//marge to object 
// console.log(obj4)

//console.log(Object.keys(user2))//store object to array
//console.log(Object.values(user2))//object value store array 
console.log(Object.entries(user2))
console.log(user2.hasOwnProperty("email"))//check the email true 
