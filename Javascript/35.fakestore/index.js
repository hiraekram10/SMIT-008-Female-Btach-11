// The async function declaration creates a binding of a 
// new async function to a given name. The await keyword is permitted 
// within the function body, enabling asynchronous, promise-based behavior to be written in a cleaner style and 
// avoiding the need to explicitly configure promise chain

// async function getProduct (){
//     try{
//     var data = await fetch('https://fakestoreapi.com/products')
//     var res = await data.json()
//     // console.log(res);
//     for(var i =0; i<res.length; i++ ){
//         console.log(res[i]);
//         var products = document.getElementById('products')
//         products.innerHTML +=`<div class="card" style="width: 18rem;">
//   <img src="${res[i].image}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${res[i].title}</h5>
//     <p class="card-text">${res[i].price} $</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`
// Swal.fire({
//     icon: "error",
//     title: "Oops...",
//     text: "Something went wrong!",
//     footer: '<a href="#">Why do I have this issue?</a>'
//   });
        
//     }
// } catch(err){
//     console.log(err);
    
// }
   
    
// }

// getProduct()

fetch('https://dummyjson.com/recipes')
.then(res => res.json())
.then(console.log);