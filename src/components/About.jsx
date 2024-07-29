import React from "react";
import "../styles/About.css";

import profileImage from "./assets/profile.jpg"; // Add your image in the assets folder

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <p>
          Hello! I am a passionate full stack developer with experience in
          building web applications. I enjoy creating beautiful and functional
          web applications. My skills include JavaScript, React, Node.js, CSS,
          and HTML.
        </p>
      </div>
    </section>
  );
};

export default About;