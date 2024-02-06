import React from 'react'
import  {auth,provider}  from "../config/firebase"
function Login() {
  return (
    <div>
        <p>Sign In To continue</p>
        <button>Sign In with Google</button>
    </div>
  )
}

export default Login