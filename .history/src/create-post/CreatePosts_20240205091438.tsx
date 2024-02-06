import React from 'react'

function CreatePosts() {
  return (
    <div>
        <form>
           <input placeholder='title'/> 
           <textarea  maxLength={200}/>
           <input type="submit" placeholder='submit' /> 
        </form>
    </div>
  )
}

export default CreatePosts