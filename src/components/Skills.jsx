import React from "react";
import "../styles/Skills.css";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skill-item">
          <FaReact /> React
        </div>
        <div className="skill-item">
          <FaNodeJs /> Node.js
        </div>
        <div className="skill-item">
          <FaNodeJs /> Express.js
        </div>
        <div className="skill-item">
          <DiPostgresql /> Postgresql
        </div>
        <div className="skill-item">
          <FaJs /> JavaScript
        </div>
        <div className="skill-item">
          <FaCss3Alt /> CSS
        </div>
        <div className="skill-item">
          <FaHtml5 /> HTML
        </div>
      </div>
    </section>
  );
};

export default Skills;