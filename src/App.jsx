import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="notebook-container">
        <div className="notebook-page">
          <div className="notebook-lines"></div>
          <div className="notebook-margin"></div>
          <div className="notebook-holes">
            <div className="hole"></div>
            <div className="hole"></div>
            <div className="hole"></div>
          </div>
          <Navbar />
          <div className="content-area">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;