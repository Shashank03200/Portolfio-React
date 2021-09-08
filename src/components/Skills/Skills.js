import './Skills.css'
import Card from '../Card/Card';
import SkillItem from './SkillItem';
import { backend, frontend, library, programming, tools } from './SkillData';
import Container from 'react-bootstrap/Container'
import { useState, useEffect, Fragment } from 'react';
import SkillsOverlay from '../../assets/svg/projects1.svg';
import '../MenuIcon/HamburgerIcon';
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

                    <h1 className="sec-heading text-center section-heading skill-main-heading
                     content-heading
                    " >
                        My Skill Set
                    </h1>
                    {/* <hr className="skills-hr" /> */}
                    <Container fluid="lg">
                        <div className="skill-card-wrapper ">
                            <div className="row justify-content-around">

                                <Card>
                                    <h3 className="card-heading fourth-heading mb-4">Frontend Tools</h3>
                                    {
                                        frontend.map((item, index) => {
                                            return <SkillItem key={index} data={item} />
                                        })
                                    }
                                </Card>
                                <Card>
                                    <h3 className="card-heading fourth-heading mb-4" >Backend Tools</h3>
                                    {
                                        backend.map((item, index) => {
                                            return <SkillItem key={index} data={item} />
                                        })
                                    }
                                </Card>
                                <Card>
                                    <h3 className="card-heading fourth-heading mb-4" >JS Library</h3>
                                    {
                                        library.map((item, index) => {
                                            return <SkillItem key={index} data={item} />
                                        })
                                    }
                                </Card>
                                <Card>
                                    <h3 className="card-heading fourth-heading mb-4">Programming Languages</h3>
                                    {
                                        programming.map((item, index) => {
                                            return <SkillItem key={index} data={item} />
                                        })
                                    }
                                </Card>
                                <Card>
                                    <h3 className="card-heading fourth-heading mb-4">Other Dev Tools</h3>
                                    {
                                        tools.map((item, index) => {
                                            return <SkillItem key={index} data={item} />
                                        })
                                    }
                                </Card>
                                <Card>
                                    <h3 className="card-heading fourth-heading mb-4">Problem Solving</h3>
                                    <SkillItem data={{ name: 'Data Structure and Algorithms', progress: '60' }} />

                                </Card>
                            </div>
                        </div>
                    </Container>
                </div >}
        </Fragment >
    );
}

export default Skills;