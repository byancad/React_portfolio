import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import pic from "../../images/IMG_6487.jpeg";
import "./AboutMe.css";
const AboutMe = () => {
  console.log("AboutMe rendering");

  return (
    <Container>
      <Row className="about">
        <Col xs={6} md={6}>
          <Image src={pic} roundedCircle />
        </Col>

        <Col style={{ marginTop: "44px" }}>
          <p style={{ fontSize: "40px " }}>Hello.</p>
          <p style={{ fontSize: "60px" }}>I am Byanca</p>
          <p style={{ fontSize: "40px" }}>Full-Stack Web Developer</p>
          <p style={{ fontSize: "15px" }}>Based in Austin</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
