import React from 'react'
import "./CreateForm.css"
import  {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {auth,db} from "../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import { addDoc,collection } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
interface CreateFormData {
  title:string,
  description:string,
 
}
function CreateForm() {
  const navigate =useNavigate();
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
      description:data.description,
      username :user?.displayName ,
      userId:user?.uid
    })
    navigate("/");
    
  }
  return (
    <form onSubmit ={handleSubmit(createpost)}>
      <input placeholder='title' {...register("title")}/>
      <p className="warning">{errors.title?.message}</p>
      <textarea placeholder='description' maxLength={60} {...register("description")}/>
      <p className='warning'>{errors.description?.message}</p>
      <input  className='submitButton' type="submit" placeholder='post'/>
      
    </form>
  )
}

export default CreateForm