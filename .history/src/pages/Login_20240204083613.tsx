import React from 'react'
import { auth,provider} from "../config/firebase"
import {signInWithPopup} from "firebase/auth"
import { useNavigate } from 'react-router-dom'

function Login() {

   const navigate=useNavigate();
    const signInWithGoogle =async ()=>{
        const result=await signInWithPopup(auth,provider);
        navigate("/");
    }
  return (
    <div>
        <p>SignIn to continue</p>
        <button onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  )
}

export default Login