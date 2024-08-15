// var obj = {
   
//     details: {
//         adress:{

//         }
//     },
//     extraInfo:{
//       houseno:{
        
//       }
//     }

// }

// // syntax
// for (var key in obj) {
  
  
//     for (var key1 in obj[key]) {
//   console.log(obj[key][key1]);
//             for(var key2 in obj[key][key1]){

//             }
//     }

// }


var makeupProduct = {
    Maybelline: {
      NewYork: {
      
        productName: "Lipstick",
        shade: "Red",
        price: "$10",
      },
      turkey:{
        productName: "mascara",
        shade: "blue",
        price: "$20",
      }
    },
    LOreal: {
      Paris: {
        productName: "Foundation",
        shade: "Beige",
        price: "$15",
      }
    },
    Revlon: {
      London: {
        productName: "Mascara",
        shade: "Black",
        price: "$12",
      }
    },
    MAC: {
      Toronto: {
        productName: "Eyeshadow",
        shade: "Gold",
        price: "$20",
      }
    },
    NARS: {
      Tokyo: {
        productName: "Blush",
        shade: "Pink",
        price: "$18",
      }
    },

  
  }


  var main = document.querySelector("#main")
 

  


  for(var key in makeupProduct){
    // console.log(makeupProduct[key])
    for(var key1 in makeupProduct[key]){
        
        
        console.log(makeupProduct[key][key1]);
    var obj = makeupProduct[key][key1]
    main.innerHTML +=` <div class="card text-center" style="width: 18rem;">
            <img src="./download.jfif" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${obj.productName}</h5>
              <p class="card-text">${obj.price}</p>
              <a href="#" class="btn btn-primary">${obj.shade}</a>
            </div>
          </div>`
          
            
          }
  
        
    
  }




