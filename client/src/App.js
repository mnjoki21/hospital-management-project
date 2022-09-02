import './App.css';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Footer from './Footer';
import Hero from './Hero';
import NavBar from './NavBar';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
          <Route path="/" />
          <Route path="/doctors" element={Doctors} />
          <Route path="/forms" element={Forms} />
          <Route path="/about" element={About } />
          <Route path="/contacts" element={Contacts} />
        </Router>
      <Hero />
      <Footer />

      
      

    </div>
  );
}

export default App;
