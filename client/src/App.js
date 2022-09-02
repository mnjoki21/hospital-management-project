import './App.css';
import { BrowserRouter as Router , Route, Routes, Switch } from 'react-router-dom';
import Footer from './Footer';
import Hero from './Hero';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/doctors' element={ <Doctors /> } />
           <Route path='/contacts' element={<Footer />} />
            <Route path='/about' element={<About />} />

        </Routes>
      </Router>

      <Hero />

      
      

    </div>
  );
}

export default App;
