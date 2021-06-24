import './Skills.css'
import Card from '../Card/Card';
import SkillItem from './SkillItem';
import { backend, frontend, library, programming, tools } from './SkillData';

import { useState, useEffect, Fragment } from 'react';
import SkillsOverlay from '../../assets/svg/projects1.svg';
import '../../Overlay.css'


const Skills = () => {


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
                <img src={SkillsOverlay} className="overlay-image" />
            </div>

            {!isOverlay &&
                <div className="skills-container">

                    <h2 className="sec-heading section-heading skill-main-heading" >
                        My Skill Set
                    </h2>
                    {/* <hr className="skills-hr" /> */}
                    <div className="skill-card-wrapper">
                        <Card>
                            <h3 className="card-heading third-heading">Frontend Tools</h3>
                            {
                                frontend.map((item, index) => {
                                    return <SkillItem key={index} data={item} />
                                })
                            }
                        </Card>
                        <Card>
                            <h3 className="card-heading third-heading">Backend Tools</h3>
                            {
                                backend.map((item, index) => {
                                    return <SkillItem key={index} data={item} />
                                })
                            }
                        </Card>
                        <Card>
                            <h3 className="card-heading third-heading">JS Library</h3>
                            {
                                library.map((item, index) => {
                                    return <SkillItem key={index} data={item} />
                                })
                            }
                        </Card>
                        <Card>
                            <h3 className="card-heading third-heading">Programming Languages</h3>
                            {
                                programming.map((item, index) => {
                                    return <SkillItem key={index} data={item} />
                                })
                            }
                        </Card>
                        <Card>
                            <h3 className="card-heading third-heading">Other Dev Tools</h3>
                            {
                                tools.map((item, index) => {
                                    return <SkillItem key={index} data={item} />
                                })
                            }
                        </Card>
                        <Card>
                            <h3 className="card-heading third-heading">Problem Solving</h3>
                            <SkillItem data={{ name: 'Data Structure and Algorithms', progress: '60' }} />

                        </Card>
                    </div>
                </div >}
        </Fragment>
    );
}

export default Skills;