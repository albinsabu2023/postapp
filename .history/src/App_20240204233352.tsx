import  {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import Home from "./Components/Home";
import Login from "./Components/Login";


function App() {
  return (
    <div className="App">
      <Router>
         <Navbar/>
        <Routes>
          <Route path ="/">{<Home/>}</Route>
          <Route path="/login">{<Login/>}</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
