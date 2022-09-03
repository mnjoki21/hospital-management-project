import './App.css';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import Footer from './Footer';
import Hero from './Hero';
import NavBar from './NavBar';
import './NavBar.css'


function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
        <Routes>
          <Route path="/"element={ Hero } />
          {/* <Route path="/Doctors" element={ Doctors } /> */}
          {/* <Route path="/Form" element={Form} /> */}
          <Route path="/Footer" element={ Footer } />
          {/* <Route path="/About" element={About} /> */}
          
        </Routes>
        </Router>
      <Hero />
      <Footer />

      
      

    </div>
  );
}

export default App;
