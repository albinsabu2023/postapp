import { getDocs,collection} from "firebase/firestore"
import  {db} from "../../config/firebase"
import { useState } from "react";
function Home() {
  const postref=collection(db,"posts");
  const [postList,setPostList] =useState(null);
  const getPosts =() =>{
    getDocs(postref, )
  }
  return (
    <div>
      
    </div>
  )
}

export default Home