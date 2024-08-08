// Objects are containers for Properties and Methods. 
// Properties are named Values. Methods are Functions stored as Properties.

// The Object type represents one of JavaScript's data types.
//  It is used to store various keyed collections and more complex entities.


var teacher = {
   name : "Farah",
   Education :"B.com",
   skills:["ms office","punctual","designer"],
   Age :25,
   isPresent :true
  }
  console.log(teacher); 
  console.log(teacher.Age);
  console.log(teacher.skills);  // ["ms office","punctual","designer"]
  console.log(teacher.skills[1]); //punctual


  for(var i = 0;i< teacher.skills.length;i++){
    console.log(teacher.skills[i]);
  }