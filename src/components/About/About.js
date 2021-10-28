import "./About.css";
import { Fragment, useState, useEffect } from "react";
import DesignerOverlay from "../../assets/svg/designer.svg";
import "../../Overlay.css";

const About = () => {
  const [isOverlay, setIsOverlay] = useState(true);
  const overlayClasses = ["overlay"];

  useEffect(() => {
    setTimeout(() => {
      setIsOverlay(false);
    }, 500);
  }, []);

  if (!isOverlay) overlayClasses.push("overlay-close");

  return (
    <Fragment>
      <div className={overlayClasses.join(" ")}>
        <img
          src={DesignerOverlay}
          className="overlay-image"
          alt="overlay-image"
        />
      </div>
      {!isOverlay && (
        <div className="about-div">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="section-heading main-heading text-center sec-heading text-center content-heading heading-about-me">
                  About me
                </h1>
                <div className="about-me-div">
                  <ul className="about-list paragraph-large">
                    <li>
                      I am a sophomore student at J.S.S Academy Of Technical
                      Education, Noida.
                    </li>
                    <hr className="divider-line"></hr>
                    <li>
                      I am pursuing Bachelor of Technology with the branch
                      Computer Science and Engineering.
                    </li>
                    <hr className="divider-line"></hr>
                    <li>
                      I love working wih applications and interfaces therefore I
                      am highly interested in application development.
                    </li>
                    <hr className="divider-line"></hr>
                    <li>
                      I am proficient with programming skills and have design
                      skills as well.
                    </li>
                    <hr className="divider-line"></hr>
                    <li>
                      I am a positive person and have the courage and strength
                      to complete my daily goals.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6  mt-md-4 mt-3">
                <div className="about-second">
                  <div className="education">
                    <h1 className="heading-about-me mb-4 text-center third-heading">
                      Education
                    </h1>
                    <div className="container-timeline justify-content-center">
                      <div className="timeline">
                        <ul>
                          <li>
                            <div className="timeline-content">
                              <h3 className="fifth-heading">B. Tech</h3>
                              <p className="paragraph-large">2019 - 2023</p>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-content">
                              <h3 className="fifth-heading">Intermediate</h3>
                              <p className="paragraph-large">Scored 95%</p>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-content">
                              <h3 className="fifth-heading">High School</h3>
                              <p className="paragraph-large">Scored 10 CGPA</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-md-4 mt-3">
                <div className="hobbies">
                  <h1 className="heading-about-me text-center  mb-4 third-heading">
                    My Hobbies
                  </h1>
                  <ul className="about-list paragraph-large">
                    <li>Learning new skills.</li>
                    <li>Having Self-talks. </li>
                    <li>Playing E Sports on PC.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default About;
