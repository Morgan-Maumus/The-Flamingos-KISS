import React from "react";
import './App.css';
import Navigation from "./Components/Navigation";


function App() {
React.useEffect(() => {
    fetch("/api")
        .then((res) => res.json())

}, []);

  return (
    <>
    <Navigation/>
    </>
   
  );
}
export default App;
