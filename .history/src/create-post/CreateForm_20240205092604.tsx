import React from 'react'

import {useForm} from  "react-hooks-useform"

import * as yup from "yup"
function CreateForm() {
  return (
    <form>
        <input type="text"  placeholder='title'/>
        <textarea maxLength={300}/>
        <input type="submit" />
    </form>
  )
}

export default CreateForm