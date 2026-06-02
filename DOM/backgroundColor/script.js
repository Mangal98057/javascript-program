const buttons=document.querySelectorAll('button')
const heading=document.querySelector('h1')
heading.style.color='purple'
const body=document.querySelector('body')
buttons.forEach(function(button){
    console.log(buttons)
    button.addEventListener("click",function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id ==='gray'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor='white'
        }
        if(e.target.id === 'black'){
            body.style.backgroundColor='black'
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor='red'
        }
    })

})