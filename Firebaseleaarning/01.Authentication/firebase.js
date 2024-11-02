
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    GoogleAuthProvider,
    signInWithPopup
 } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
 import { getFirestore,collection, addDoc,getDocs  } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

 

  const firebaseConfig = {
    apiKey: "AIzaSyDRH4zS_zHcM-uOTnAvY6G4xWUrg4MVdPY",
    authDomain: "batch-11-smit-bdbb0.firebaseapp.com",
    projectId: "batch-11-smit-bdbb0",
    storageBucket: "batch-11-smit-bdbb0.appspot.com",
    messagingSenderId: "750497389449",
    appId: "1:750497389449:web:3bb231530fafc0c61a5f58"
  };

  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider();
  const db = getFirestore(app);



  export {app,
    auth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    GoogleAuthProvider,
    provider,
    signInWithPopup,
    db,
    getFirestore,
    collection, 
    addDoc,getDocs 
}