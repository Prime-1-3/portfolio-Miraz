import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const About = () => {
  // Animation Variants
  const slideLeft = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  return (
    <div>
      <Container>
        <Row className="mt-5">
          {/* Left Column */}
          <Col md={5}>
            <motion.div
              variants={slideLeft}
              initial="hidden"
              animate="visible"
              transition={{ type: "spring", stiffness: 50 }}
            >
              <div>
                <lottie-player
                  src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "100%", height: "90%" }}
                  loop
                  autoplay
                ></lottie-player>
              </div>
            </motion.div>
          </Col>

          {/* Right Column */}
          <Col md={7}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible">
              <p className="home-about-body">
                Hi there! I'm <span className="purple">Sk Miraz Rahman Ani</span>, a passionate
                <span className="purple">Computer Science and Engineering</span> student at
                <span className="purple">Khulna University</span> in Khulna, Bangladesh.
                <br />
                <br />
                I have a strong foundation in programming and enjoy working with languages like{" "}
                <span className="purple">C, C++, Java, Python, HTML, CSS, PHP, and JavaScript.</span>
                <br />
                <br />
                My experience extends to popular frameworks and libraries, including{" "}
                <span className="purple">NodeJS, ReactJS, OpenCV, Pandas, and NumPy.</span>
                I'm always excited to leverage these tools to bring innovative ideas to life.
                <br />
                <br />
                I’m especially passionate about creating impactful projects using{" "}
                <span className="purple">modern JavaScript libraries and frameworks.</span>
                <br />
                <br />
                When I'm not coding, I love exploring new technologies and experimenting with{" "}
                <span className="purple">web development and cutting-edge tech solutions.</span>
              </p>

            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
