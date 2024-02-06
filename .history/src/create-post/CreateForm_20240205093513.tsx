import React from 'react'

import {useForm} from  "react-hooks-useform"
import {auth} from "../config/firebase"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { log } from 'console'
const schema=yup.object().shape({
  title:yup.string().required("enter the title"),
  description:yup.string().required("enter the description"),
  
})

function CreateForm() {
  const {register}=useForm({
    resolver:yupResolver(schema),
  })
  const createForm =((data:any)=>{
      console.log(data);
      
  })
  return (
    <form onSubmit={handleSubmit(createForm)}> 
        <input type="text"  placeholder='title' {...register("title")}/>
        <textarea maxLength={300} {...register("description")}/> 
        <input type="submit"  />
    </form>
  )
}

export default CreateForm