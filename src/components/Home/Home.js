import "./Home.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Fragment, useState, useEffect } from "react";
import HomeOverlay from "../../assets/svg/home.svg";
import "../../Overlay.css";

const Home = () => {
  const [isOverlay, setIsOverlay] = useState(true);
  const [isScreenSmaller, setIsScreenSmaller] = useState(
    window.innerWidth < 763
  );
  const overlayClasses = ["overlay"];

  useEffect(() => {
    setTimeout(() => {
      setIsOverlay(false);
    }, 500);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", windowResizeHandler);
    return () => window.removeEventListener("resize", windowResizeHandler);
  });

  if (!isOverlay) overlayClasses.push("overlay-close");

  const windowResizeHandler = () => {
    setIsScreenSmaller(window.innerWidth < 763);
  };

  console.log(isScreenSmaller);

  return (
    <Fragment>
      <div className={overlayClasses.join(" ")}>
        <img src={HomeOverlay} className="overlay-image img-fluid" />
      </div>

      {!isOverlay && (
        <div className="home-div">
          {isScreenSmaller && (
            <LazyLoadImage
              effect="blur"
              height="auto"
              src={`${process.env.PUBLIC_URL}/assets/image/profile-image.png`}
              alt="hero-image"
              className="img-fluid profile-image-small"
            />
          )}

          <div className="home-text">
            <div className="home-text-name">Shashank Mishra</div>
            <div className="home-profession">
              <span>&lt;</span> A Web Developer <span>&gt;</span>
            </div>
          </div>

          {!isScreenSmaller && (
            <img
              src={`${process.env.PUBLIC_URL}/assets/image/profile-image.png`}
              alt="hero-image"
              className="profile-image-large"
            />
          )}
        </div>
      )}
    </Fragment>
  );
};

export default Home;
