import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Footer from './Footer';
import Hero from './Hero';
import "./App.css"
import Cards from './Cards';
import Form from './Form';
import NavBar from './NavBar';

function App() {
  
  return (
    <div className='container-fluid'>
      <NavBar />
      <Switch>
        <Route exact path='/form'>
          <Form />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/footer'>
          <Footer />
        </Route>
        <Route exact path='/'>
          <Hero />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
