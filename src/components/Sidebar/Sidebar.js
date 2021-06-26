import { NavLink } from "react-router-dom";
import AvatarImage from '../../assets/image/profile-image.png'
import { Button } from 'react-bootstrap';

import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="wrapper">
            <nav id="sidebar" className=" sidebar-div">

                <div className="sidebar-profile-name first-heading">Hey There</div>

                <div className="sidebar-links-wrapper fifth-heading">

                    <ul className="sidebar-list ">
                        <NavLink to="/" ><li className="paragraph-large"><i className="bi bi-house-door"></i>Home</li></NavLink>
                        <NavLink to="/aboutme"><li className="paragraph-large"><i className="bi bi-app"></i>About Me</li></NavLink>
                        <NavLink to="/skills"><li className="paragraph-large"><i className="bi bi-terminal"></i>Skills</li></NavLink>
                        <NavLink to="/projects"><li className="paragraph-large"><i className="bi bi-gear-wide-connected"></i>Projects</li></NavLink>
                        <NavLink to="/contact"><li className="paragraph-large"><i className="bi bi-link"></i>Contact Me</li></NavLink>
                    </ul>
                </div>
                <Button variant="info" className="fifth-heading sidebar-download-button"><i className="bi bi-download"></i>  &nbsp; Download CV   </Button >
            </nav>
        </div>
    );
}



export default Sidebar;