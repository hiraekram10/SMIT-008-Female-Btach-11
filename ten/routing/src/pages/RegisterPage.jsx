import React from 'react'
import RegisterForm from '../components/RegisterForm'
import { Link } from 'react-router-dom'
import {auth,getAuth,createUserWithEmailAndPassword} from '../config/firebase'

const RegisterPage = () => {
  const register=(a)=>{
    createUserWithEmailAndPassword(auth, a.email, a.password)
    .then((userCredential) => {
 
      const user = userCredential.user;
      console.log('user registered' ,user);
      
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  
   
  }
  return (
    <div>
      <div>
        <h1 >Register</h1>
      </div>
      <RegisterForm register={register}/>
      <p>Already have an acount <Link to={'/login'}>LOGIN</Link> </p>

    </div>
  )
}

export default RegisterPage
