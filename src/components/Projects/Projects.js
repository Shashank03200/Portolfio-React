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

                    <h1 className="primary-heading sec-heading  project-heading content-heading" >
                        My Projects
                    </h1>

                    <div className="row justify-content-center">

                        {
                            projectList.map((project, index) => (
                                <ProjectCard key={index} project={project} />

                            ))
                        }

                    </div>

                </div>
            }

        </Fragment>
    );
}



export default Projects;