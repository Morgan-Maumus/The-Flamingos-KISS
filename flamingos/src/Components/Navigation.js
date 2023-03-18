import React from 'react'
import {Link} from "react-router-dom";
import logo from "../Images/logo.png";
import home from "../Images/home.png";
import signin from "../Images/signin.jpg";


function Navigation(){
    
    return (
        <div className = "nav-bar"> 
            
            <div className="nav-left">
                <a href="./About" className='nav-links nav-left'><img id='logo' src={logo}></img></a>
            </div>
            <div className="nav-center">
                <a href="./" className = "nav-links nav-center" classname='center-padding'><img id='home' src={home}></img></a>
            </div>
            <div className="nav-right">    
                <a href="./Signin" className='nav-links nav-right'><img id='signin' src={signin}></img></a>
            </div>
        </div>
    )
}
export default Navigation