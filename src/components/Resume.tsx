import React from "react";
import "../assets/styles/Resume.scss";
import Button from "@mui/material/Button";

import DownloadIcon from "@mui/icons-material/Download";

function Resume() {
  const resume_path = "/Marcus_Adair_Resume_v2.pdf";

  return (
    <div className="resume-container" id="resume">
      <div className="resume">
        <br></br>
        <h1>Resume</h1>

        <div className="resume-actions">
          {/* <a download>
            <button className="download-button">Download Resume</button>
          </a> */}

          <Button
            variant="contained"
            endIcon={<DownloadIcon />}
            onClick={() => {
              const link = document.createElement("a");
              link.href = resume_path;
              link.download = "Marcus_Adair_Resume.pdf";
              link.click();
            }}
          >
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Resume;
