
// normal function
// function printing (a,b){
//     console.log(arguments.length);
    
// }
// printing(2,2,3)


// // function expression

// var sum = function (){
//   console.log(("hello"));
  
// }
// sum()

// printing(7)


// function printing (a){
//     console.log(a);
    
// }

// fat arrrow function

// sum(9,3)// error 

// let sum =  (a,b)=>{
//     console.log(a+ b);
    
// }


// let sum =  (a,b) => a + b

// console.log(sum(7,6));
// let sum =  a => a

// console.log(sum(7));

// let sum =  (a,b)=>{
//     console.log(argument);
    
// }
// sum(7,6)


// let obj= {
//     name:"hasan",
//     getName:function(){
//         function name(){
//             console.log(this);  //window
            
//         }
//         name()
//     }
// }
// obj.getName()

// let obj= {
//         name:"hasan",
//         getName:function(){
//             console.log(this);
            
//             const name = ()=>{
//                 console.log(this);
                
//             }
//             name()
//         }
//     }
//     obj.getName()


// var sum;
// console.log(sum()); undefined()




// var sum = ()=>{

// }


// function sum (a,b,a){
//     console.log(a,b);
    

// }
// sum ("hira","shama","rida")

// const sum =(a,b,a)=>{
//     console.log(a,b);
    

// }
// sum ("hira","shama","rida") //Duplicate parameter name not allowed in this context


// const sum =(a,b)=>{
//     // console.log(a+b); // hiraundefined

//     // console.log(a + true); hiratrue

//     // console.log(a - null);   Nan
    
//     // console.log(a - true);  // 1-1 = 0
//     // console.log(a - false);  // 1-0 = 1


//     // console.log(null + 1);  == 1

//     // console.log(undefined - 1);  // nAn 
    
    
    
    

// }
// sum("hira")
// sum (1) 



// class Student  {
//     constructor(name,email,grade){
//     this.name = name;
//     this.email = email;
//     this.grade = grade
//     }

//   getinfo(){
//   console.log(`my name is ${this.name} my grade is ${this.grade}`)
  
//   }
// }

// var student1 = new Student ("sadi","sadi@gmail.com0","4a")
// console.log(student1);

// student1.getinfo()



// inheritance is the ability to create classes based on other classes. 
// With inheritance, we can define a parent class (with certain properties and methods),
//  and then children classes that will inherit 
// from the parent class all the properties and methods that it has.

class School {
    constructor(schoolN){
        this.schoolN = schoolN
    }
}


class Student extends School  {
    constructor(schoolN,name,email,grade){
    super(schoolN)
    this.name = name;
    this.email = email;
    this.grade = grade;
    this.schoolN = schoolN
    }

 
}


var student1 = new Student ("SMIT","sadi","sadi@gmail.com0","4a")
var student2 = new Student ("saylani","adi","adi@gmail.com0","4a")
console.log(student1);
console.log(student2);










