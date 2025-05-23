import React from "react";
import ODF_dash_pic_1 from "../assets/images/ODF_dash_pic_2.png";
import ELM_2048_pic from "../assets/images/ELM_2048_pic.png";
import FQs_paper_pic from "../assets/images/ODF_git_paper_2.png";
import SEDE_pic from "../assets/images/SEDE_screenshot.png";
import ALPS_pic from "../assets/images/alps_git_repo_screenshot.png";

import "../assets/styles/Project.scss";

function Project() {
  const project_pic_size = "20rem";

  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          {/*  
            
                ODF
            */}
          <a
            href="https://ondemandfakequakes.org"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={ODF_dash_pic_1}
              className="zoom"
              alt="thumbnail"
              style={{
                width: "100%",
                height: project_pic_size,
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </a>
          <a
            href="https://ondemandfakequakes.org"
            target="_blank"
            rel="noreferrer"
          >
            <h2>On-Demand Fakequakes</h2>
          </a>
          <p>
            For my MS project, I am developing On-Demand Fakequakes, a
            full-stack web application (Python Plotly Dash, Flask) featuring a
            parallel AWS Cloud workflow and a CI/CD pipeline using GitHub
            actions. This project builds on a summer initiative I started as an
            intern at the University of Oregon and is intended for use by NASA.
          </p>
        </div>

        <div className="project">
          {/*  
            
                2048
            */}
          <a
            href="https://marcus-adair.github.io/ELM_2048/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={ELM_2048_pic}
              className="zoom"
              alt="thumbnail"
              style={{
                width: "100%",
                height: project_pic_size,
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </a>
          <a
            href="https://marcus-adair.github.io/ELM_2048/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>ELM 2048 </h2>
          </a>
          <p>
            For my Functional Programming graduate-level course in Spring 2024,
            I recreated the classic game 2048 using ELM, a functional
            programming language.
          </p>
        </div>

        <div className="project">
          {/*  
            
                ALPS
            */}
          <a
            href="https://github.com/Marcus-Adair/alps_project"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={ALPS_pic}
              className="zoom"
              alt="thumbnail"
              style={{
                width: "100%",
                height: project_pic_size,
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </a>
          <a
            href="https://github.com/Marcus-Adair/alps_project"
            target="_blank"
            rel="noreferrer"
          >
            <h2>ALPS</h2>
          </a>
          <p>
            I developed a Python CLI tool called ALPS (Automatic Least-Privilege
            Policy Suggestor) for my Spring 2025 Software & Systems Security
            course. Designed for AWS projects using the Cloud Development Kit
            (CDK), ALPS parses synthesized Python CDK code, identifies insecure
            IAM policies, and suggests least-privilege alternatives through
            warning messages and CDK code snippets.
          </p>
        </div>

        <div className="project">
          {/*  
                SEDE
            */}
          <a
            href="https://drive.google.com/drive/folders/1p6R3zL03XLPOm3x2jNea5T9apxR6reDN?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={SEDE_pic}
              className="zoom"
              alt="thumbnail"
              style={{
                width: "100%",
                height: project_pic_size,
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </a>
          <a
            href="https://drive.google.com/drive/folders/1p6R3zL03XLPOm3x2jNea5T9apxR6reDN?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <h2>
              Spatial Enrichment Data Engine (SEDE) - Senior Capstone Project
            </h2>
          </a>
          <p>
            I served as the front-end lead on SEDE, a geocoding web application
            developed for my BS senior capstone project in collaboration with
            Idaho National Laboratory. The front-end was built with
            Angular/TypeScript and integrated Esri ArcGIS components. Although
            no longer deployed publicly, this project provided valuable insights
            into collaborative software development.
          </p>
        </div>

        <div className="project">
          {/*  
            
                Undergrad Paper
            */}
          <a
            href="https://github.com/Marcus-Adair/Accelerating-Data-Intensive-Seismic-Research-Through-Parallel-Workflow-Optimization-and-Federated-CI"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={FQs_paper_pic}
              className="zoom"
              alt="thumbnail"
              style={{
                width: "100%",
                height: project_pic_size,
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </a>
          <a
            href="https://github.com/Marcus-Adair/Accelerating-Data-Intensive-Seismic-Research-Through-Parallel-Workflow-Optimization-and-Federated-CI"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Fakequakes DAGMan Workflow - Undergraduate Research </h2>
          </a>
          <p>
            While serving as an undergraduate research assistant, I developed
            the Fakequakes Dagman Workflow, a high-throughput computing workflow
            utilizing Bash scripting, Python, HTCondor, Singularity, and other
            tools. This workflow was designed to enable accelerated earthquake
            simulations through Open Science Grid.
          </p>
        </div>

        {/*             
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>High Speed Chase</h2></a>
                <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Astro Raiders</h2></a>
                <p>Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Datum: Integrated Learning Platform</h2></a>
                <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
            </div>
            <div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>WeManage: Real Estate Asset Management</h2></a>
                <p>This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.</p>
            </div>
            <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>COVID-19 Case Management</h2></a>
                <p>Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div> */}
      </div>
    </div>
  );
}

export default Project;
