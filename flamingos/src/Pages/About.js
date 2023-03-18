import React from 'react';
import '../App.css';

function Header() {
    return (
        <div className='container'>
            <div className='kissHeader'> K.I.S.S.
                <div className='logoText'>
                    <u>Meet the Keep It Simple, Stupid Team!</u>
                </div>
            </div>
            <div className='logoImg'>
            <img src= 'Images/logo.png' alt='logo'/>
            </div>
        </div>
    )
}
function Body(){

    return(
        <>
        <div className='row'>
            <div className='columnImg'>
                <div className='card' width='100%'>
                    <img herf='Images/jackjack.jpg' alt='idk'/>
                    <div className='container'>
                        <p>Jack</p>
                    </div>
                </div>
            </div>

            <div className='columnImg'>
                <div className='card' width='100%'>
                    <div className='container'>
                        <img src='src/Images/nat.png' alt='why'/>
                        <p>Lana</p>
                    </div>
                </div>
            </div>

            <div className='columnImg'>
                <div className='card' width='100%'>
                    <div className='container'>
                        <img herf='Images/jackjack.jpg' alt='this'/>
                        <p>Shelby</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='columnImg'>
                    <div className='card' width='100%'>
                        <img herf='Images/jackjack.jpg' alt='hates'/>
                        <div className='container'>
                            <p>Savannah</p>
                        </div>
                    </div>
                </div>

            <div className='columnImg'>
                    <div className='card' width='100%'>
                        <div className='container'>
                            <img herf='Images/jackjack.jpg' alt='me'/>
                            <p>Nat</p>
                        </div>
                    </div>
                </div>

            <div className='columnImg'>
                    <div className='card' width='100%'>
                        <div className='container'>

                            <img herf='Images/jackjack.jpg' alt=':('/>
                            <p>Phil</p>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}
function About(){
    return (
        <>
            <Header/>
            <Body/>
        </>
            )
}
export default About;