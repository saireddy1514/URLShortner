import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import OpenUrl from './components/Home/OpenUrl';
import './App.css';


function App() {
  return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route exact path="/" element={<><Home/></>}/>
          <Route exact path="/:url" element={<><OpenUrl/></>}/>
        </Routes>
      </Router>
    </div>    
  );
}

export default App;
