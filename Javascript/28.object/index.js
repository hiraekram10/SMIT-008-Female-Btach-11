var fruit = {
    name :"watermelon",
    color : "green",
    friends : {
     first:"melon",
     second:"sarda"
    },
    size: ["round","oval"]
}
console.log(fruit);


// dot notation
console.log(fruit.color);
console.log(fruit.friends.second);

//bracket notation
console.log(fruit["name"]); 



console.log(fruit["friends"]["second"]);


fruit.name =  "guava"
console.log(fruit);

// adding value

fruit.type = "sweet"
console.log(fruit);


// fruit.taste.isGood= true

// console.log(fruit); //Cannot set properties of undefine

console.log(fruit.size);
fruit.size.push("sqaure")
console.log(fruit);
// var size = ["name","property"]

// size.push("square","triangle")
// console.log(size);
console.log(fruit.size[1].toUpperCase());


delete fruit.size

console.log(fruit);

console.log("name" in fruit);

// _____________________Methods ______________
// Methods are usually used to access and manipulate the data stored in an object. 

var student = {
    name :"rida",
    schoolName :"Rose petal",
    getSchoolName:function(){
        console.log("hi");
    }

}
// console.log(student.getSchoolName)
student.getSchoolName()



// console.log(this); window
var obj = {
    name :"hira",
    getName:function(){
   console.log(this.name);
    }
}

obj.getName()





