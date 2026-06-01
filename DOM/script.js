// //const { createElement } = require("react")

// //const heading = document.getElementsByClassName("heading").innerHTML="<h1>hello mangal</h1>"
// const week = document.querySelector('.parent')
// for (let index = 0; index < week.children.length; index++) {
//    console.log(week.children[index].innerHTML)
   
// }
// week.style.backgroundColor='blue'
// week.style.borderRadius='20px'
// week.style.margin='10px'
// week.style.fontSize='20px'
// const div=document.createElement('div')
// console.log(div)
// div.className='main'
// div.id=Math.round(Math.random()*10+1)
// div.setAttribute("title","mangal singh")
// div.style.backgroundColor="red"
// div.style.padding='12px'
// div.style.borderRadius='12px'
// //div.innerText = "box1"
// const addText=document.createTextNode("mangal box")
// div.appendChild(addText)
// document.body.appendChild(div)

function addLanguage(langName){
   const li=document.createElement('li')
   li.innerHTML=`${langName}`
   document.querySelector('.languages').appendChild(li)
}
addLanguage('python')
addLanguage('c')

function addOptiLanguage(langName){
   const li=document.createElement('li')
   li.appendChild(document.createTextNode(langName))
   document.querySelector('.languages').appendChild(li)
}
addOptiLanguage('javascript')
addOptiLanguage('php')
 
//edit
const secLang=document.querySelector('li:nth-child(2)')
const newLi=document.createElement('li')
newLi.textContent='c#'
secLang.replaceWith(newLi)

//new
const firstLang=document.querySelector('li:first-child')
firstLang.outerHTML='<li>typescript</li>'

//remove
const lastLang=document.querySelector('li:last-child')
lastLang.remove()





