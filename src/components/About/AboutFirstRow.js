import React from "react";
import { Slide } from "react-reveal";

function AboutFirstRow() {
  return (
    <div className="row">
      <div className="col">
        <h1 className="section-heading main-heading text-center sec-heading text-center content-heading heading-about-me">
          About me
        </h1>
        <div className="about-me-div">
          <Slide right cascade>
            <ul className="about-list paragraph-large">
              <li>
                I am a junior student at J.S.S Academy Of Technical Education,
                Noida.
              </li>
              <hr className="divider-line"></hr>
              <li>
                I am pursuing Bachelor of Technology with the branch Computer
                Science and Engineering.
              </li>
              <hr className="divider-line"></hr>
              <li>
                I love working wih applications and interfaces therefore I am
                highly interested in application development.
              </li>
              <hr className="divider-line "></hr>
              <li>
                I am proficient with programming skills and have design skills
                as well.
              </li>
              <hr className="divider-line"></hr>
              <li>
                I am a positive person and have the courage and strength to
                complete my daily goals.
              </li>
            </ul>
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default AboutFirstRow;
