

// var obj = {
//     name:"hira",
//     phoneNo: 953573847,
//     getNo: function (){
//        console.log(this.name);
       
        
//     }
// }
// console.log(obj);


// obj.getNo()

// console.log(obj.name);
// console.log(obj["phoneNo"]);

// console.log("name" in obj);
// console.log(obj.getNo());
// console.log(obj);

// console.log(this);


//constructor


// function Mold(name,color){
//     this.name = name;
//     this.color = color;
// }

// function Mold(){
//     this.name = "icecream";
//     this.color = "red";
// }

// console.log(new Mold())

// console.log(new Mold())
// console.log(new Mold())
// console.log(new Mold())



//  function Obj (name,number){
//     this.name = name;
//     this.number = number;
//     this.gettingInfo = function (){
//         console.log(this.name ,this.number);
    
//     }
//  }


//  var a = new Obj("rayan",897698)
//  console.log(a.gettingInfo());



// function  Board (stName){
//     this.stName = stName;
    
// }

// Board.prototype.allDetails = function(){
//     return this.stName
// }

 
// var board = new Board ("rida")
// var board1 = new Board ("shifa")
// console.log(board);
// console.log(board1);


var student = {
    name:"rida",
    rollNo:"a5756"
}

for(var key in student){
    console.log(student[key]);
    
}



var assesories = {
    jewllery:{
        gold:{
         name:"braclet",
         beats:8,
         img:"asa"
        }
    }
}













