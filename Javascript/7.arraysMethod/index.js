var names = ["rida","aina","areeba"]
// var check = names.splice(1,2,"saba")
// console.log(check);
// console.log(names[1])


var copyNames = names
console.log(names);
console.log(copyNames);


copyNames[1] = "saba"
console.log(names);
console.log(copyNames);


var num = 1
var copynum = num
console.log(num);
console.log(copynum);

copynum = 3
console.log(num);
console.log(copynum);