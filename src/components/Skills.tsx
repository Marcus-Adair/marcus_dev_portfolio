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
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "C#",
  "Angular",
  "React",
  "Plotly Dash",
  ".NET",
  "Flask",
  "SQL",
  "Git",
  "Version Control",
  "REST APIs",
  "Agile",
  "Algorithms",
];

const labelsSecond = [
  "Bash",
  "CI/CD",
  "GitHub Actions",
  "AWS",
  "ECS Fargate",
  "AWS Lambda",
  "S3 Storage",
  "Infrastructure as Code (IaC)",
  "CloudFormation",
  "AWS CDK",
  "Docker",
  "Singularity",
  "Monitoring & Logging",
];

const labelsThird = [
  "Research",
  "Academic Writing",
  "Written Communication",
  "Oral Communication",
  "Overleaf",
  "LaTeX",
  "Collaboration",
  "Literature Review",
  "Experimental Design",
  "Presentation Skills",
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
              I have built a wide range of applications using modern
              technologies such as React and Flask. My academic journey—both
              undergraduate and master's studies in Computer Science at the
              University of Utah—has provided me with a strong foundation in
              software development principles and best practices.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Skills:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* DevOps */}
          <div className="skill">
            <FontAwesomeIcon icon={faGear} size="3x" />
            <h3>DevOps</h3>
            <p>
              I have hands-on experience in DevOps through the design and
              deployment of a full-stack web application featuring an AWS Cloud
              workflows. My projects involve AWS Lambda functions, ECS Fargate
              deployment, a Dockerized web-app and Dockerized simulations, and
              more. Additionally, I implemented a CI/CD pipeline that automated
              Docker image building and ECS Fargate deployments.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Skills:</span>
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
              During my undergraduate and graduate studies, I developed strong
              research and communication skills, including designing and
              conducting experiments and collaborating in multi-disciplinary
              research teams. I authored a 10-page academic paper published in
              Proceedings of SC '23 and presented my findings at WORKS23, a
              workshop held at SC '23.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Skills:</span>
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
