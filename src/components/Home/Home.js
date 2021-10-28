import "./Home.css";

import { Fragment, useRef, useState, useEffect } from "react";
import HomeOverlay from "../../assets/svg/home.svg";
import "../../Overlay.css";

const Home = () => {
  const [isOverlay, setIsOverlay] = useState(true);
  const [isScreenSmaller, setIsScreenSmaller] = useState(
    window.innerWidth < 763
  );
  const overlayClasses = ["overlay"];
  const counter = useRef(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsOverlay(false);
  //   }, 500);
  // }, []);

  // // useEffect(() => {
  // //     setTimeout(() => {
  // //         setIsOverlay(false);
  // //     }, 500)
  // // }, [])

  if (!isOverlay) overlayClasses.push("overlay-close");

  const imageLoadHandler = () => {
    counter.current += 1;
    if (counter.current >= 1) {
      setIsOverlay(false);
    }
  };

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
      <div
        className={overlayClasses.join(" ")}
        style={{ display: isOverlay ? "block" : "none" }}
      >
        <img src={HomeOverlay} className="overlay-image img-fluid" />
      </div>

      <div
        className="home-div"
        style={{ display: isOverlay ? "none" : "block" }}
      >
        {isScreenSmaller && (
          <img
            height="auto"
            src={`${process.env.PUBLIC_URL}/assets/image/profile-image.png`}
            alt="hero-image"
            className="img-fluid profile-image-small"
            onLoad={imageLoadHandler}
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
            onLoad={imageLoadHandler}
          />
        )}
      </div>
    </Fragment>
  );
};

export default Home;
