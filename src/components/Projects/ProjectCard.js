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

    console.log(image)

    console.log(isHovering)
    return (
        <div className="project-card" >
            <div className="card-top" >
                <img src={`${process.env.PUBLIC_URL}/assets/image/${image}`} className="project-image" />

            </div>
            <div className="card-bottom" onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler} >
                <div className="project-title fifth-heading ">
                    {title}
                </div>
                <div className="project-desc sixth-heading">
                    {desc}
                </div>
                <div className={`project-div-overlay ${isHovering ? 'project-div-overlay-true' : ''}`}></div>
            </div>

        </div>
    );
}

export default ProjectCard;