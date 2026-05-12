const arr1 = [1,2,3,4,5]
console.log(arr1)
const arr2 = [...arr1,[6,7,8,9]]//three dot is called spread operator 
console.log(arr2)//[1,2,3,4,5,[6,7,8,9]]
const arr3 = arr2.flat(Infinity)//2 array marge flat
console.log(arr3)//[1,2,3,4,5,6,7,8,9]
console.log(Array.isArray("mangal"))//false
console.log(Array.from("mangal"))//convert array all value(string) ["m","a","n","g","a","l"]
console.log(Array.from({name:"mangal"}))//interesting case black array

