import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer-heading">Many ways to contact me!</h2>
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/pavangv12/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://twitter.com/pavangv12"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <XIcon />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100006385005585"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.instagram.com/pavangv12/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <InstagramIcon />
        </a>
      </div>
      <p className="footer-text"> &copy; 2025 Pavan G V </p>
    </footer>
  );
}

export default Footer;
