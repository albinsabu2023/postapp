import  {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import Main from "./pages/Main";
import Login from "./pages/Login";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element ={<Main/>}/>
          <Route path="/login" element ={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
