import React, { useState } from 'react';
import mail from '../Images/mail-outline.svg';
import lock from '../Images/lock-closed-outline.svg';
import close from '../Images/close-outline.svg';


function Login() {
    return (
        <div className="signin-wrapper">
            <span className='icon-close'><img id='close' src={close}/></span>


            <div className="form-box login">
                <h2>Login</h2>
                <form action="#">
                <div className="input-box">
                    <span className="icon">
                        <img src={mail}/>
                    </span>
                    <input type="email" required/>
                    <label> Email</label>
                </div>
                <div className="input-box">
                    <span className="icon">
                        <img src={lock}/>
                    </span>
                    <input type="password" required/>
                    <label> Password</label>
                </div>
                <button type='submit' className='btn'>Login</button>
                </form>
            </div>
        </div>
    )

}



function Signin(){
    
    return (
        <>
          <Login/>  
        </>
       
    )
}

export default Signin