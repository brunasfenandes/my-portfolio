import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import './Newsletter.scss';

export default function Newsletter({ status, message, onValidated }) {

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row >
            <Col lg={12} md={6} xl={5}>
              <h3>Your Motivational Phrase or About Me</h3>
              <p>"Success is the sum of small efforts, repeated day in and day out."</p>
              <p>Or tell a little bit more about yourself, your story, or your goals!</p>
            </Col>
          </Row>
        </div>
      </Col>
  )
}