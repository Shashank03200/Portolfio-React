import './Projects.css'
import { useState, useEffect, Fragment } from 'react';

import ProjectCard from './ProjectCard';
import { projectList } from './ProjectData';
import ProjectOverlay from '../../assets/svg/projects.svg';

import '../../Overlay.css'


const Projects = () => {


    const [isOverlay, setIsOverlay] = useState(true);
    const overlayClasses = ["overlay"];



    useEffect(() => {
        setTimeout(() => {
            setIsOverlay(false);
        }, 500)
    }, [])

    if (!isOverlay)
        overlayClasses.push("overlay-close");



    return (
        <Fragment>
            <div className={overlayClasses.join(" ")}>
                <img src={ProjectOverlay} className="overlay-image" />
            </div>

            {!isOverlay &&
                <div className="project-container skills-container">

                    <h2 className="primary-heading sec-heading  project-heading" >
                        My Projects
                    </h2>

                    <div className="project-card-wrapper">

                        {
                            projectList.map(project => (
                                <ProjectCard project={project} />
                            ))
                        }

                    </div>
                </div>
            }

        </Fragment>
    );
}



export default Projects;