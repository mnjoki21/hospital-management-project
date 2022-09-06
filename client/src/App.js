import React, { useState } from 'react';
import { Route, Routes,} from 'react-router-dom';
import About from './About';
import Hero from './Hero';
import "./App.css"
import Doctors from './Doctors';
import Form from './Form';
import NavBar from './NavBar';
import Footer from "./Footer"
import ContactUs from './ContactUs';
import './ContactUs.css';

function App() {
  
  return (
    <div className='container-fluid'>
      <NavBar />
      <Routes>
        <Route exact path='/form' element={<Form/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/doctors' element={<Doctors/>}/>
        <Route exact path='/contactus' element={<ContactUs />} />
        <Route exact path='/' element={<Hero/>}/>
         
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
