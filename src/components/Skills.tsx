import React from "react";
import "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBook, faGear } from "@fortawesome/free-solid-svg-icons";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faReact,
//   faDocker,
//   faPython,
// } from "@fortawesome/free-brands-svg-icons";

import Chip from "@mui/material/Chip";
import "../assets/styles/Skills.scss";

const labelsFirst = [
  "Python",
  "Plotly Dash",
  "React",
  "Angular",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Flask",
  "Python",
  "SQL",
  "Git",
];

const labelsSecond = [
  "GitHub Actions",
  "AWS",
  "CloudFormation",
  "Docker",
  "Singularity",
];

const labelsThird = [
  "Academic Writing",
  "Overleaf",
  "Communication",
  "Collaboration",
  "Research",
];

function Skills() {
  return (
    <div className="container" id="skills">
      <div className="skills-container">
        <h1>Skills</h1>
        <div className="skills-grid">
          {/*   Full-Stack */}
          <div className="skill">
            <FontAwesomeIcon icon={faCode} size="3x" />
            <h3>Software Development</h3>
            <p>
              I have built a diverse array of web applications from scratch
              using modern technologies such as React and Flask. I have a strong
              proficiency in the SDLC process and frontend + backend
              development.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* DevOps */}
          <div className="skill">
            <FontAwesomeIcon icon={faGear} size="3x" />
            <h3>DevOps</h3>
            <p>.....</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Reseearch */}
          <div className="skill">
            <FontAwesomeIcon icon={faBook} size="3x" />
            <h3>Research</h3>
            <p>
              As an undergraduate and graduate student, I conducted research at
              the Scientific Computing and Imaging Institude in Salt Lake City.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div> */}

          {/* <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div> */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
