import React from "react";
import "../styles/Projects.css";


const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-item">
        <h3>WishList App</h3>
        <p>
          A wish list App with all the CRUD operation with frontend as well as
          backend
        </p>
      </div>
      <div className="project-item">
        <h3>SuperMarket App</h3>
        <p>
          A SuperMArket app which is a good user friendly app which is developed
          with both frontend and backend with postgresql database.
        </p>
      </div>
      <div className="project-item">
        <h3>BMS App</h3>
        <p>
          An app that provides access to courses, assessments, and learning
          nuggets for learners, trainers, and people managers.
        </p>
      </div>
      <div className="project-item">
        <h3>Notes Keeper App</h3>
        <p>
          Notes Keeper is a note-taking app that lets you take quick notes on
          the go. It has a simple interface and powerful features
        </p>
      </div>
    </section>
  );
};

export default Projects;