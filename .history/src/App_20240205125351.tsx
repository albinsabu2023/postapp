import  {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import Home from "./Components/main/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import CreatePosts from "./create-post/CreatePosts";


function App() {
  return (
    <div className="App">
      <Router>
         <Navbar/>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/createpost" element={<CreatePosts/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
