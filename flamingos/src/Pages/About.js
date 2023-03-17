import React from 'react';

function Header(){
    return(
        <div className='kissHeader'>
            K.I.S.S.
        <div className='logoText'><u>Meet the Keep It Simple, Stupid Team!</u>
            </div>
        </div>
    );
}

function Body(){
    return(
        <Header/>
    )
}

function About(){

    return (
        <Body/>
    )
}
export default About;