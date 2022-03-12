import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Patient from './components/Patient';

function App() {
  return (
    <>
    { /*
    */}
   
    <Navbar/>
  
    
    
    <Routes>
    <Route exact path="/" element= { <Home/>}/>
    <Route path='/register' element= { <Register/>}/>
    <Route path='/login' element= { <Login/>}/>
    <Route path = '/patient' element={  <Patient/>}/>
   

    </Routes>

   
    </>
  );
}

export default App;
