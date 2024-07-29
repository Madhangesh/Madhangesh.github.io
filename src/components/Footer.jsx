import React from "react";
import "../styles/Footer.css"
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Contact Me</h2>
          <p>Email: pbmadhangesh@gmail.com</p>
          <p>Phone: 7010166376</p>
        </div>
        <div className="footer-center">
          <h2>Follow Me</h2>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <h2>About Me</h2>
          <p>
            I am a full stack developer passionate about creating engaging and
            functional web applications. Let's connect and build something
            amazing!
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Madhangesh P B. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
