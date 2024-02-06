import { getDocs,collection} from "firebase/firestore"
import  {db} from "../../config/firebase"
import { useState } from "react";
function Home() {
  const postref=collection(db,"posts");
  const [postList,setPostList] =useState(null);
  const getPosts =async() =>{
   const data= await getDocs(postref );
   console.log(data);
   
  }
  getPosts();
  return (
    <div>
      
    </div>
  )
}

export default Home