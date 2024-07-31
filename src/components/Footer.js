import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
 // Ensure this line imports the CSS file

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-start">
          <Col size={12} sm={3}>
            <img src={logo} alt="Logo" className="mb-3" />
            <p className="text-custom-color">
              FRSG is a leading IT solutions provider specializing in software development, cloud computing, and AI-driven technologies. We are committed to delivering innovative and reliable solutions to our clients.
            </p>
          </Col>
          <Col size={12} sm={3}>
            <h5 className="text-custom-color mt-4">Services</h5>
            <ul className="list-unstyled text-custom-color">
              <li>Digital Consulting & Strategy</li>
              <li>Digital Commerce</li>
              <li>Business Applications</li>
              <li>Data Modernization</li>
              <li>Advanced Analytics</li>
              <li>Connected Intelligence</li>
              <li>Data Management</li>
              <li>Generative AI</li>
              <li>Cloud Operations & Migration</li>
              <li>Cloud Applications Development</li>
              <li>Managed Services</li>
              <li>Digital Infrastructure Services</li>
              <li>Security</li>
              <li>Emerging Technologies</li>
              <li>Business Process Outsourcing</li>
            </ul>
          </Col>
          <Col size={12} sm={3}>
            <h5 className="text-custom-color mt-4">Industries</h5>
            <ul className="list-unstyled text-custom-color">
              <li>Telecommunications</li>
              <li>Banking & Finance</li>
              <li>Public Sector</li>
              <li>Healthcare & Pharmaceutical</li>
              <li>Retail & CPG</li>
            </ul>
            <h5 className="text-custom-color mt-4">Insights</h5>
            <ul className="list-unstyled text-custom-color">
              <li>Case Studies</li>
              <li>Newsroom</li>
              <li>Whitepapers / EBooks</li>
              <li>Blogs</li>
            </ul>
          </Col>
          <Col size={12} sm={3} className="text-center text-sm-end">
            <h5 className="text-custom-color mt-4">Quick Links</h5>
            <ul className="list-unstyled text-custom-color">
              <li>Who we are</li>
              <li>Careers</li>
              <li>Our Leadership</li>
              <li>Investor Relation</li>
              <li>Financial Reports</li>
            </ul>
            <h5 className="text-custom-color">Follow Us</h5>
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col size={12} className="text-center mt-3">
            <p className="text-custom-color">© Copyright FRSG 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
