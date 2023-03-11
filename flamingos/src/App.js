
import './App.css';
import Navigation from './Components/Navigation';


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
