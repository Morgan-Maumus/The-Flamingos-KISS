import React from 'react';
import ReactDOM from 'react-dom/client';
import '../App.css';

function Background(){
    return(

    );
}
const rootBG = ReactDOM.createRoot(document.getElementById('root'))
rootBG.render(<Background/>);
function Team(){
    return(

    );
}
const rootT = ReactDOM.createRoot(document.getElementById('root'))
rootT.render(<Team/>);

function About(){

    return (
        <div>
            <Team />
            <Background />
        </div>
    );
}
export default About;