
import './App.css';
// import {BrowswerRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navigation from './Components/Navigation';
import About from './Pages/About'
import Signin from './Pages/Signin'

/* for now I put the home info in App but we will need use the pages 
folder to create a navigation bar when we start coding the other pages */ 

function App() {
  

  return (
 
    <div className="App">
      <Navigation/>
      <Home/>
     {/* <BrowswerRouter>
      <Routes> 
        <Route index element ={<Home/>}/>
        <Route path='/Home' element ={<Home/>}/>
        <Route path='/About' element ={<About/>}/>
        <Route path='/Signin' element ={<Signin/>}/>


      </Routes>
     </BrowswerRouter> */}
    
    </div>
     

     
      
  );
}

export default App;
