import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faSchool } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  const icon_background = "#0ABAB5";

  return (
    <div id="history">
      <div className="items-container">
        <h1>Profesional History</h1>
        <VerticalTimeline>
          {/* Grad Research Position */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Aug. 2023 - present"
            iconStyle={{
              background: icon_background,
              color: "rgb(39, 40, 34)",
            }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Scientific Computing and Imaging Institute
            </h3>
            <h3 className="vertical-timeline-element-title">
              Graduate Research Assistant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Salt Lake City, UT
            </h4>
            <p>TODO: add skills/tasks</p>
          </VerticalTimelineElement>

          {/* Oregon Internship */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="May 2024 - Aug. 2024"
            iconStyle={{
              background: icon_background,
              color: "rgb(39, 40, 34)",
            }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              University of Oregon
            </h3>
            <h3 className="vertical-timeline-element-title">
              Full Stack Engineer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Eugene, OR | Salt Lake City, UT
            </h4>
            <p>TODO: add skills/tasks</p>
          </VerticalTimelineElement>

          {/* Undergrad Research Position */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="May 2022 - Aug. 2023"
            iconStyle={{
              background: icon_background,
              color: "rgb(39, 40, 34)",
            }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Scientific Computing and Imaging Institute
            </h3>
            <h3 className="vertical-timeline-element-title">
              Undergraduate Research Assistant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Salt Lake City, UT
            </h4>
            <p>TODO: add skills/tasks</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
