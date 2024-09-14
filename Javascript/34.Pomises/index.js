// var myPro = new Promise(function(resolve,reject){
//     var demand = "burger khana hai"
//     if(demand == "burger khana hai"){
//         resolve("promise is fulfilled")
//     }else{
//         reject("failed")
//     }
// })
// myPro.then(function(res){
//      console.log(res);
     
// }).catch(function(error){
//     console.log(error);
    
// })



// fetch('https://api.escuelajs.co/api/v1/products')
// .then(function(res){
//    return res.json()
// })
// .then(function(res){
//     console.log(res);
    
// })
// .catch(function(err){
//   console.log(err);
  
// })
function showData(){
  var dataShow = new Promise(function(resolve,reject){
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(function(res){
   return res.json()
})
.then(function(res){
    resolve(res);
    
})
.catch(function(err){
  reject(err);
})
 
  })
  return dataShow
}

showData()
.then(function(res){
    console.log(res);
    
})
.catch(function(err){
    console.log(err);
    
})





