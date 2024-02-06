import React from 'react'
import { auth,provider} from "../config/firebase"
import {signInWithPopup} from "firebase/auth"
function Login() {

    const signInWithGoogle =async ()=>{
        const result=await signInWithPopup(auth,provider);
        console.log(result);
        
    }
  return (
    <div>
        <p>SignIn to continue</p>
        <button onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  )
}

export default Login