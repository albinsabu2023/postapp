import  { useEffect, useState } from 'react'
import {getDocs,collection} from "firebase/firestore"
import { db } from '../../config/firebase';
import PostCard from './PostCard';


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
 useEffect(()=>{
  getPosts();
 },[])
  return (
    <div>
      {postsList?.map((post)=>{
        return <PostCard title={post.title} description={post.description}/>
      })}
    </div>
  )
}

export default Home