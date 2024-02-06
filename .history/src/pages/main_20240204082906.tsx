import React from 'react'
import {auth} from "../config/firebase"
import {useAuthState} from "react-firebase-hooks"

function main() {
  return (
    <div>
    <div>
      <p>{auth.currentUser?.displayName}</p>
      <img src={auth.currentUser?.photoURL  || ""} alt="" />
    </div>
    </div>
  )
}

export default main