import  {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div className="App">
      <Router>
         <Navbar/>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
