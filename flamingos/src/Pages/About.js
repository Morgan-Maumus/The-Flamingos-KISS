import React from 'react';
import '../App.css';

function Header() {
    return (
        <div className='container' id='kHead'>
            <div className='kissHeader'> K.I.S.S.
                <div className='logoText'>
                    <u>Meet the Keep It Simple, Stupid Team!</u>
                </div>
            </div>
        </div>
    )
}

function Body(){
    return(
        <div className='row'>
            <div className='columnImg'>
                <div className='card' width='100%'>
                    <div className='container'>
                        <p>Jack</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
function About(){
    return (
    <Header/>
            )
}
export default About;