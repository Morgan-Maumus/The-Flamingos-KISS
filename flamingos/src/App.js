
import './App.css';
import Home from './Pages/Home'
import Navigation from './Components/Navigation';
import About from './Pages/About'
import Signin from './Pages/Signin'
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
      <Navigation/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Signin" element={<Signin/>}/>
          
        </Routes>
      </div>
    
    </>
   
  );
}
export default App;
