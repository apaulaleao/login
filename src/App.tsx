import React from 'react';
import './App.css';
import { Route, Routes , Link } from 'react-router-dom';
import Home from './pages/Home';
import Private from './pages/Private';

function App() {
  return (
    
   
    <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/private" element ={<Private/>}/>
      

      </Routes>
      
   
  );
}

export default App;
