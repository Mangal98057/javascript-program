let num = [1,2,3,4,5]

let initValue = 0;

// const sumWithinitValue = num.reduce((acc, curr) => {
    
//     console.log(`this acc: ${acc} this curr: ${curr}`)
    
//     return acc + curr

// }, initValue)

const sumWithinitValue=num.reduce((acc,curr)=>acc+curr)

console.log(`Total Sum: ${sumWithinitValue}`)