import React from 'react'
import  {auth,provider}  from "../config/firebase"
import { signInWithPopup } from 'firebase/auth'
import { log } from 'console';
function Login() {
  const signWithGoogle =async()=>{
     const result= await signInWithPopup(auth,provider);
     console.log(result);
     
  }
  return (
    <div>
        <p>Sign In To continue</p>
        <button onClick={signWithGoogle}>Sign In with Google</button>
    </div>
  )
}

export default Login