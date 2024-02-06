import  {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import Main from "./pages/Main";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path="/" element ={<Main/>}/>
          <Route path="/login" element ={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
