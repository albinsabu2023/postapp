import React from 'react'

import {useForm} from  "react-hooks-useform"

import * as yup from "yup"
function CreateForm() {
  return (
    <form>
        <input type="text"  placeholder='title'/>
    </form>
  )
}

export default CreateForm