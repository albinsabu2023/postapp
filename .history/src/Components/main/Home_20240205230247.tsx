import  { useEffect, useState } from 'react'
import {getDocs,collection} from "firebase/firestore"
import { db } from '../../config/firebase';
import PostCard from './PostCard';



export interface Post {
  id:string,
  userId:string,
  username:string,
  description:string,
  title:string,

}
function Home() {
  
  }
 
  return (
    <div>
      
    </div>
  )
}

export default Home