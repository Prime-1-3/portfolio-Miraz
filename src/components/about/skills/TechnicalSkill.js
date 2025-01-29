import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Tada from "react-reveal/Tada";

export default function TechnicalSkill() {
  const skills = [
    { name: "C", percentage: "75%", color: "#fe3e57", width: "85%" },
    { name: "C++", percentage: "75%", color: "#54faae", width: "85%" },
    { name: "Python", percentage: "80%", color: "#39c4ff", width: "90%" },
    { name: "JavaScript", percentage: "71%", color: "#f1f965", width: "81%" },
    { name: "MySQL", percentage: "68%", color: "#ff0173", width: "88%" },
    { name: "NodeJS", percentage: "66%", color: "#ff8c2f", width: "86%" },
    { name: "ReactJS", percentage: "78%", color: "#41f2ff", width: "86%" },
    { name: "PHP", percentage: "75%", color: "#fe3e57", width: "85%" },
    { name: "Java", percentage: "75%", color: "#54faae", width: "85%" },
  ];

  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" style={{ backgroundColor: "transparent" }} to="/technical-skill">
          Technical Skill
        </Link>
        <Link className="btn btn-primary me-3" style={{ backgroundColor: "transparent" }} to="/personal-skill">
          Personal Skill
        </Link>
      </div>
      <Tada>
        <h1 style={{ marginTop: "50px", color: "white" }}>Technical Skills</h1>
      </Tada>
      <div className="mt-5">
        <Container>
          <Row className="g-5">
            {skills.map((skill, index) => (
              <Col md={4} className="skill-box" key={index}>
                <h1 className="skill-percentage" style={{ color: skill.color }}>
                  {skill.percentage}
                </h1>
                <div className="skill-content">
                  <div className="progress">
                    <div
                      role="progressbar"
                      aria-valuenow={parseInt(skill.width)}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      className="progress-bar"
                      style={{ width: skill.width, backgroundColor: skill.color }}
                    ></div>
                  </div>
                  <h2 className="skill-title" style={{ color: skill.color }}>
                    {skill.name}
                  </h2>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
