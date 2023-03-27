import React from "react";
import './App.css';
import Home from './Pages/Home'
import Navigation from './Components/Navigation';
import About from './Pages/About'
import Signin from './Pages/Signin'
import {Route, Routes} from "react-router-dom";

function App() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);
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
