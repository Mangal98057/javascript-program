const arr =[1,2,3,4]

const b=arr.length
const push=arr.push(5)
//const pop=arr.pop()
//const shift=arr.shift(2)
const index=arr.indexOf(4)//3
//const at=arr.at(1)//2
//const slice=arr.slice(1,2,3)//2
const map=arr.map((num)=>num*2)//[2,4,6,8,10]
const filter=arr.filter((num)=>num > 2)

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
