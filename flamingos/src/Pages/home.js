import React from 'react'

function Home(){
    
    function newNode(){
        alert('it worked');
      }
      
    return (
        <div onClick={newNode} className = "button-container"> 
              <button className = "add-button"> Add </button>
        </div>
    )
}
export default Home