import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";
import "react-vertical-timeline-component/style.min.css";

function EducationJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" style={{ backgroundColor: 'transparent' }} to="/education-journey">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" style={{ backgroundColor: 'transparent' }} to="/experience-journey">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" style={{ backgroundColor: 'transparent' }} to="/learning-journey">
          Learning Journey
        </Link>
        <Link className="btn btn-primary m-1" style={{ backgroundColor: 'transparent' }} to="/project-journey">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1 style={{ color: 'white' }}>Qualification Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(45, 45, 45)", color: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(45, 45, 45)" }}
          date="2010 - 2018"
          dateClassName="date-class"
          iconStyle={{ background: "rgb(0, 153, 255)", color: "white", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)" }}
          icon={<SchoolIcon />}
        >
          <h2 style={{ color: 'wheat', fontStyle: 'bold' }}>
            Secondary School Certificate
          </h2>
          <h5 >
            Bagerhat Govt. High School, Bagerhat
          </h5>
          <p className="text-gray-300 mt-2">
            Studied from Class 3 to 10th as a part of secondary school certificate and gained GPA 5 in SSC Examination.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(45, 45, 45)", color: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(45, 45, 45)" }}
          date="2018 - 2020"
          iconStyle={{ background: "rgb(0, 153, 255)", color: "white", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)" }}
          icon={<SchoolIcon />}
        >
          <h2 style={{ color: 'wheat', fontStyle: 'bold' }}>
            Higher Secondary Certificate
          </h2>
          <h5 >
            Govt. P.C. College, Bagerhat
          </h5>
          <p className="text-gray-300 mt-2">
            Studied from Class 11th to 12th as a part of higher secondary certificate and gained GPA 5 in HSC Examination.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(45, 45, 45)", color: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(45, 45, 45)" }}
          date="2022 - ........"
          dateClassName="date-class"
          iconStyle={{ background: "rgb(0, 153, 255)", color: "white", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)" }}
          icon={<SchoolIcon />}
        >
          <h2 style={{ color: 'wheat', fontStyle: 'bold' }}>
            Graduation
          </h2>
          <h5 >
            Khulna University, Khulna
          </h5>
          <p className="text-gray-300 mt-2">
            Studing Bachelor of Science in Computer Science and Engineering at Khulna University.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(0, 153, 255)", color: "white", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default EducationJourney;
