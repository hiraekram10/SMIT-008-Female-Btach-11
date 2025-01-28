import React from 'react'
import LoginForm from '../components/LoginForm'
import { Link } from 'react-router-dom'
import {auth,signInWithEmailAndPassword} from '../config/firebase'

const LoginPage = () => {
  const login =(value)=>{
    signInWithEmailAndPassword(auth, value.email,value.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
     console.log(user,'userlogin');
     
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
  return (
    <div>
       <div>
        <h1>Login</h1>
       </div>
       <LoginForm login={login}/>
       <p>dont have an acount <Link to={'/register'}>Register here</Link></p>
      
    </div>
  )
}

export default LoginPage
