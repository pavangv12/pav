import './App.css';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
       <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/project/:id" element={<ProjectDisplay/>} />
          <Route path="/experience" element={<Experience/>} />
        </Routes>
        <Footer/>
       </Router>
       <button
         className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
         aria-label="Scroll to top"
       >
         <KeyboardArrowUpIcon fontSize="small" />
       </button>
    </div>
  );
}

export default App;

