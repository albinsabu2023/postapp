import React from 'react'
import "./CreateForm.css"
import  {useForm} from "react-hook-form"

function CreateForm() {

  const createpost =((data:any)=>{
    console.log(data);
    
  })
  return (
    <form onSubmit ={handleSubmit(createpost)}>
      <input placeholder='title'/>
      <textarea placeholder='description'/>
      <input  className='submitButton' type="submit"/>
    </form>
  )
}

export default CreateForm