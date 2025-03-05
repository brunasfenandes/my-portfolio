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
    },
    {
      title: "Coffee Shop",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "https://beanscoffeeshop.netlify.app/",
    },
    {
      title: "The Bees Knees BandSite",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://thebeeskneesbandsite.netlify.app/",
    },
    {
      title: "BrainFlix",
      description: "Design & Development",
      imgUrl: projImg4,
      link: "https://brainflixbf.netlify.app/",
    },
    {
      title: "InStock",
      description: "Design & Development",
      imgUrl: projImg5,
      link: "https://memorygamelucky.netlify.app/",
    },
    {
      title: "Memory Game",
      description: "Design & Development",
      imgUrl: projImg6,link: "https://memorygamelucky.netlify.app/",
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
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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