import './App.css';

import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';

import About from './About';

import Footer from './Footer';
// import About from './About';
import Hero from './Hero';
import NavBar from './NavBar';
import './NavBar.css'
import Cards from './Cards';



function App() {
  return (
    <div className="App">
      <About />


      <Router>
        <NavBar />
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
