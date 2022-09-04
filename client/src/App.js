import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaHeartbeat } from 'react-icons/fa';
import About from './About';
import Footer from './Footer';
import Hero from './Hero';
import './NavBar.css'
import Cards from './Cards';


import Form from './Form';
import './Form.css'
// import About from './About'

function App() {
  return (

    <div className="App">
      <About />
      <Router>
        <nav>
          <h3 className='head'><FaHeartbeat /> TIBASASA!</h3>
          <Link className='nav-links' to='/'>Home</Link>
          <Link className='nav-links' to= '/form'>Booking Form</Link>
          <Link className='nav-links' to= '/doctors'>Doctors</Link>
          <Link className='nav-links' to= '/footer'>Contact Us</Link>
          <Link className='nav-links' to= '/about'>About Us</Link>
        </nav>
        <Routes>
          <Route path="/"element={ Hero } />
          {/* <Route path="/Doctors" element={ Doctors } /> */}
          {/* <Route path="/Form" element={Form} /> */}
          <Route path="/Footer" element={ Footer } />
          <Route path="/About" element={About} />
          
        </Routes>
        </Router>
      <Cards />

      
      



    </div>
 
  );
}

export default App;
