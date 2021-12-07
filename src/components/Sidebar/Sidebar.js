import { Link, NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./Sidebar.css";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sidedrawerToggleHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  const resumeURL =
    "https://drive.google.com/file/d/16pnBhtg908CoWDapLsHcMsXVXdYDlF3i/view?usp=sharing";

  return (
    <>
      <nav className="navbar  navbar-expand-lg d-block navbar-dark bg-dark justify-content-sm-start  sidebar-div">
        <Link
          className="navbar-brand order-1 w-100 mx-auto sidebar-profile-name first-heading"
          to="/"
        >
          Hey There
        </Link>
        <button
          className="navbar-toggler align-self-start mt-sm-0"
          type="button"
          onClick={sidedrawerToggleHandler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`navbar-collapse bg-dark  flex-col  justify-content-center   mobileMenu ${
            isOpen ? "Open" : ""
          } p-3 p-lg-0  mt-lg-0`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav d-block  sidebar-list sidebar-links-wrapper fifth-heading">
            <NavLink
              className="nav-item "
              activeClassName="list-item-active"
              to="/"
            >
              <li
                className="paragraph-large w-100"
                onClick={sidedrawerToggleHandler}
              >
                <i className="bi bi-house-door"></i>Home
              </li>
            </NavLink>
            <NavLink
              className="nav-item "
              activeStyle={{
                transform: "translateX(10px)",
                "border-bottom": "3px solid var(--secondary)",
              }}
              to="/aboutme"
            >
              <li
                className="paragraph-large w-100"
                onClick={sidedrawerToggleHandler}
              >
                <i className="bi bi-app"></i>About Me
              </li>
            </NavLink>
            <NavLink
              className="nav-item "
              activeClassName="list-item-active"
              to="/skills"
            >
              <li
                className="paragraph-large w-100"
                onClick={sidedrawerToggleHandler}
              >
                <i className="bi bi-terminal"></i>Skills
              </li>
            </NavLink>
            <NavLink
              className="nav-item "
              activeClassName="list-item-active"
              to="/projects"
            >
              <li
                className="paragraph-large w-100"
                onClick={sidedrawerToggleHandler}
              >
                <i className="bi bi-gear-wide-connected"></i>Projects
              </li>
            </NavLink>
            <NavLink
              className="nav-item "
              activeClassName="list-item-active"
              to="/contact"
            >
              <li
                className="paragraph-large w-100"
                onClick={sidedrawerToggleHandler}
              >
                <i className="bi bi-link"></i>Contact Me
              </li>
            </NavLink>
          </ul>

          <Button
            variant="info"
            className="fifth-heading sidebar-download-button d-flex align-self-start"
            onClick={() => {
              window.open(resumeURL);
            }}
          >
            <i className="bi bi-download"></i> &nbsp; Download CV{" "}
          </Button>
        </div>
      </nav>

      <div
        className={`overlay-home ${isOpen ? "open" : ""}`}
        onClick={sidedrawerToggleHandler}
      ></div>
    </>
  );
};

export default Sidebar;
