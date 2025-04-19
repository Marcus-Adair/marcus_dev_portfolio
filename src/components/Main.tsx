import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../assets/styles/Main.scss";
import marcus_headshot from "../assets/images/new_marcus_headshot_square.jpg";

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

          {/* <p>
            I'm a tech enthusiast with a passion for building software, solving
            problems, and collaborating with great teams and great people!
          </p>

          <>
            <br />
          </> */}

          <p>
            Currently, I'm pursuing a Master's in Computer Science at the
            University of Utah (U of U) and working as a Graduate Research
            Assistant at the Scientific Computing and Imaging (SCI) Institute at
            the U of U.
          </p>

          <>
            <br />
          </>
          <p>This website is a showcase of some of my projects and work :)</p>

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
