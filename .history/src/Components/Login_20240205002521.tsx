import React from 'react'
import  {auth,provider}  from "../config/firebase"
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'}
function Login() {
  const signWithGoogle =async()=>{
     const result= await signInWithPopup(auth,provider);
     console.log(result);
     navigate("/");
  }
  return (
    <div>
        <p>Sign In To continue</p>
        <button onClick={signWithGoogle}>Sign In with Google</button>
    </div>
  )
}

export default Login