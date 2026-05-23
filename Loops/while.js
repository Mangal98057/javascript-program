let num=0
while(num<=6){
    console.log(num)
    num++;
    
}


//array using while loop
let arr = ["mangal","singh","seema"]
let arr2=0
while(arr2<arr.length){
    console.log(`value of ${arr[arr2]}`)
    arr2++
}


//object using while loop
let user={
    name:"mangal",
    age:14,
    email:"mangal12@gmail.co"
}
let keys = Object.keys(user)

let i = 0

while(i < keys.length){
    let key = keys[i]

    console.log(key + " : " + user[key])

    i++
}

