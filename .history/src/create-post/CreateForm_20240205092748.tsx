import React from 'react'

import {useForm} from  "react-hooks-useform"

import * as yup from "yup"
const schema=yup.object().shape({
  title:yup.string().required("enter the title"),
  description:yup.string().required("enter the description")
})
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