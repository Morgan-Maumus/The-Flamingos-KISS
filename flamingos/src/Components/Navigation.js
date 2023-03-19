import React from 'react'
import {Link} from "react-router-dom";


function Navigation(){
    
    return (
        <div className = "nav-bar"> 
            
            <div className="nav-left">
                <Link className="nav-links nav-left"  to ="./About">About</Link>
            </div>
            <div className="nav-center">
                <Link className="nav-links nav-center" classname= "center-padding" to ="./The-Flamingos-Kiss">Home</Link>
            </div>
            <div className="nav-right">    
                <Link className="nav-links nav-right"to ="./Signin">Log In</Link>
            </div>
        </div>
    )
}
export default Navigation