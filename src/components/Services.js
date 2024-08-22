import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import webDevIcon from "../assets/img/web-development-svgrepo-com.svg";  // Add appropriate icons
import mobileAppsIcon from "../assets/img/mobile-alt-2-svgrepo-com.svg";
import aiDataIcon from "../assets/img/ai-ai-svgrepo-com.svg";
import softwareSolutionsIcon from "../assets/img/software-developer-work-on-computer-programmer-coder-svgrepo-com.svg";
import seoIcon from "../assets/img/seo-3-svgrepo-com.svg";
import digitalMarketingIcon from "../assets/img/marketing-digital-development-business-service-svgrepo-com.svg";

export const Services = () => {
  return (
    <section className="services" id="services">
      <Container>
        <h2 className="text-center">Discover the Spectrum of our Services</h2>
        <Row className="g-4"> {/* Added g-4 for spacing between columns */}
          <Col lg={4} md={6} sm={12} className="service-box">
            <div className="service-icon">
              <img src={webDevIcon} alt="Web Development" />
            </div>
            <h5>Web Development</h5>
            <p>
              Leverage our expertise in modern web development frameworks to create responsive, scalable, and efficient web applications tailored to your business needs.
            </p>
          </Col>
          <Col lg={4} md={6} sm={12} className="service-box">
            <div className="service-icon">
              <img src={mobileAppsIcon} alt="Mobile Apps" />
            </div>
            <h5>Mobile Applications</h5>
            <p>
              Build cutting-edge mobile apps with seamless user experiences for iOS and Android platforms, driving engagement and enhancing customer satisfaction.
            </p>
          </Col>
          <Col lg={4} md={6} sm={12} className="service-box">
            <div className="service-icon">
              <img src={aiDataIcon} alt="AI & Data Innovation" />
            </div>
            <h5>AI & Data Innovation</h5>
            <p>
              Harness the power of artificial intelligence and data analytics to drive innovation and make data-driven decisions that propel your business forward.
            </p>
          </Col>
          <Col lg={4} md={6} sm={12} className="service-box">
            <div className="service-icon">
              <img src={softwareSolutionsIcon} alt="Comprehensive Software Solutions" />
            </div>
            <h5>Comprehensive Software Solutions</h5>
            <p>
              Crafting tailored software solutions that meet your unique business requirements, from initial planning to full-scale deployment and integration.
            </p>
          </Col>
          <Col lg={4} md={6} sm={12} className="service-box">
            <div className="service-icon">
              <img src={seoIcon} alt="SEO" />
            </div>
            <h5>SEO</h5>
            <p>
              Improve your search engine rankings with our expert SEO strategies, driving organic traffic to your website and increasing online visibility.
            </p>
          </Col>
          <Col lg={4} md={6} sm={12} className="service-box">
            <div className="service-icon">
              <img src={digitalMarketingIcon} alt="Digital Marketing" />
            </div>
            <h5>Digital Marketing</h5>
            <p>
              Boost your brand's online presence with targeted digital marketing campaigns that resonate with your audience and drive measurable results.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
