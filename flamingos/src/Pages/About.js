import React from 'react';
import ReactDOM from 'react-dom/client';
import '../App.css';

function Background(){
    return(
        <>
            <p>meow</p>
        </>
    );
}
const rootBG = ReactDOM.createRoot(document.getElementById('root'))
rootBG.render(<Background/>);
function Team(){
    return(
<>
<p>meow</p>
</>
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