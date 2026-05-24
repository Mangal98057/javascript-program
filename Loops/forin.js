// const arr = ['mangal', 'seema', 'manish']

// let text = ""

// for (const x in arr) {
//     text += x + " "
//     console.log(text)
// }

// const num =[5,3,4,5,6,7]
// let str =""
// for(const x in num){
//     str += x + " "
//     console.log(str)
// }
// for in special use object 
const user={
    name:"mangal",
    email:"smangal123@gmail.com",
    num:37373626
}
for(const value in user){
    console.log(value+":"+user[value])
}