import  {BrowserRouter as Router,Routes,Route} from "react-routerp-dom"
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path ="/">Home</Route>
          <Route path="/login">Login</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
