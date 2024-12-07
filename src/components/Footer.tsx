import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <a>© 2024 Marcus Adair. All rights reserved.</a>
        <a> </a>
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
    </footer>
  );
}

export default Footer;
