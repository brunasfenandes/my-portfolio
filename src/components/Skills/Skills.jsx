import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../../assets/icons/arrow1.svg";
import arrow2 from "../../assets/icons/arrow2.svg";
import colorSharp from "../../assets/img/color-sharp.png"
import './Skills.scss';
import Tech from "../Tech/Tech";


export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <div className="skill-bx wow zoomIn">
                    <h2>Skills</h2>
                    <p>With experience in both front-end and back-end development, I have built applications using a variety of technologies. My skills include creating responsive, user-friendly websites, managing databases, and building scalable APIs.</p>
                    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                            <img src={meter1} alt="Image" />
                            <h5>Web Development</h5>
                        </div>
                        <div className="item">
                            <img src={meter2} alt="Image" />
                            <h5>Database Management</h5>
                        </div>
                        <div className="item">
                            <img src={meter3} alt="Image" />
                            <h5>UI/UX Design</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt="Image" />
                            <h5>API Development</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt="Image" />
                            <h5>Data Analysis</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt="Image" />
                            <h5>Team Collaboration</h5>
                        </div>
                    </Carousel>
                  </div>

                  <Tech />
              </div>
          </div>
      </div>
    </section>
  )
}