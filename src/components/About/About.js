import './About.css'
import { Fragment, useState, useEffect } from 'react';
import DesignerOverlay from '../../assets/svg/designer.svg'
import '../../Overlay.css'

const About = () => {

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
                <img src={DesignerOverlay} className="overlay-image" />
            </div>
            {setIsOverlay &&
                <div className="about-div">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1 className="heading-about-me text-center second-heading mb-4">About me</h1>
                                <div className="about-me-div" >
                                    <ul className="about-list paragraph-large" >
                                        <li>I am a sophomore student at J.S.S Academy Of Technical Education, Noida.</li>
                                        <li>I am pursuing Bachelor of Technology with the branch Computer Science and Engineering.</li>
                                        <li>I love working wih applications and interfaces therefore I am highly interested in application development.</li>
                                        <li>I am proficient with programming skills and have design skills as well.</li>
                                        <li>I am a positive person and have the courage and strength to complete my daily goals.</li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-md-6  mt-md-4 mt-3">

                                <div className="about-second">
                                    <div className="education">
                                        <h1 className="heading-about-me mb-4 text-center third-heading">Education</h1>
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
                                                            <p className="paragraph-large" >Scored 10 CGPA</p>
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
                                    <h1 className="heading-about-me text-center  mb-4 third-heading">My Hobbies</h1>
                                    <ul className="about-list paragraph-large">
                                        <li>Reading Non Fiction Books</li>
                                        <li>Talking to myself</li>
                                        <li>E Sports</li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            }

        </Fragment>
    );
}

export default About;