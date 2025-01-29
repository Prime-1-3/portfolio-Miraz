import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import ComputerIcon from "@mui/icons-material/Computer";
import {
  DiHtml5,
  DiPython,
  DiReact,
  DiPhp,
  DiJava,
  DiCss3,
  DiJavascript1,
  DiMysql,
  DiNodejs,
  DiLaravel,
} from "react-icons/di";
import Flip from "react-reveal/Flip";


function LearningJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" style={{ backgroundColor: "transparent" }} to="/education-journey">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" style={{ backgroundColor: "transparent" }} to="/experience-journey">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" style={{ backgroundColor: "transparent" }} to="/learning-journey">
          Learning Journey
        </Link>
        <Link className="btn btn-primary m-1" style={{ backgroundColor: "transparent" }} to="/project-journey">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1 style={{ color: "white" }}>Learning Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
      background: "rgb(45, 45, 45)",
      color: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    }}
    contentArrowStyle={{ borderRight: "7px solid rgb(45, 45, 45)" }}
    date=""
    iconStyle={{
      background: "rgb(19, 94, 255)",
      color: "white",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    }}
    icon={<ComputerIcon />}
  >
    <h3 className="vertical-timeline-element-title font-bold">C </h3>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
      background: "rgb(45, 45, 45)",
      color: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    }}
    contentArrowStyle={{ borderRight: "7px solid rgb(45, 45, 45)" }}
    date=""
    iconStyle={{
      background: "rgb(19, 94, 255)",
      color: "white",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    }}
    icon={<ComputerIcon />}
  >
    <h3 className="vertical-timeline-element-title font-bold">C++</h3>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
      background: "rgb(45, 45, 45)",
      color: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    }}
    contentArrowStyle={{ borderRight: "7px solid rgb(45, 45, 45)" }}
    date=""
    iconStyle={{
      background: "rgb(19, 94, 255)",
      color: "white",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    }}
    icon={<DiJava />}
  >
    <h3 className="vertical-timeline-element-title font-bold">Java</h3>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
      background: "rgb(45, 45, 45)",
      color: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    }}
    contentArrowStyle={{ borderRight: "7px solid rgb(45, 45, 45)" }}
    date=""
    iconStyle={{
      background: "rgb(19, 94, 255)",
      color: "white",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    }}
    icon={<DiPython />}
  >
    <h3 className="vertical-timeline-element-title font-bold">Python</h3>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
      background: "rgb(45, 45, 45)",
      color: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    }}
    contentArrowStyle={{ borderRight: "7px solid rgb(45, 45, 45)" }}
    date=""
    iconStyle={{
      background: "rgb(19, 94, 255)",
      color: "white",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    }}
    icon={<DiHtml5 />}
  >
    <h3 className="vertical-timeline-element-title font-bold">HTML</h3>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
      background: "rgb(45, 45, 45)",
      color: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    }}
    contentArrowStyle={{ borderRight: "7px solid rgb(45, 45, 45)" }}
    date=""
    iconStyle={{
      background: "rgb(19, 94, 255)",
      color: "white",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    }}
    icon={<DiCss3 />}
  >
    <h3 className="vertical-timeline-element-title font-bold">CSS</h3>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
      background: "rgb(45, 45, 45)",
      color: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    }}
    contentArrowStyle={{ borderRight: "7px solid rgb(45, 45, 45)" }}
    date=""
    iconStyle={{
      background: "rgb(19, 94, 255)",
      color: "white",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    }}
    icon={<DiJavascript1 />}
  >
    <h3 className="vertical-timeline-element-title font-bold">JavaScript</h3>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
      background: "rgb(45, 45, 45)",
      color: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    }}
    contentArrowStyle={{ borderRight: "7px solid rgb(45, 45, 45)" }}
    date=""
    iconStyle={{
      background: "rgb(19, 94, 255)",
      color: "white",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    }}
    icon={<DiMysql />}
  >
    <h3 className="vertical-timeline-element-title font-bold">MySQL</h3>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
      background: "rgb(45, 45, 45)",
      color: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    }}
    contentArrowStyle={{ borderRight: "7px solid rgb(45, 45, 45)" }}
    date=""
    iconStyle={{
      background: "rgb(19, 94, 255)",
      color: "white",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    }}
    icon={<DiPhp />}
  >
    <h3 className="vertical-timeline-element-title font-bold">PHP</h3>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
      background: "rgb(45, 45, 45)",
      color: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    }}
    contentArrowStyle={{ borderRight: "7px solid rgb(45, 45, 45)" }}
    date=""
    iconStyle={{
      background: "rgb(19, 94, 255)",
      color: "white",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    }}
    icon={<DiLaravel />}
  >
    <h3 className="vertical-timeline-element-title font-bold">Laravel</h3>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
      background: "rgb(45, 45, 45)",
      color: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    }}
    contentArrowStyle={{ borderRight: "7px solid rgb(45, 45, 45)" }}
    date=""
    iconStyle={{
      background: "rgb(19, 94, 255)",
      color: "white",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    }}
    icon={<DiNodejs />}
  >
    <h3 className="vertical-timeline-element-title font-bold">Node.js</h3>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
      background: "rgb(45, 45, 45)",
      color: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    }}
    contentArrowStyle={{ borderRight: "7px solid rgb(45, 45, 45)" }}
    date=""
    iconStyle={{
      background: "rgb(19, 94, 255)",
      color: "white",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    }}
    icon={<DiReact />}
  >
    <h3 className="vertical-timeline-element-title font-bold">React</h3>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    iconStyle={{
      background: "rgb(19, 94, 255)",
      color: "white",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    }}
    icon={<StarIcon />}
  />
</VerticalTimeline>
    </div>
  );
}

export default LearningJourney;
