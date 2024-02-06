import React from 'react'

import {useForm} from  "react-hook-form"

import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import  {db} from "../config/firebase"
import { addDoc,collection } from 'firebase/firestore'

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
  const postsRef= collection(db,"posts");
  const createPost =async ((data:CreateFormData)=>{
      await addDoc(postsRef,{
        title:data.title,
        description:data.description,
      })
  })
  return (
    <form onSubmit={handleSubmit(createPost)}> 
        <input type="text"  placeholder='title' {...register("title")}/>
        <p>{errors.title?.message}</p>
        <textarea maxLength={300} {...register("description")}/> 
        <p>{errors.description?.message}</p>
        <input type="submit"  />
    </form>
  )
}

export default CreateForm