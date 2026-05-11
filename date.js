const currentDate = new Date()  // date store object from 
console.log(typeof currentDate)
console.log(currentDate.toDateString())
console.log(currentDate.toString())
console.log(currentDate.toISOString())
console.log(currentDate.toLocaleDateString())
console.log(currentDate.toLocaleString())


//user set date manual
const userDate= new Date("03-01-1999")
console.log(typeof userDate.toLocaleDateString())//string 


