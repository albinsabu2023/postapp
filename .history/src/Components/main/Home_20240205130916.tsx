import  { useEffect, useState } from 'react'
import {getDocs,collection} from "firebase/firestore"
import { db } from '../../config/firebase';


interface Post {
  id:string,
  userId:string,
  username:string,
  description:string,
  title:string,

}
function Home() {
  const [postsList,setPostLists]=useState<Post[] | null>(null)
  const postref=collection(db,"posts");
  const getPosts =async ()=>{
      const data=await getDocs(postref);
     setPostLists(data.docs.map((doc)=>({...doc.data(),id:doc.id}))as Post[])
      
  }
 getPosts();
  return (
    <div>
     {postsList?.map((item)=>{
      return(
        <>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        </>
      )
     })}
    </div>
  )
}

export default Home