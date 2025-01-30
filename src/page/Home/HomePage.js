import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import Typing from "./Typing";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaGoogle } from "react-icons/fa";
import InfoContainer from "../../components/about/InfoContainer";
import profile from "../../images/profile.jpg";

export default function Home() {
  const socialLinks = [
    { href: 'https://github.com/Prime-1-3', icon: <AiFillGithub /> },
    { href: 'https://www.linkedin.com/in/sk-miraz-rahman-ani-00ab6a326/', icon: <FaLinkedinIn /> },
    { href: 'https://www.instagram.com/sk_miraz_rahman/', icon: <AiFillInstagram /> },
    { href: 'https://www.facebook.com/Sk.Miraz.FB.profile', icon: <FaFacebookF /> },
    { href: 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=skmirazrahman18@gmail.com', icon: <FaGoogle /> },
  ];
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1
                style={{ paddingBottom: 15, fontSize: "175px" }}
                className="heading"
              >
                Hello!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏼
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SK MIRAZ RAHMAN ANI</strong>
              </h1>

              <div className="typing-homeclass">
                <Typing />
              </div>
              <div className="sociallink-home">

                <ul className="homeaboutsociallinks">
                  {socialLinks.map((link, index) => (
                    <li className="socialicons" key={index}>
                      <a href={link.href} target="_blank" rel="noreferrer" className="iconcolour homesocialicons">
                        {link.icon}
                      </a>
                    </li>
                  ))}
                </ul>

              </div>
            </Col>
            <Col md={4} style={{ paddingBottom: 20 }}>
              <div className="img-home-main">
                <img
                  src={profile}
                  alt="home pic"
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <InfoContainer />
    </section>
  );
}
