let myNum =[1,2,3,4,5,6,7,8,9,10]
const newNum=myNum //chaining 
.map((num)=>num+10)
.map((num)=>num*10)
.map((num)=>num-2)
console.log(newNum)
// const num=[]
// myNum.forEach((value)=>
//     {
//         num.push(value+10)
//     })
// console.log(num)