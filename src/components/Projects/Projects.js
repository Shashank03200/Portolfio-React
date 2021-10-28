import "./Projects.css";
import { useState, useEffect, Fragment, useRef } from "react";

import ProjectCard from "./ProjectCard";
import { projectList } from "./ProjectData";
import ProjectOverlay from "../../assets/svg/projects.svg";

import "../../Overlay.css";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const overlayClasses = ["overlay"];
  const counter = useRef(0);

  const imageLoaded = () => {
    counter.current += 1;
    console.log("Images Loaded ", counter.current);
    if (counter.current >= projectList.length) {
      setIsLoading(false);
    }
  };
  if (!isLoading) overlayClasses.push("overlay-close");

  return (
    <Fragment>
      <div className={overlayClasses.join(" ")}>
        <img src={ProjectOverlay} className="overlay-image img-fluid" />
      </div>

      <div
        className="project-container skills-container"
        style={{ display: isLoading ? "none" : "block" }}
      >
        <h1 className="primary-heading sec-heading  project-heading content-heading">
          My Projects
        </h1>
        <div className="row justify-content-center">
          {projectList.map((project, index) => (
            <ProjectCard key={index} project={project} onLoad={imageLoaded} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
