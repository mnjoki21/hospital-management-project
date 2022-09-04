import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaHeartbeat } from 'react-icons/fa';
import Footer from './Footer';
import Hero from './Hero';
import './NavBar.css'
import Form from './Form';
import './Form.css'
import About from './About'



function App() {
  return (

    <div className="App">

      <Router>
        <nav>
          <h3 className='head'><FaHeartbeat /> TIBASASA!</h3>
          <Link className='nav-links' to='/'>Home</Link>
          <Link className='nav-links' to= '/form'>Booking Form</Link>
          <Link className='nav-links' to= '/doctors'>Doctors</Link>
          <Link className='nav-links' to= '/contacts'>Contact Us</Link>
          <Link className='nav-links' to= '/about'>About Us</Link>
        </nav>
        <Routes>
          <Route path='/' element={ <Hero /> } />
          <Route path='/form' element={ <Form /> } />
          {/* <Route path='/doctors' element={ <Doctors /> } /> */}
          {/* <Route path='/form' element={ <Form /> } /> */}
          <Route path='/footer' element={ <Footer /> } />
          <Route path='/about' element={ <About /> } />
        </Routes>
        <NavBar />
          <Route path="/" />
          <Route path="/doctors" element={<Doctors/>} />
          <Route path="/forms" element={<Forms/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts/>} />
        </Router>
    </div>
 
  );
}

export default App;
