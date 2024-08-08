// console.log(document.childNodes[1].childNodes[1].childNodes[2].parentNode);

// var heading = document.getElementById('heading')
// // heading.setAttribute('class','main-heading')
// // heading.className += ' main-head'
// console.log(heading.hasAttribute("class"))
// console.log(heading.childNodes[0]);

// _____________________ Todo app_____________________

// var inp = document.getElementById('inp')
// var todo = document.getElementById('todo')
// var lists = document.querySelector('#lists')

// function addTodo(){
//     lists.innerHTML += `<li><input type="text" value= "${inp.value}" disabled/> <button onclick="delt(event)">delete</button>
//     <button onclick="updt(event)">update</button>
//     </li>`
    
//     inp.value = ""
// }

// function clickTodo(event){
// if (event.keyCode === 13){
//     addTodo()
// }
// }

// function delt(event){
//     event.target.parentNode.remove()
// }
// function updt(event){
//     console.log(event.target.parentNode.childNodes[0].disabled = false);
//     event.target.parentNode.childNodes[0].disabled = false
//     event.target.parentNode.childNodes[0].focus()
//     event.target.innerHTML= "edit"
//     event.target.setAttribute("onclick","edited()")


// }

// function edited(){
//     event.target.parentNode.childNodes[0].disabled = true
//     event.target.innerHTML= "update"

// }
// function dltAll(){
//     // lists.remove()
//     lists.innerHTML = ""
// }

// _______________ topic change_______________
var body = document.querySelector("body")

var div =  document.createElement('div')
var text = document.createTextNode("hello my name is hira")

body.appendChild(div)
div.appendChild(text)
div.setAttribute("class","main")
