import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-brand gradient-text">Pavan G V</span>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/pavangv12/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon fontSize="small" /></a>
          <a href="https://github.com/pavangv12" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon fontSize="small" /></a>
          <a href="https://twitter.com/pavangv12" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><XIcon fontSize="small" /></a>
          <a href="https://www.instagram.com/pavangv12/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon fontSize="small" /></a>
        </div>
        <p className="footer-copy">&copy; 2025 Pavan G V &mdash; Built with React</p>
      </div>
    </footer>
  );
}

export default Footer;
