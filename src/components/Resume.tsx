import React from "react";
import "../assets/styles/Resume.scss";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

function Resume() {
  // const resume_path = `${process.env.PUBLIC_URL}/Marcus_Adair_Resume_v2.pdf`;
  // const resume_path = `${process.env.PUBLIC_URL}/Marcus_Adair_Resume_v5.pdf`;
  const resume_path = `${process.env.PUBLIC_URL}/Marcus_Adair_Resume.pdf`;

  return (
    <div className="resume-container" id="resume">
      <div className="resume">
        <br />
        <h1>Resume</h1>

        {/* PDF Preview Section */}
        <div className="resume-preview">
          <iframe
            src={resume_path}
            title="Resume Preview"
            width="100%"
            height="500px"
            style={{ border: "1px solid #ccc" }}
          />
        </div>

        {/* Download Button */}
        <div className="resume-actions">
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
