import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "../MailchimpForm/MailchimpForm.jsx";
import logo from "../../assets/img/graphic (3).svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-ico4.svg";
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="footer-socials">
              <a href="https://www.linkedin.com/in/brunasfenandes/" target="_blank"><img src={navIcon1} alt="LinkedIn Icon" /></a>
              <a href="https://github.com/brunasfenandes/" target="_blank"><img src={navIcon2} alt="GitHub Icon" /></a>
              <a href="https://x.com/brunasfenandess" target="_blank"><img src={navIcon3} alt="Twitter Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}