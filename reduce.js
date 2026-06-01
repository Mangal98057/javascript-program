let num = [1,2,3,4,5]

let initValue = 0;

// const sumWithinitValue = num.reduce((acc, curr) => {
    
//     console.log(`this acc: ${acc} this curr: ${curr}`)
    
//     return acc + curr

// }, initValue)

const sumWithinitValue=num.reduce((acc,curr)=>acc+curr)

console.log(`Total Sum: ${sumWithinitValue}`)


const books = [
    {
        name: "JavaScript Basics",
        price: 200
    },
    {
        name: "React Guide",
        price: 350
    },
    {
        name: "Node.js Mastery",
        price: 400
    },
    {
        name: "MongoDB Handbook",
        price: 250
    },
    {
        name: "HTML & CSS",
        price: 150
    },
    {
        name: "Python Essentials",
        price: 300
    },
    {
        name: "Data Structures",
        price: 500
    },
    {
        name: "Algorithms",
        price: 450
    },
    {
        name: "Web Development",
        price: 600
    },
    {
        name: "Full Stack MERN",
        price: 700
    }
]

const card=books.reduce((acc,items)=>acc+items.price,0)
console.log(card)