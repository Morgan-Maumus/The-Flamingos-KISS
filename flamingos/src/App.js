
import './App.css';
import Navigation from './Components/Navigation';

/* for now I put the home info in App but we will need use the pages 
folder to create a navigation bar when we start coding the other pages */ 

function App() {
  function newNode(){
    alert('it worked');
  }

  return (
 
    <div className="App">
      <Navigation/>
      
    
        <div onClick={newNode} className = "button-container"> 
              <button className = "add-button"> Add </button>
        </div>
    
    </div>
     

     
      
  );
}

export default App;
