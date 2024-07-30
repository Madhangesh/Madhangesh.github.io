import React from "react";
import "../styles/Header.css";
import profileImage from "./assets/Chris Hemsworth - New pictures of Chris for BOSS Bottled campaign____.jpeg"; // Ensure your image is in the assets folder
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="header-content">
        <div className="header-left">
          <h1>Madhangesh P B</h1>
          <p className="subtitle">Full Stack Developer</p>
          <p className="description">
            I am a passionate full stack developer with experience in building
            web applications. I enjoy creating beautiful and functional web
            applications. My skills include JavaScript,node js,postgresql,
            React, Node.js, CSS, and HTML .
          </p>
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
          <a href="#contact" className="cta-button">
            Contact Me
          </a>
        </div>
        <div className="header-right">
          <img src={profileImage} alt="Profile" className="profile-image1" />
        </div>
      </div>
    </header>
  );
};

export default Header;
