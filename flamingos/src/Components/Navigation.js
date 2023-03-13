import React from 'react'

function Navigation(){
    return (
        <div className = "nav-bar"> 
            
            <div className="nav-left">
                <a className="nav-links "  href ="">About</a>
            </div>
            <div className="nav-center">
                <a className="nav-links" classname= "center-padding" href ="">Home</a>
            </div>
            <div className="nav-right">    
                <a className="nav-links nav-right"href ="">Log In</a>
            </div>
        </div>
    )
}
export default Navigation