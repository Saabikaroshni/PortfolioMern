import React from "react";
import "../css/Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>

      <div className="project">
        <h3>Fire Detection in EV</h3>
        <p>
          Built a device to detect fire in Electric Vehicles using sensor (YG1006), NodeMCU, and Arduino IDE.
          The system enhances vehicle safety by providing early fire detection.
        </p>
        <a href="https://github.com/Saabikaroshni/Fire-Detection-in-EV" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>

      <div className="project">
        <h3>Portfolio Website</h3>
        <p>
          A personal portfolio website showcasing my skills, projects, and achievements. Built using React, HTML, CSS, and JavaScript.
        </p>
      </div>

      <div className="project">
        <h3>Weather App</h3>
        <p>
          A simple weather application that fetches real-time weather data using an API. Displays temperature, humidity, and weather conditions.
        </p>
      </div>
    </div>
  );
}

export default Projects;
