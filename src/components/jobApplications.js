import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/job.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import axios from 'axios';

export const JobApplication = () => {
  const formInitialDetails = {
    jobTitle: '',
    name: '',
    email: '',
    coverLetter: '',
    cv: null
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleFileChange = (e) => {
    setFormDetails({
      ...formDetails,
      cv: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText('Sending...');

    const formData = new FormData();
    formData.append('jobTitle', formDetails.jobTitle);
    formData.append('name', formDetails.name);
    formData.append('email', formDetails.email);
    formData.append('coverLetter', formDetails.coverLetter);
    formData.append('cv', formDetails.cv);

    axios.post('http://localhost:3001/apply', formData)
      .then(response => {
        setStatus({ success: true, message: 'Application sent successfully!' });
        setButtonText('Send');
        setFormDetails(formInitialDetails);
      })
      .catch(error => {
        setStatus({ success: false, message: 'Failed to send application. Please try again later.' });
        setButtonText('Send');
        console.error('Error response:', error.response ? error.response.data : error.message);
      });
  };

  return (
    <section className="job-application" id="apply">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Apply for a Job" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Apply for a Job</h2>
                  <form onSubmit={handleSubmit} className="application-form">
                    <Row>
                      {/* Top Row: Name and Email */}
                      <Col size={12} md={6} className="px-1">
                        <input 
                          type="text" 
                          value={formDetails.name} 
                          placeholder="Name" 
                          onChange={(e) => onFormUpdate('name', e.target.value)} 
                          className="form-control" 
                          required 
                        />
                      </Col>
                      <Col size={12} md={6} className="px-1">
                        <input 
                          type="email" 
                          value={formDetails.email} 
                          placeholder="Email Address" 
                          onChange={(e) => onFormUpdate('email', e.target.value)} 
                          className="form-control" 
                          required 
                        />
                      </Col>
                    </Row>
                    <Row>
                      {/* Second Row: Job Title and Cover Letter */}
                      <Col size={12} md={6} className="px-1">
                        <select 
                          value={formDetails.jobTitle} 
                          onChange={(e) => onFormUpdate('jobTitle', e.target.value)} 
                          className="form-control" 
                          required
                        >
                          <option value="" disabled>Select Job Title</option>
                          <option value="Data Scientist">Data Scientist</option>
                          <option value="Project Manager">Project Manager</option>
                          <option value="Software Engineer">Software Engineer</option>
                        </select>
                      </Col>
                      <Col size={12} md={6} className="px-1">
                        <textarea 
                          rows="3" 
                          value={formDetails.coverLetter} 
                          placeholder="Cover Letter" 
                          onChange={(e) => onFormUpdate('coverLetter', e.target.value)} 
                          className="form-control" 
                          required
                        ></textarea>
                      </Col>
                    </Row>
                    <Row>
                      {/* Third Row: CV and Submit Button */}
                      <Col size={12} className="px-1">
                        <input 
                          type="file" 
                          onChange={handleFileChange} 
                          className="form-control-file" 
                          required
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <button type="submit" className="submit-btn ret-button ret-button-gradient ret-button-animated ret-button-large">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "text-danger" : "text-success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JobApplication;