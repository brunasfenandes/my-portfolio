import './NavBar.scss';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button, Modal } from "react-bootstrap";
import logo from '../../assets/logo/graphic (3).svg';
import navIcon1 from '../../assets/icons/nav-icon1.svg';
import navIcon2 from '../../assets/icons/nav-icon2.svg';
import navIcon3 from '../../assets/icons/nav-icon3.svg';
import navIcon4 from '../../assets/icons/nav-ico4.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router} from "react-router-dom";
import { createPortal } from 'react-dom';
import ResumeModal from '../ResumeModal/ResumeModal';

export default function NavBar() {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/brunasfenandes/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/brunasfenandes/" target="_blank"><img src={navIcon2} alt="GitHub Icon" /></a>
                <a href="https://www.instagram.com/brunasfenandes/" target="_blank"><img src={navIcon3} alt="Instagram Icon" /></a>
                <a href="https://x.com/brunasfenandes" target="_blank"><img src={navIcon4} alt="Twitter Icon" /></a>
              </div>

              <Button className="vvd" onClick={handleShow}>
                <span>My Resume</span>
              </Button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal 
        show={show} 
        onHide={handleClose} 
        size="lg" 
        centered
        className="responsive-modal"
      >
        {/* <Modal.Header closeButton>
          <Modal.Title>My Resume</Modal.Title>
        </Modal.Header> */}
        
        <Modal.Body>
          <iframe
            src="/Bruna_Silva_Fernandes_Resume_Software_Developer.pdf"
            title="Resume"
            style={{ width: "100%", height: "70vh", border: "none" }}
          />
        </Modal.Body>

        
        <Modal.Footer>
          <Button 
            variant="secondary" 
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Router>
  )
}