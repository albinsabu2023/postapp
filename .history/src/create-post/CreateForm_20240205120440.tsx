import React from 'react'
import "./CreateForm.css"
import  {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
function CreateForm() {
  const schema =yup.object().shape({
    title:yup.string().required("hei enter title"),
    description:yup.string().required("enter the description"),
  })
  
  const  {register,handleSubmit,formState:{errors}}=useForm({
     resolver :yupResolver(schema);
  })
  const createpost =((data:any)=>{
    console.log(data);
    
  })
  return (
    <form onSubmit ={handleSubmit(createpost)}>
      <input placeholder='title' {...register("title")}/>
      <p className="warning">{errors.title?.message}</p>
      <textarea placeholder='description'/>
      <p className='warning'>{errors.description?.message}</p>
      <input  className='submitButton' type="submit" {...register("description")}/>
      
    </form>
  )
}

export default CreateForm