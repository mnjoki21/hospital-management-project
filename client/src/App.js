import './App.css';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import Footer from './Footer';
import Hero from './Hero';
import NavBar from './NavBar';
import './NavBar.css'
import Form from './Form';
import './Form.css'


function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
          <Form />
        <Routes>
          <Route path="/"element={ Hero } />
          {/* <Route path="/Doctors" element={ Doctors } /> */}
          <Route path="/Form" element={Form} />
          <Route path="/Footer" element={ Footer } />
          {/* <Route path="/About" element={About} /> */}
          
        </Routes>
        </Router>
      {/* <Hero /> */}
      {/* <Footer />  */}
      {/* <Form /> */}

      
      

    </div>
  );
}

export default App;
