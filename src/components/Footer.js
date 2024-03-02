import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h2>Many ways to contact me!</h2>
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/pavangv12/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://twitter.com/pavangv12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100006385005585"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.instagram.com/pavangv12/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
      </div>
      <p> &copy; 2023 Pavan G V </p>
    </div>
  );
}

export default Footer;
