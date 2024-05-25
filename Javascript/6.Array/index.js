

// var fruits;   // declaration

//  console.log(fruits[3]);  //undefined
// console.log(fruits[3]);


// pop
/*
var fruits = ["mango","banana","apple","papaya","strawberry"]
var returnVal = fruits.pop() //remove last element 

console.log(fruits);
console.log(returnVal);  //return deleted  value  */


/*
var fruits = ["mango","banana","apple"]
var retValue = fruits.push("water melon")

console.log(fruits);
console.log(retValue);  // return length of array 

*/



/*
var fruits = ["mango","banana","apple"]

var returnVal = fruits.shift()

console.log(fruits);
console.log(returnVal);

*/


// var fruits = ["mango","banana","apple"]

// var returnVal = fruits.unshift("grapes")

// console.log(fruits);
// console.log(returnVal);


// var fruits = ["mango","banana","apple"]
// fruits.splice(0,2,"grapes")
// console.log(fruits);


var fruits = ["mango","banana","apple","papaya","cherry","melon","guava","strawberry"]
fruits.pop()
fruits.pop()
fruits.shift()
fruits.splice(2,1,"watermelon")

console.log(fruits);
