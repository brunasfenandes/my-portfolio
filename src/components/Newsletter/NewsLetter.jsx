import { Col, Row } from "react-bootstrap";
import './Newsletter.scss';

export default function Newsletter() {

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row >
            <Col lg={12} md={6} xl={5}>
              <h3>Bits, Bugs, and Brain Teasers</h3>
              <p>Did you know? The first computer bug was a literal bug! In 1947, engineers found a moth trapped in a relay, causing the malfunction.</p>
              <p>That's why programmers prefer the dark mode. The light attracts bugs!</p>
            </Col>
          </Row>
        </div>
      </Col>
  )
}