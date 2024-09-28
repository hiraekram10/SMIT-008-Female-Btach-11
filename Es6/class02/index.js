// for(let i = 0; i < 5 ; i++){
//     setTimeout(function (){
//         console.log(i);
        
//     },3000)
// }


// var a = "ahfjshdf"
// setTimeout(function (){
//     console.log("hi");
    
// },3000)

// console.log("bye");

//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are 
// created every time a function is created, at function creation time.


// function abc(){
//     var a = "ajfhsdg"
//     function jkl(){
//       a
//       var jhd= "sjsc"
//       function hgl(){
//         a
//         jhd
//         jhasjh
//       }
//       hgl()
//     }
//     jkl()
// }

// abc()

// Template literals

// var age =7
// var name = "hira"
// // console.log("Myname " + name + is);
// console.log(` my name is ${name} & my age is ${age}`);

// Destructuring

var  obj1 = {
    name:"hira",
    rollNo :"a8753",
    details:{
        adress:"a5 yert karachi",
        phoneNo:8924759
    }
}

let {rollNo, name,details} = obj1
let {adress,phoneNo} = obj1.details


console.log(adress);






