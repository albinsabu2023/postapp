import  { useState } from 'react'
import {getDocs,collection} from "firebase/firestore"
import { db } from '../config/firebase';

function Home() {
  const [postsList,setPostLists]=useState(null)
  const postref=collection(db,"posts");
  const getPosts =async ()=>{
      const data=await getDocs(postref);
      console.log(data);
      
  }
  getPosts();
  return (
    <div>Home</div>
  )
}

export default Home