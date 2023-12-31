import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  const currentyear = new Date().getFullYear();
  return (
    <footer>
        <Container>
            <Row>
                <Col>
                <p>Happy Store &copy : {currentyear}</p>
                </Col>
            </Row>
            
        </Container>
</footer>
  );
};

export default Footer;
