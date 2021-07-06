import React from "react";
import './App.css';
import Header from "./components/Header"
import TinderCards from "./components/TinderCards.js"
import SwipeButton from "./components/SwipeButton.js"

function App() {
  return (
    <div className="App">
    
      
    <Header/>
    <TinderCards/>
    <SwipeButton/>
    </div>
  )
}

export default App;
