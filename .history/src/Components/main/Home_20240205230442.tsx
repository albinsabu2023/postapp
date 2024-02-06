import { getFirestore } from "firebase/firestore"
import  {db} from "../../config/firebase"
function Home() {
  const postref=getDOcs(db,"posts")
  return (
    <div>
      
    </div>
  )
}

export default Home