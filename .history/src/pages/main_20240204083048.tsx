import React from 'react'
import {auth} from "../config/firebase"
import {useAuthState} from "react-firebase-hooks/auth"

function main() {
  const [user]=useAuthState(auth);
  return (
    <div>
    <div>
      <p>{user?.displayName}</p>
      <img src={user?.photoURL  || ""} alt="" />
    </div>
    </div>
  )
}

export default main