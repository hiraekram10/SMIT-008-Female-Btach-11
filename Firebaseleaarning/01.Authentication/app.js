import { auth,app,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,
    sendEmailVerification,
    signOut 
} from "./firebase.js";


onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const uid = user.uid;
      console.log("user exist", user);
      
     
    } else {
       console.log("user not found");
       
    }
  });


// let registerBtn = document.getElementById('registerBtn')

// let register = ()=>{
//     let email = document.getElementById('email')
//     let password = document.getElementById('password')

//     createUserWithEmailAndPassword(auth, email.value, password.value)
//   .then((userCredential) => {
   
//     const user = userCredential.user;
//     console.log("user registeres==",user);
    
    
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(error.message);
    

  
//   });

// }


// registerBtn.addEventListener("click",register)

let loginBtn = document.getElementById('loginBtn')

let login = ()=>{
    let email = document.getElementById('email')
    let password = document.getElementById('password')

    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
   
    const user = userCredential.user;
    console.log("login succesfully==",user);
    
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error.message);
    

  
  });

}


loginBtn.addEventListener("click",login)

//logout 

let logoutBtn = document.getElementById('logoutBtn')

let logout = ()=>{


    signOut(auth).then(() => {
       console.log("user logout successfully");
       
      }).catch((error) => {
      console.log(error);
      
      });
}
logoutBtn.addEventListener("click",logout)



let verifyEmail = document.getElementById('verifyEmail')
let sendEmail = ()=>{
    sendEmailVerification(auth.currentUser)
    .then(() => {
    console.log("email sent");
    
    });
}

verifyEmail.addEventListener("click",sendEmail)


