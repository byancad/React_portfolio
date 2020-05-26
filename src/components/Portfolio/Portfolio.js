import React from "react";
import "./Portfolio.css";
import { Card, Button, Row, Col } from "react-bootstrap";

const Portfolio = () => {
  return (
    <container>
      <div className="header" style={{ marginTop: "124px" }}>
        Portfolio
      </div>
      <Row style={{ textAlign: "center" }}>
        <Col>
          <Card>
            <Card.Img />
            <Card.Body>
              <Card.Title>Its Always Sunny Memory Game</Card.Title>
              <Card.Text>
                A fun game that lets you test your memory built with React.
              </Card.Text>
              <Button variant="secondary">
                <a href="https://dog-react-memory-game.herokuapp.com/">
                  Visit Site
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img />
            <Card.Body>
              <Card.Title>Google Books Review</Card.Title>
              <Card.Text>
                A web application that allows the user to search and save books
                using a google books api. This application was built following
                the MERN stack.
              </Card.Text>
              <Button variant="secondary">
                <a href="https://google-react-bya.herokuapp.com/">Visit Site</a>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img />
            <Card.Body>
              <Card.Title>Rate My Sitter</Card.Title>
              <Card.Text>
                A group collaboration on a web aplication that allows parents to
                sign up or login to review babysiiters, post gigs, and find
                recommendations. Built using handlebars and React.
              </Card.Text>
              <Button variant="secondary">
                <a href="https://rate-my-sitter.herokuapp.com/">Visit Site</a>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Img />
            <Card.Body>
              <Card.Title>Parks (+) </Card.Title>
              <Card.Text>
                Finding your trail has never been so easy. Enter what state you
                are interested in and you are given a large selection of state
                parks and trails to go out and adventure.
              </Card.Text>
              <Button variant="secondary">
                <a href="https://byancad.github.io/Find_Your_Trail/">
                  Visit Site
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img />
            <Card.Body>
              <Card.Title>Qiknote </Card.Title>
              <Card.Text>
                A place to have your notes for safekeeping. Login and create,
                edit and delete notes.
              </Card.Text>
              <Button variant="secondary">
                <a href="https://qiknote-application.herokuapp.com/">
                  Visit Site
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img />
            <Card.Body>
              <Card.Title>Qiknote </Card.Title>
              <Card.Text>
                A place to have your notes for safekeeping. Login and create,
                edit and delete notes.
              </Card.Text>
              <Button variant="secondary">
                <a href="https://qiknote-application.herokuapp.com/">
                  Visit Site
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </container>
  );
};

export default Portfolio;
