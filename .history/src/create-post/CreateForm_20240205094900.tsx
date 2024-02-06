import React from 'react'

import {useForm} from  "react-hook-form"

import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { CreateContextOptions } from 'vm'

interface CreateFormData {
  title:string,
  description:string,
  
}

function CreateForm() {
  
  const schema=yup.object().shape({
  title:yup.string().required("enter the title"),
  description:yup.string().required("enter the description"),
  }) 

  const {register,handleSubmit,formState :{errors}}=useForm<CreateFormData>({
    resolver:yupResolver(schema),
  })
  const createForm =((data:CreateFormData)=>{
      console.log(data);
      
  })
  return (
    <form onSubmit={handleSubmit(createForm)}> 
        <input type="text"  placeholder='title' {...register("title")}/>
        <p>{errors.title?.message}</p>
        <textarea maxLength={300} {...register("description")}/> 
        <p>{errors.description?.message}</p>
        <input type="submit"  />
    </form>
  )
}

export default CreateForm