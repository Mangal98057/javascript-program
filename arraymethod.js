const arr =[1,2,3,4]

const b=arr.length
const push=arr.push(5)
//const pop=arr.pop()
//const shift=arr.shift(2) //first remove element 
const index=arr.indexOf(4)//3
//const at=arr.at(1)//2
//const slice=arr.slice(1,2,3)//2
//const map=arr.map((num)=>num*2)//[2,4,6,8,10]
const filter=arr.filter((num)=>num > 2)
const map=arr.map((num)=>num+1)//[2,3,4,5,6] all arr add plus one
const include=arr.includes(5)//check value true and false
//const rev=arr.reverse()//arr reverse like [5,4,3,2,1]
//const splice=arr.splice(1,2,"mangal")//add string arr return value 4,3
const flat =arr.flat()
const find=arr.find((num)=>num ===2)
const newArray= arr.join()// join to convert object to string 

console.log(arr)
console.log(b)
console.log(push)
//console.log(shift)
//console.log(pop)
console.log(index)
//console.log(at)
//console.log(slice)
console.log(map)
console.log(filter)
console.log(include)
//console.log(rev)
//console.log(splice)
console.table(flat)
console.log(find)
console.log(newArray)
