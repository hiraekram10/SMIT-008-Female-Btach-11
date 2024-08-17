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
  //  console.log(obj[key]);
   
  
//     for (var key1 in obj[key]) {
//   console.log(obj[key][key1]);
//             for(var key2 in obj[key][key1]){

//             }
//     }

// }


var makeupProduct = {
    Maybelline: {
      NewYork: {
       img:"download.jfif",
        productName: "Lipstick",
        shade: "Red",
        price: "$10",
      },
      turkey:{
        img:"mascara.jfif",
        productName: "mascara",
        shade: "blue",
        price: "$20",
      
        
      }
    },
    LOreal: {
      Paris: {
        img:"foundation.jfif",
        productName: "Foundation",
        shade: "Beige",
        price: "$15",
      }
    },
    Revlon: {
      London: {
        img:"mascara.jfif",
        productName: "Mascara",
        shade: "Black",
        price: "$12",
      },
      Pakistan :{
        img:"lipglow.jfif",
        productName: "lipglow",
        shade: "pink",
        price: "$8",
      }
    },
    MAC: {
      Toronto: {
        img:"eyesahdow.jfif",
        productName: "Eyeshadow",
        shade: "Gold",
        price: "$20",
      }
    },
    NARS: {
      Tokyo: {
        img:"blush.jfif",
        productName: "Blush",
        shade: "Pink",
        price: "$18",
      }
    },

  
  }


  var main = document.querySelector("#main")
  var brand = document.querySelector("#brand")
  var country = document.querySelector("#country")

  brand.innerHTML = `<option value="">Select brand </option>`
  
country.innerHTML = `<option value="">Select country name</option>`
 

  


  for(var key in makeupProduct){

    brand.innerHTML += `<option value="${key}">${key}</option>`
    for(var key1 in makeupProduct[key]){
         
        
        
        console.log(makeupProduct[key][key1]);
    var obj = makeupProduct[key][key1]

    main.innerHTML +=` <div class="card text-center" style="width: 18rem;">
            <img src="${obj.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${obj.productName}</h5>
              <p class="card-text">${obj.price}</p>
              <a href="#" class="btn btn-success">${obj.shade}</a>
            </div>
          </div>`
          
            
          }
  
        
    
  }


  function setCountry(){
    country.innerHTML = ""
    country.innerHTML =`<option value ="">select country name </option>`
for(var key in makeupProduct[brand.value]){
  country.innerHTML +=`<option value ="${key}">${key} </option>`
  
}
  
  }

var selectedCard = document.getElementById("selectedCard")
  function searchProduct(){
    // console.log(makeupProduct[brand.value][country.value]);
  
    var userVal = makeupProduct[brand.value][country.value]
   
    
    selectedCard.innerHTML = `<div class="card text-center" style="width: 18rem;">
            <img src="./download.jfif" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${userVal.productName}</h5>
              <p class="card-text">${userVal.price}</p>
              <a href="#" class="btn btn-primary">${userVal.shade}</a>
            </div>
          </div>`
             main.style.display = 'none'
          
    
    
  }
  function clearProduct (){
    selectedCard.style.display ='none'
    main.style.display= "flex"
  }


  // var obj = {
  //   name:"hira",
  //   rollNo :"2a",
  //   email:"hera@gmail.com"
  // }


  // var userINp = prompt("enter your key")
  // console.log(obj[userINp]);
  




