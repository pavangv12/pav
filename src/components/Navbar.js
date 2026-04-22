import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${expandNavbar ? 'open' : 'close'} ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-brand">
                <Link to="/" className="brand-link">PGV</Link>
            </div>

            <div className="navbar-links">
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
                <Link to="/experience" className={location.pathname === '/experience' ? 'active' : ''}>Experience</Link>
            </div>

            <div className="toggleButton">
                <button onClick={() => setExpandNavbar(prev => !prev)} aria-label="Toggle menu">
                    {expandNavbar ? <CloseIcon /> : <ReorderIcon />}
                </button>
            </div>

            <div className={`mobile-menu ${expandNavbar ? 'open' : ''}`}>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
                <Link to="/experience" className={location.pathname === '/experience' ? 'active' : ''}>Experience</Link>
            </div>
        </nav>
    );
}

export default Navbar;

