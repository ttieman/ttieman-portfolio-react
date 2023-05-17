import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
    return (
        
        <Container fluid className="footer">
            <Row className="justify-content-center">
                <Col className="d-flex justify-content-center">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} className="mx-2"/>
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={30} className="mx-2"/>
                    </a>
                    <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} className="mx-2"/>
                    </a>
                </Col>
            </Row>
        </Container>
           
    );
};

export default Footer;