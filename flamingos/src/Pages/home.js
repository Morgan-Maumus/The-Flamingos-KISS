import React from 'react'

function Home(){
    
    function newNode(){
        alert('it worked');
      }
      
    return (
        <div className = 'home'>
            
                <div onClick={newNode} className = "button-container"> 
                <button className = "add-button"> Add </button>
                </div>
            
            
            <div classname= 'nodes-container'>
                Nodes will go here 
            </div>
        </div>
        


    )
}
export default Home