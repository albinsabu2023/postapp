import React from 'react'

import {useForm} from  "react-hook-form"

import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"



function CreateForm() {
  const schema=yup.object().shape({
  title:yup.string().required("enter the title"),
  description:yup.string().required("enter the description"),
  }) 

  const {register,handleSubmit}=useForm({
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