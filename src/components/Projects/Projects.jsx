import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../projectCard/ProjectCard.jsx";
import projImg1 from "../../assets/img/FireShot Capture 061 - The Organic Awakens - [theorganicawakens.netlify.app].png";
import projImg2 from "../../assets/img/FireShot Capture 059 - Coffee Shop - Home - [beanscoffeeshop.netlify.app].png";
import projImg3 from "../../assets/img/FireShot Capture 060 - The Bees Knees - [thebeeskneesbandsite.netlify.app].png";
import projImg4 from "../../assets/img/FireShot Capture 036 - BrainFlix - [brainflixbf.netlify.app].png";
import projImg5 from "../../assets/img/FireShot Capture 048 - InStock - [localhost].png";
import projImg6 from "../../assets/img/FireShot Capture 062 - Memory Game - [memorygamelucky.netlify.app].png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Projects.scss';

export default function Projects() {

  const projects = [
    {
      title: "The Organic Awakens",
      description: "Capstone project for BrainStation's Sofwtare Engineering Bootcamp",
      imgUrl: projImg1,
      link: "https://theorganicawakens.netlify.app/",
      tools: ["React", "Express", "MySQL", "Three.js", "SCSS"],
      challenges: "Integrating a 3D molecule viewer with React and dynamically rendering molecules from JSON.",
    },
    {
      title: "Coffee Shop",
      description: "A modern and responsive landing page for a fictional coffee shop, showcasing an intuitive menu, store locations, and a sleek, inviting design.",
      imgUrl: projImg2,
      link: "https://beanscoffeeshop.netlify.app/",
      tools: ["HTML", "CSS", "SCSS"],
      challenges: "Ensuring mobile responsiveness and smooth user interactions.", 
    },
    {
      title: "The Bees Knees BandSite",
      description: "A website for a fictional band that allows users to explore music, watch videos, and stay updated on upcoming events and news.",
      imgUrl: projImg3,
      link: "https://thebeeskneesbandsite.netlify.app/",
      tools: ["HTML", "CSS", "JavaScript", "React", "APIs", "SCSS"],
      challenges: "Managing audio file integration and optimizing site performance for media-heavy content."
    },
    {
      title: "BrainFlix",
      description: "A YouTube-inspired video streaming platform where users can browse, upload, and interact with video content.",
      imgUrl: projImg4,
      link: "https://brainflixbf.netlify.app/",
      tools: ["React", "Express", "Node.js", "Toastify", "SCSS"],
      challenges: "Building a full-stack video upload feature and implementing backend video metadata storage."
    },
    {
      title: "InStock",
      description: "A warehouse and inventory management system that enables businesses to track product stock levels, warehouse locations, and order statuses in real time.",
      imgUrl: projImg5,
      link: "https://memorygamelucky.netlify.app/",
      tools: ["React", "Express", "MySQL", "JavaScript", "SCSS"],
      challenges: "Working on a Agile team with GitFlow, dividing tickets and ensuring everyone had a fair amount of work."
    },
    {
      title: "Memory Game",
      description: "A fun and interactive memory-matching game where players test their ability to remember card positions while facing different levels of challenges.",
      imgUrl: projImg6,link: "https://memorygamelucky.netlify.app/",
      tools: ["HTML", "CSS", "JavaScript"],
      challenges: "Integrating an external API with restrict number of requests per hour during the coding and testing process."
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Throughout my career, I’ve had the opportunity to work on a wide range of projects that demonstrate my expertise in web development, database management, and user interface design. From building responsive web applications with React to creating dynamic APIs and managing databases, each project has helped me refine my technical and problem-solving skills. Below are some of the highlights of my work.</p>

                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Links</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tools</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Challenges</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      <Row>
                        {projects.map((project, index) => (
                          <Col key={index} md={6}>
                            <h5>{project.title}</h5>
                            <ul>
                              {project.tools.map((tool, idx) => (
                                <li key={idx}>{tool}</li>
                              ))}
                            </ul>
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      <Row>
                        {projects.map((project, index) => (
                          <Col key={index} md={6}>
                            <h5>{project.title}</h5>
                            <p><strong>Challenge:</strong> {project.challenges}</p>
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}