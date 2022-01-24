import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Footer = () => {
  return (
    <>
      <Container fluid className="bg-dark text-white ft py-4">
        <Row className="footer-text">
          <Col>
            <p>
              Welcome to Study+. We make education easy and interesting. Gone
              are the days where you learn by cramming.
            </p>
          </Col>
          <Col>
            <p>
              Now learn with Augmented Reality and experience depths of
              knowledge. Chat with your peers and feel live classroom
            </p>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li>
                <h5>Our Links</h5>
              </li>
              <LinkContainer to="/">
                <li className="links">Home</li>
              </LinkContainer>
              <LinkContainer to="/about">
                <li className="links">About</li>
              </LinkContainer>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>Copyright &copy; 2021 Study+</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
