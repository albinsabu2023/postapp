import React from 'react'
import { Link } from 'react-router-dom'
import  "./Navbar.css"
import {auth } from  "../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
function Navbar() {
    const  [user] =useAuthState(auth);
    const signUserOut =async ()=>{
        await signOut(auth);
    }
  return (
    <div className="navContainer">
        <Link to ="/">Home</Link>
        
        <Link to ="Login">Login</Link>
         <Link to ="/createpost">CreatePost</Link>
        <div>
            {user&&
            <>
            <p>{user?.displayName}</p>
            <img src={user?.photoURL|| "" } alt="" width="30" height="30"
            />
            <button onClick={signUserOut}>Logout</button>
            </>
            }
        </div>
        

    </div>
  )
}

export default Navbar