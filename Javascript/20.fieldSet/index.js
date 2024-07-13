// ==================== Radio button value get ============

// function selectJuice(){
//     var radio = document.getElementsByName('juice')
//     for(var i = 0; i < radio.length ; i++){
//         // console.log(radio[i].checked);
//         if(radio[i].checked === true){
//             console.log(radio[i].value);
//         }
//     }
    
// }

//===================== onfocus ================== 
// function color(event){
//     event.target.style.backgroundColor = 'grey'
// }

//   ================== Onblur ==================
// function getCity (){
//     var zip = document.getElementById('zip')
//     console.log(zip);
//     var city = document.getElementById('city')
//     switch(Number(zip.value)){
//         case 11:
//             city.value = 'Karachi'
//             break;
//             case 22:
//                 city.value = 'Quetta'
//                 break;
//                 case 33:
//                     city.value = 'Lahore'
//                     break;

//                     default:
//                         city.value =''
//                         console.log('not found')
//     }
// }

var list = document.getElementById('list')
function getButton (event){
    // console.log(event.keyCode);
    if(event.keyCode === 13){
        list.innerHTML += '<li>' + event.target.value +'</li>'
        event.target.value = ''
    }
}