import React from 'react';
import '../App.css';
import jackjack from '../Images/jackjack.jpg';
import nat from '../Images/nat.png';
import Shelbs from '../Images/Shelbs.jpg';
import lana from '../Images/lana.jpg';
import sav from '../Images/sav.jpg';
import Phil from '../Images/Phil.jpg';


function Header() {
    return (
        <div className='containHeader'>
            <div className='kissHeader'><i>K.I.S.S.</i></div>
            <div className='logoText'><u>Meet the Keep It Simple, Stupid Team!</u> </div>
        </div>
    )
}
function Body(){
    return(
        <>
            <p className='aboutDescription'>
                <h2>What is K.I.S.S.?</h2>
                KISS is an acronym for the phrase Keep It Simple, Stupid. It was taught to us by Professor Patti Aymond
                that then inspired us to create this web application. With this application we intend to promote an ease of work-life balance
                by offering students the opportunity to simplify their tasks. Our application
                takes complicated generalized tasks and makes them into stupid simple tasks,
                for stupidly simple solving.
            </p>

            <div className='containCard'>
                <div className='row'>
                <div className='columnImg'>
                    <div className='card'>
                        <img src= { jackjack } alt='Jack' width='100%' height='auto'/>
                        <div className='containTxt'>
                            <p>Jack</p>
                        </div>
                    </div>
                </div>

                <div className='columnImg'>
                    <div className='card'>
                        <img src= { lana } alt='Lana' width='100%'/>
                        <div className='containTxt'>
                            <p>Lana</p>
                        </div>
                    </div>
                </div>

                <div className='columnImg'>
                    <div className='card'>
                        <img src= { Shelbs } alt='Shelby' width='100%' height='auto'/>
                        <div className='containTxt'>
                            <p>Shelby</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className='containCard'>
                <div className='row'>

                    <div className='columnImg'>
                        <div className='card'>
                            <img src= { sav } alt='Savannah' width='100%' height='auto'/>
                            <div className='containTxt'>
                            <p>Savannah</p>
                        </div>
                        </div>
                    </div>

                    <div className='columnImg'>
                        <div className='card'>
                            <img src= { nat } alt='Nat' width='100%' height='auto'/>
                            <div className='containTxt'>
                            <p>Nat</p>
                        </div>
                        </div>
                    </div>

                    <div className='columnImg'>
                        <div className='card'>
                            <img src= { Phil } alt='Phil' width='100%' height='auto'/>
                            <div className='containTxt'>
                            <p>Phil</p>
                        </div>
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