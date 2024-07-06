// switch('tues'){
//    case 'sun':
//     console.log('hmari class hogi');
//     break;
//     case'sat':
//     console.log("class nhi hogi")
//     break;
//     case'mon':
//     console.log("class nhi hogi")
//     break;
//     default :
//     console.log("chutti kro")

// }


// function priceChecker(product) {
//     var price;
//     switch (product) {
//         case 'T-shirt':
//             price = 1000;
//             break;
//         case 'jeans':
//             price = 2000;
//             break;
//         case 'kurti':
//             price = 5000;
//             break;
//         case 'bottle':
//             price = 500;
//             break;
//             default :
//             console.log('product is not available');
//     }
//     var output ='Your product price is ' + price + 'rs'
//     return output
// }



// var userChoice = prompt("Enter your product")
// var functionCall = priceChecker(userChoice)
// console.log(functionCall);



// ======================== While loop ==========================



/*A for loop is generally used if the number of 
loops is known, a while loop is generally for an unknown number of loops.*/

// var i = 0
// while(i< 4){
//   console.log(i);
//   i++
// }

// var flag = true;
// var count= 0
// while (flag){
//     count += 5
//     console.log(count)
//     if(count === 100){
//         flag = false
//     }
    
// }


//  A do-while loop provides for the action's 
// ongoing execution until the condition is no longer true

// var i = 0
// do{
//     console.log('do it')
//     i++
// }while(i< 0)



// Extra


// console.log(window.document);
var main = document.getElementById('main')
// // main.innerText = '<h1>Hira</h1> '
// main.innerHTML = '<h1>Hira</h1> '
// main.style.backgroundColor = 'red'



var inp = document.getElementById('name')
// console.log(inp);
function addValue (){
    console.log(inp.value);
    inp.value = ''
    main.innerText = inp.value
    
}







