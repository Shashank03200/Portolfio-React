import "./Home.css";

import { Fragment, useRef, useState, useEffect } from "react";

import "../../Overlay.css";
import HomeSpinner from "../Spinner/HomeSpinner";
import { Fade, Flip } from "react-reveal";

const Home = () => {
  const [isOverlay, setIsOverlay] = useState(true);
  const [isScreenSmaller, setIsScreenSmaller] = useState(
    window.innerWidth < 763
  );
  const overlayClasses = ["overlay"];
  const counter = useRef(0);

  if (!isOverlay) overlayClasses.push("overlay-close");

  const imageLoadHandler = () => {
    counter.current += 1;
    if (counter.current >= 1) {
      setIsOverlay(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", windowResizeHandler);
  }, []);

  if (!isOverlay) overlayClasses.push("overlay-close");

  const windowResizeHandler = () => {
    setIsScreenSmaller(window.innerWidth < 763);
  };

  console.log(isScreenSmaller);

  return (
    <Fragment>
      <div
        className={overlayClasses.join(" ")}
        style={{ display: isOverlay ? "block" : "none" }}
      >
        <HomeSpinner />
      </div>

      <div
        className="home-div"
        style={{ display: isOverlay ? "none" : "block" }}
      >
        {isScreenSmaller && (
          <img
            height="auto"
            src={`${process.env.PUBLIC_URL}/assets/image/profile-pic.png`}
            alt="hero-large"
            className="img-fluid profile-image-small"
            onLoad={imageLoadHandler}
          />
        )}

        <div className="home-text">
          <div className="home-text-name">
            <Fade right big cascade>
              Shashank Mishra
            </Fade>
          </div>

          <div className="home-profession">
            <Flip left cascade>
              Full Stack Developer
            </Flip>
          </div>
        </div>

        {!isScreenSmaller && (
          <img
            src={`${process.env.PUBLIC_URL}/assets/image/profile-pic.png`}
            alt="hero-small"
            className="profile-image-large"
            onLoad={imageLoadHandler}
          />
        )}
      </div>
    </Fragment>
  );
};

export default Home;
