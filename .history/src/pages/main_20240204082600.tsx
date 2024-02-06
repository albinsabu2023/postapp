import React from 'react'
import {auth} from "../config/firebase"
function main() {
  return (
    <div>
    <div>
      <p>{auth.currentUser?.displayName}</p>
    </div>
    </div>
  )
}

export default main