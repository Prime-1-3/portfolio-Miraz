import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaGoogle } from "react-icons/fa";

function FooterComponent() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by</h3> 
          <h3>SK MIRAZ RAHMAN ANI</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} </h3>
            <h3>Sk Miraz Rahaman Ani</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="socialicons">
              <a
                href="https://github.com/Prime-1-3"
                style={{ color: "white", textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="socialicons">
              <a
                href="https://www.linkedin.com/in/sk-miraz-rahman-ani-00ab6a326/"

                style={{ color: "white", textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="socialicons">
              <a
                href="https://www.instagram.com/sk_miraz_rahman/"

                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="socialicons">
              <a
                href="https://www.facebook.com/Sk.Miraz.FB.profile"

                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="socialicons">
              <a
                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=skmirazrahman18@gmail.com"

                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGoogle />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default FooterComponent;
