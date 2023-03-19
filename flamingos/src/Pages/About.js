import React from 'react';
import '../App.css';
import jackjack from '../Images/jackjack.jpg';
import logo from '../Images/logo.png';
import nat from '../Images/nat.png';
import Shelbs from '../Images/Shelbs.jpg';
import lana from '../Images/lana.jpg';
import sav from '../Images/sav.jpg';
import Phil from '../Images/Phil.jpg';


function Header() {
    return (
        <>
        <div className='container'>
            <div className='bgImg'/>
            <div className='kissHeader'> K.I.S.S.
                <div className='logoText'>
                    <u>Meet the Keep It Simple, Stupid Team!</u>
                </div>
            </div>
        </div>
        </>
    )
}
function Body(){

    return(
        <>
            <div className='row'>
            <div className='columnImg'>
                <div className='card' width='100%'>
                    <img src= { jackjack } alt='Jack' width='100%' height='auto'/>
                    <div className='container'>
                        <p>Jack</p>
                    </div>
                </div>
            </div>
            <div className='columnImg'>
                <div className='card' width='100%'>
                    <img src= { lana } alt='Lana' width='100%'/>
                    <div className='container'>
                        <p>Lana</p>
                    </div>
                </div>
            </div>
            <div className='columnImg'>
                <div className='card' width='100%'>
                    <img src= { Shelbs } alt='Shelby' width='100%' height='auto'/>
                    <div className='container'>
                        <p>Shelby</p>
                    </div>
                </div>
            </div>
        </div>
            <div className='row'>
                <div className='columnImg'>
                    <div className='card' width='100%'>
                        <img src= { sav } alt='Savannah' width='100%' height='auto'/>
                        <div className='container'>
                            <p>Savannah</p>
                        </div>
                    </div>
                </div>
                <div className='columnImg'>
                    <div className='card' width='100%'>
                        <img src= { nat } alt='Nat' width='100%' height='auto'/>
                        <div className='container'>
                            <p>Nat</p>
                        </div>
                    </div>
                </div>
                <div className='columnImg'>
                    <div className='card' width='100%'>
                        <img src= { Phil } alt='Phil' width='100%' height='auto'/>
                        <div className='container'>
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