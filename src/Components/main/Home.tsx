import { getDocs,collection, doc} from "firebase/firestore"
import  {db} from "../../config/firebase"
import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import "./Home.css"
export interface Post {
  id:string,
  title:string,
  userId:string,
  description:string,
  username:string,
}
function Home() {
  const postref=collection(db,"posts");
  const [postList,setPostList] =useState<Post[] |null>(null);
  const getPosts =async() =>{
   const data= await getDocs(postref );
   setPostList(data.docs.map((doc)=>({...doc.data(),id:doc.id})) as Post[]);
   
  }
  useEffect(()=>{
    getPosts();
  },[])
  
  return (
    <div className="post">
      {
      postList?.map((post)=>{
          return <PostCard post={post}/>
        })
      }
    </div>
  )
}

export default Home