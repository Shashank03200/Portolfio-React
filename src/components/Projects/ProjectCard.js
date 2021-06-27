import React, { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {

    const { title, image, desc } = project;

    const [isHovering, setIsHovering] = useState(false);

    const mouseOverHandler = () => {
        setIsHovering(true)
    }

    const mouseOutHandler = () => {
        setIsHovering(false);
    }
    // console.log(isHovering)

    return (
        <div className="col-sm-6 col-xs-12 col-md-6 col-xl-3 col-lg-6 project-col mb-xs-5  p-0 mx-4 mb-sm-5 my-4 project-card  ">

            <div className="card-top"  >
                <img src={`${process.env.PUBLIC_URL}/assets/image/${image}`} className="project-image" />

            </div>
            <div className="card-bottom"  >
                <div className="project-title fifth-heading ">
                    {title}
                </div>
                <div className="project-desc paragraph-large">
                    {desc}
                </div>
                <div className={`project-div-overlay ${isHovering ? 'project-div-overlay-true' : ''}`}></div>
            </div>
        </div>

    );
}

export default ProjectCard;