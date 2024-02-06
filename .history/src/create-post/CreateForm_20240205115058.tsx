import React from 'react'
import "./CreateForm.css"
function CreateForm() {
  return (
    <form>
      <input placeholder='title'/>
      <textarea placeholder='description'/>
      <input  className='submitButton' type="submit"/>
    </form>
  )
}

export default CreateForm