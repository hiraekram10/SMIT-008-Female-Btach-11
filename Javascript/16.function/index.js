//A JavaScript function is a block of code designed to perform a particular task. A JavaScript function 
// is executed when "something" invokes it (calls it).
// A function in JavaScript is similar to a procedure—a set 
// of statements that performs a task or calculates a value


// syntax 
// function declaration
// function intro(){
//     console.log("my name is hira");
//     // alert("hi function run successfully")
// }


// // call  -- invoke
// intro()
// intro()
// intro()
// intro()
// intro()
// intro()



// function fullName(){
//     var fName = "huda";
//     var lName = "ayaz";
//     console.log(fName + " " + lName);
// }


// fullName()


// ================ Parameter , aurgument ===================




                // paramter
// function fullName(fName,lName){
   
//     console.log(fName + " " + lName);

// }

// var firstName = prompt("enter your first name")
// var lastName = prompt("enter your last name")

// fullName(firstName,lastName)  //aurgument


// var arr = []
// function myUnshift (a){
//    arr[0] = a
// }

// myUnshift("apple")
// console.log(arr);


// type

// function myFunc (a,b,c){
//     console.log(a,b);
// }

// myFunc(1,"cow","true")

var count = 0
 function counter(){
   
    for(var i = 0; i < 4;i++){
        count++
        console.log(count,i);
        if(count === 7){
            console.log(i); //2
            break;
        }
    }
 }

 counter()
 counter()
 counter()
 
 




