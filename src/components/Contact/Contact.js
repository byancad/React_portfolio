import React from "react";
import { Card, Row, Col, Button, Image, Container } from "react-bootstrap";
import "./Contact.css";
import pic from "../../images/github.png";
import pic2 from "../../images/linked.png";
import pic3 from "../../images/IMG_6487.jpeg";

class Contact extends React.Component {
  btnClick() {
    window.location.href = "http://linkedin.com/in/byancadlf";
  }
  gitClick() {
    window.location.href = "http://github.com/byancad";
  }
  render() {
    return (
      <div className="contact-div">
        <Container>
          <Card
            style={{
              backgroundColor: "rgba(245, 201, 228, 0.247)",
              marginTop: "75px",
              height: "100%",
              width: "100%"
            }}
          >
            <Card.Body className="contact-body">
              <Row style={{ marginTop: "-5px" }}>
                <h1>Let's Connect </h1>
              </Row>
              <Row>
                <Col style={{ marginTop: "150px" }}>
                  <div>
                    <p>
                      <Button onClick={this.btnClick.bind(this)}>
                        <Image src={pic2} />
                      </Button>
                      Message me on Linkedin!
                    </p>
                  </div>
                  <div>
                    <p>
                      <Button onClick={this.gitClick.bind(this)}>
                        <Image src={pic} />
                      </Button>
                      Check out my code on Github!
                    </p>
                  </div>
                </Col>
                <Col xs={6} md={6}>
                  <Image src={pic3} roundedCircle />
                </Col>
              </Row>
              <Row className="row3">
                <Col>
                  <p>For inquiries please email me at byancadlf@gmail.com</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}
export default Contact;
