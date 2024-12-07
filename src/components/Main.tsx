import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../assets/styles/Main.scss";
import marcus_headshot from "../assets/images/marcus_headshot.jpeg";

function Main() {
  return (
    <div className="container" id="main">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={marcus_headshot} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/Marcus-Adair"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/marcus-adair-a46aa917a/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>

            <a
              href="mailto:marcus.a.adair@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <EmailIcon />
            </a>
          </div>
          <h1>Marcus Adair 🦈</h1>

          <>
            <br />
          </>

          <p>
            I've been passionate about tech since forever. I enjoy developing
            software applications, solving complex problems, collaborating as
            apart of a team, and more.
          </p>

          <>
            <br />
          </>

          <p>
            I'm currently studying at the University of Utah (UofU) while
            pursuing master of science in Computer Science.
          </p>

          <>
            <br />
          </>

          <p>
            I work as a graduate research assistant for the Scientific Computing
            and Imaging Institute at the UofU.
          </p>

          <>
            <br />
          </>
          <p>This website is a place to present my work and projects :)</p>
          <div className="mobile_social_icons">
            <a
              href="https://github.com/Marcus-Adair"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/marcus-adair-a46aa917a/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
