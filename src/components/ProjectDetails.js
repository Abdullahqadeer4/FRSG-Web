import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import projectImage1 from '../assets/img/project-img1.png';
import projectImage2 from '../assets/img/project-img2.png';
import projectImage3 from '../assets/img/project-img3.png';

export const ProjectDetails = () => {

  const navigate = useNavigate();
  return (
    <section className="project-details">
      <Container>
      <Row className="justify-content-center text-center">
          <Col md={8}>
            <h1>Our Projects</h1>
            <p className="intro-text">
              Welcome to our projects page! Here, you will find a showcase of our latest and greatest work. Each project is a testament to our dedication, expertise, and passion for delivering top-notch solutions. Dive in and explore the details of each project to see how we bring ideas to life.
            </p>
            <Button className="ret-button ret-button-gradient ret-button-animated ret-button-large" onClick={() => navigate('/')}>Code Meha</Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <h1>Project Title</h1>
            <Image src={projectImage1} fluid className="project-image" />
            <p className="project-description">
              This is a detailed view of the selected project. You can add more details and styling as needed.
              This is a detailed view of the selected project. You can add more details and styling as needed.
              This is a detailed view of the selected project. You can add more details and styling as needed.
              This is a detailed view of the selected project. You can add more details and styling as needed.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
      <Row className="justify-content-center">
      <Col md={8}>
            <h1>Project Title</h1>
            <Image src={projectImage2} fluid className="project-image" />
            <p className="project-description">
              This is a detailed view of the selected project. You can add more details and styling as needed.
              This is a detailed view of the selected project. You can add more details and styling as needed.
              This is a detailed view of the selected project. You can add more details and styling as needed.
              This is a detailed view of the selected project. You can add more details and styling as needed.
            </p>
          </Col>
        </Row>
        <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h1>Project Title</h1>
            <Image src={projectImage3} fluid className="project-image" />
            <p className="project-description">
              This is a detailed view of the selected project. You can add more details and styling as needed.
              This is a detailed view of the selected project. You can add more details and styling as needed.
              This is a detailed view of the selected project. You can add more details and styling as needed.
              This is a detailed view of the selected project. You can add more details and styling as needed.
            </p>
          </Col>
        </Row>
      </Container>
      </Container>
    </section>
  );
};
