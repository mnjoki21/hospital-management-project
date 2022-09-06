import React, { useState } from 'react';
import { Route, Routes, Switch } from 'react-router-dom';
import About from './About';
import Footer from './Footer';
import Hero from './Hero';
import "./App.css"
import Doctors from './Doctors';
import Form from './Form';
import NavBar from './NavBar';

function App() {
  
  return (
    <div className='container-fluid'>
      <NavBar />
      <Routes>
        <Route exact path='/form' element={<Form/>}/>
          
        <Route exact path='/about' element={<About/>}/>
         
        <Route exact path='/footer' element={<Footer/>}/>
        <Route exact path='/doctors' element={<Doctors/>}/>
        <Route exact path='/' element={<Hero/>}/>
         
      </Routes>
    </div>
  );
}

export default App;
