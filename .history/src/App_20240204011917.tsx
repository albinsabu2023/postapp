import  {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import main from "./pages/main";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element ={main/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
