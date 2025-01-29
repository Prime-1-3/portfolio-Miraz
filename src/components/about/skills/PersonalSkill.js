import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import LightSpeed from 'react-reveal/LightSpeed';

export default function PersonalSkill() {
    const skills = [
        { name: "Communication Skills", percentage: "75%", color: "#fe3e57", width: "75%" },
        { name: "Project Management", percentage: "85%", color: "#54faae", width: "85%" },
        { name: "Problem Solving", percentage: "81%", color: "#ff8c2f", width: "81%" },
        { name: "Analytical Abilities", percentage: "77%", color: "#f1f965", width: "77%" },
        { name: "Organization", percentage: "87%", color: "#ff0173", width: "87%" },
        { name: "Creativity", percentage: "79%", color: "#39c4ff", width: "79%" },
    ];
    return (
        <div>
            <div className="mt-5 d-flex flex-row justify-content-center">
                <Link className="btn btn-primary me-3" style={{ backgroundColor: "transparent" }} to="/technical-skill">Technical Skill</Link>
                <Link className="btn btn-primary me-3" style={{ backgroundColor: "transparent" }} to="/personal-skill">Personal Skill</Link>
            </div>
            <LightSpeed left cascade>
                <h1 style={{ marginTop: "50px", color: "white" }}>Personal Skills</h1>
            </LightSpeed>
            <div className="mt-4">
                <Container>
                    <Row className='g-5'>
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
    )
}
