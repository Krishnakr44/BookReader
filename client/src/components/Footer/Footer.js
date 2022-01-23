import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <Container fluid className="bg-dark text-white ft py-4">
        <Row className="footer-text">
          <Col lg={true}>
            <p>7Book is the best app</p>
          </Col>
          <Col lg={true}>
            <p>It is just the best</p>
          </Col>
          <Col lg={true}>
            <ul className="list-unstyled">
              <li>
                <h5>Developer Links</h5>
              </li>
              <a
                href="https://www.linkedin.com/in/rharshit82/"
                target="blank"
                style={{ color: "lightgreen" }}
              >
                <li className="links">Linkedin</li>
              </a>
              <a
                href="https://github.com/rharshit82"
                target="blank"
                style={{ color: "lightgreen" }}
              >
                <li className="links">Github</li>
              </a>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>Copyright &copy; 2021 7Book</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
