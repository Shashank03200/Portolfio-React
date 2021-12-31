import React, { useState, useEffect } from "react";

import "./ProjectCard.css";

const ProjectCard = (props) => {
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 800) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    });
  }, []);

  const { title, image, desc, repositoryUrl, launchUrl } = props.project;
  const [showAngleUp, setShowAngleUp] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 800);

  const defaultOverlayStyle = {
    top: "92%",
    height: "20px",
    padding: "0",
    backgroundColor: "#000",
  };

  const hoverOverlayStyle = {
    top: "10px",
    height: "100%",
    padding: "30px",
    backgroundColor: "#444444",
  };
  console.log(props.project.title, "SmallScreen", isSmallScreen);
  console.log(props.project.title, "showAngleUp", showAngleUp);

  return (
    <div className="col-sm-6 col-xs-12 col-md-6 col-xl-3 col-lg-6 project-col mb-xs-5  p-0 mx-4 mb-sm-5 my-4 project-card  row flex-column">
      <div className="card-top col">
        <img
          src={`${process.env.PUBLIC_URL}/assets/image/${image}`}
          className="project-image"
          onLoad={props.onLoad}
        />
      </div>
      <div
        className="card-bottom col"
        onMouseEnter={() => {
          !isSmallScreen && setShowAngleUp(false);
        }}
        onMouseLeave={() => {
          !isSmallScreen && setShowAngleUp(true);
        }}
      >
        <div className="project-title fifth-heading ">{title}</div>
        <div className="project-desc paragraph-large">{desc}</div>
        <div
          className="project-div-overlay "
          style={showAngleUp ? defaultOverlayStyle : hoverOverlayStyle}
        >
          <div className="d-flex flex-column ">
            <div className="d-flex justify-content-center align-items-center position-relative">
              <div className="overlay-angle-circle">
                {showAngleUp ? (
                  <i
                    class="fas fa-angle-up angle-up-icon "
                    onClick={() => setShowAngleUp((prevState) => !prevState)}
                  ></i>
                ) : (
                  <i
                    class="fas fa-angle-down angle-down-icon"
                    onClick={() => setShowAngleUp((prevState) => !prevState)}
                  ></i>
                )}
              </div>
            </div>

            <div className=" container d-flex justify-content-around align-items-center p-2 project-action-icon-wrapper">
              <div className="project-action-icon">
                <a href={repositoryUrl} target="_blank">
                  <i className="fab fa-github fa-4x project-icon project-icon-github"></i>
                </a>
              </div>
              <div className="project-action-icon">
                <a href={launchUrl} target="_blank">
                  <i class="fas fa-play fa-3x project-icon project-icon-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
