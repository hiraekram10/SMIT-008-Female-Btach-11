console.log(document.childNodes[1].childNodes[1].childNodes[3])
var heading = document.getElementById('heading')
console.log(heading.nodeType);
console.log(heading.nodeName.toLocaleLowerCase());


console.log(text.parentNode);

function changes(event){
    var text = document.querySelector("#text")
  text.parentNode.childNodes[1].remove() 
    
}