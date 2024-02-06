import React from 'react'
import  {us} from
function CreatePosts() {
  return (
    <div>
        <form>
           <input placeholder='title'/> 
           <textarea  maxLength={200}/>
           <input type="submit" placeholder='submit'  onClick={inputHandler}/> 
        </form>
    </div>
  )
}

export default CreatePosts