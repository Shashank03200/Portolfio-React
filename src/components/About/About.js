import "./About.css";
import { Fragment, useState, useEffect } from "react";
import DesignerOverlay from "../../assets/svg/designer.svg";
import "../../Overlay.css";
import AboutFirstRow from "./AboutFirstRow";
import Hobbies from "./Hobbies";
import Education from "./Education";
import { Slide } from "react-reveal";

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
          <Slide bottom cascade>
            <div className="container">
              <AboutFirstRow />

              <div className="row">
                <Education />
                <Hobbies />
              </div>
            </div>
          </Slide>
        </div>
      )}
    </Fragment>
  );
};

export default About;
