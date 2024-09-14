var opening = window.open("","winn","width=500,height=600,left=200,top=400")
// opening.close()

// var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
// if(regex.test("hadahshsd839") === true){
//     console.log("good")
// }else{
//     console.log("wrong")
// }



// console.og("hi"); index.js:13 Uncaught TypeError: console.og is not a function
// console.lg("I am hira");
// console.log("bye");


console.log("hi")
try{
    console.lg("I am hira");
    throw "wrong keyword"
}catch(err){
    console.log(err);
    
}
console.log("bye")
