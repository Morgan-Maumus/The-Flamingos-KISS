import React from 'react'
import {Link} from "react-router-dom";


function Navigation(){
    
    return (
        <div className = "nav-bar"> 
            
            <div className="nav-left">
                <Link className="nav-links nav-left"  to ="./About.js">About</Link>
            </div>
            <div className="nav-center">
                <Link className="nav-links nav-center" classname= "center-padding" to ="./">Home</Link>
            </div>
            <div className="nav-right">    
                <Link className="nav-links nav-right"to ="./Signin.js">Log In</Link>
            </div>
        </div>
    )
}
export default Navigation