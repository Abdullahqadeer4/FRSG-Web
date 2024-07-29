import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaBitcoin, FaApplePay, FaGooglePay } from 'react-icons/fa';


export const Payments = () => {
  return (
    <Container className="payments-section">
      <h2 className="section-title">How Can You Pay Us</h2>
      <Row className="justify-content-center">
        <Col md={4} className="payment-card">
          <Card>
            <Card.Body className="text-center">
              <FaCcVisa className="payment-icon" />
              <Card.Title>Visa</Card.Title>
              <Card.Text>Fast and secure payments with your Visa card.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="payment-card">
          <Card>
            <Card.Body className="text-center">
              <FaCcMastercard className="payment-icon" />
              <Card.Title>Mastercard</Card.Title>
              <Card.Text>Use your Mastercard for quick transactions.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="payment-card">
          <Card>
            <Card.Body className="text-center">
              <FaCcPaypal className="payment-icon" />
              <Card.Title>PayPal</Card.Title>
              <Card.Text>Pay easily with your PayPal account.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="payment-card">
          <Card>
            <Card.Body className="text-center">
              <FaBitcoin className="payment-icon" />
              <Card.Title>Bitcoin</Card.Title>
              <Card.Text>Cryptocurrency payments with Bitcoin.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="payment-card">
          <Card>
            <Card.Body className="text-center">
              <FaApplePay className="payment-icon" />
              <Card.Title>Apple Pay</Card.Title>
              <Card.Text>Use Apple Pay for secure payments.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="payment-card">
          <Card>
            <Card.Body className="text-center">
              <FaGooglePay className="payment-icon" />
              <Card.Title>Google Pay</Card.Title>
              <Card.Text>Pay conveniently with Google Pay.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
