import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Patient from './components/Patient';
import Doctor from './components/Doctor';

function App() {
  return (
    <>
    { /*
    */}
   
    <Navbar/>
  
    
    
    <Routes>
    <Route exact path="/" element= { <Home/>}/>
    <Route path='/registeri' element= { <Register/>}/>
    <Route path='/login' element= { <Login/>}/>
    <Route path = '/patient' element={  <Patient/>}/>
    <Route path = '/doctor' element={  <Doctor/>}/>
   

    </Routes>

   
    </>
  );
}

export default App;
