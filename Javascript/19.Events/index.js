// ================ Events

// HTML events are "things" that happen to HTML elements.
//  When JavaScript is used in HTML pages,
//  JavaScript can "react" on these events


// Types of JavaScripts. Common Event Listeners.
// Conclusion. An event is an action that occurs as per the user's instruction as 
// input and gives the output in response.

//  function color(){
//     var box = document.getElementById('box')
//    box.style.backgroundColor="red"
//  }


// function imageChange(event,type) {
//     // var img = document.getElementById('image')

//     // console.log(event.target.src);
//     //     img.src = 'https://static.toiimg.com/thumb/msid-53891743,width-748,height-499,resizemode=4,imgsize-152022/.jpg'
//     // console.log(type);
//     console.log(event);
//     if(event.type === 'mouseover'){
//         event.target.src = 'https://static.toiimg.com/thumb/msid-53891743,width-748,height-499,resizemode=4,imgsize-152022/.jpg'

//     }else{
//         event.target.src = "https://t4.ftcdn.net/jpg/07/08/47/75/360_F_708477508_DNkzRIsNFgibgCJ6KoTgJjjRZNJD4mb4.jpg"
//     }
    
    
   
// }

// imageChange()

function getImage(){
    var file = document.getElementById('file');
    var image = document.getElementById('image');
    // console.log(file.files[0]);
    // console.log(URL.createObjectURL(file.files[0]));
    image.src = URL.createObjectURL(file.files[0])
    image.style.display = 'block'
//   
}
