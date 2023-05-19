import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

import "../styles/footer.css";

const Footer = () => {
    return (
      <Container fluid className="footer py-3">
        <Row className="justify-content-center">
          <Col className="d-flex justify-content-center">
            <a href="https://github.com/ttieman" target="_blank" rel="noopener noreferrer" className="mx-2">
              <FaGithub size={30} />
            </a>
            <a href="https://twitter.com/kindredreality" target="_blank" rel="noopener noreferrer" className="mx-2">
              <FaTwitter size={30} />
            </a>
            <a href="https://www.linkedin.com/in/tanner-tieman-74b27625a/" target="_blank" rel="noopener noreferrer" className="mx-2">
              <FaLinkedin size={30} />
            </a>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default Footer;