//arrow function provide a concise way to write function expressions.
const greet = name => `hello ${name}`;
console.log(greet("mangal"))


const add =(a,b)=>(a+b)
console.log(add(3,4))


//greet function refrence 
//greet() function execution 

const obj ={
    userName:"mangal singh",
    email:"mangal123@gmail.com",
    phone:4322323553,
    welcome:function(){
        console.log(`welcome my new function ,${this.userName}`)
    }
    
}
obj.welcome()
obj.userName="sam"
obj.welcome()