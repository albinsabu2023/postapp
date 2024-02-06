import { getDocs,collection, doc} from "firebase/firestore"
import  {db} from "../../config/firebase"
import { useEffect, useState } from "react";

interface Post {
  id:string;
  user
}
function Home() {
  const postref=collection(db,"posts");
  const [postList,setPostList] =useState(null);
  const getPosts =async() =>{
   const data= await getDocs(postref );
   setPostList(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
   
  }
  useEffect(()=>{
    getPosts();
  },[])
  
  return (
    <div>
      
    </div>
  )
}

export default Home