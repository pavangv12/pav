import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    // Collapse the navbar when the route changes
    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    return (
        <div className={`navbar ${expandNavbar ? "open" : "close"}`} id={expandNavbar ? "open" : "close"}>
            {/* Toggle button for smaller screens */}
            <div className="toggleButton">
                <button
                    onClick={() => {
                        setExpandNavbar((prev) => !prev);
                    }}
                >
                    <ReorderIcon />
                </button>
            </div>

            {/* Links container */}
            <div className={`Links ${expandNavbar ? "hiddenLinks" : ""}`}>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects & Papers</Link>
                <Link to="/experience">Experience</Link>
            </div>
        </div>
    );
}

export default Navbar;
