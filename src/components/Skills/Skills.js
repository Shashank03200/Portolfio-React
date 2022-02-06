import "./Skills.css";

import { skillObj } from "./SkillData";
import Container from "react-bootstrap/Container";
import { useState, useEffect, Fragment } from "react";
import SkillsOverlay from "../../assets/svg/skills.png";
import "../MenuIcon/HamburgerIcon";
import "../../Overlay.css";
import SkillCard from "./SkillCard";

const Skills = () => {
  const [isOverlay, setIsOverlay] = useState(true);
  const overlayClasses = ["overlay"];

  useEffect(() => {
    setTimeout(() => {
      setIsOverlay(false);
    }, 500);
  }, []);

  if (!isOverlay) overlayClasses.push("overlay-close");
  let skillCardCollections = [];

  for (let skill in skillObj) {
    skillCardCollections.push(<SkillCard skillData={skillObj[skill]} />);
  }

  return (
    <Fragment>
      <div className={overlayClasses.join(" ")}>
        <img src={SkillsOverlay} className="overlay-image" />
      </div>

      {!isOverlay && (
        <div className="skills-container">
          <h1
            className="sec-heading text-center section-heading skill-main-heading
                     content-heading
                    "
          >
            My Skill Set
          </h1>
          {/* <hr className="skills-hr" /> */}
          <Container fluid="lg">
            <div className="skill-card-wrapper ">
              <div className="row justify-content-around">
                {skillCardCollections.map((item, index) => {
                  return item;
                })}
              </div>
            </div>
          </Container>
        </div>
      )}
    </Fragment>
  );
};

export default Skills;
