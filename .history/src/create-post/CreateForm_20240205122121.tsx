import React from 'react'
import "./CreateForm.css"
import  {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {auth,db} from "../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import { addDoc,collection } from 'firebase/firestore'
interface CreateFormData {
  title:string,
  description:string,
 
}
function CreateForm() {
  const [user]=useAuthState(auth);
  const schema =yup.object().shape({
    title:yup.string().required("hei enter title"),
    description:yup.string().required("enter the description"),
    

  })
  const postRef =collection (db,"posts");
  
  const  {register,handleSubmit,formState:{errors}}=useForm<CreateFormData>({
     resolver :yupResolver(schema),
  })
  const createpost =async (data:CreateFormData)=>{
    await addDoc(postRef,{
      title:data.title,
      descritption:data.description,
      username :user?.displayName,
      userId:user?.uid
    })
    
  }
  return (
    <form onSubmit ={handleSubmit(createpost)}>
      <input placeholder='title' {...register("title")}/>
      <p className="warning">{errors.title?.message}</p>
      <textarea placeholder='description' maxLength={400}/>
      <p className='warning'>{errors.description?.message}</p>
      <input  className='submitButton' type="submit" {...register("description")}/>
      
    </form>
  )
}

export default CreateForm