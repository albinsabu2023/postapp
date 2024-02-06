import React from 'react'
import  {auth,provider}  from "../config/firebase"
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
function Login() {
    const navigate= useNavigate();
  const signWithGoogle =async()=>{
     const result= await signInWithPopup(auth,provider);
     console.log(result);
     navigate("/");
  }
  return (
    <div className='login'>
        <p>Sign In To continue</p>
        <button onClick={signWithGoogle}>Sign In with Google</button>
    </div>
  )
}

export default Login