import './Home.css';
import Profile from '../../assets/image/robert.png';
import { Fragment, useState, useEffect } from 'react';
import HomeOverlay from '../../assets/svg/home.svg'
import '../../Overlay.css'

const Home = () => {


    const [isOverlay, setIsOverlay] = useState(true);
    const [isScreenSmaller, setIsScreenSmaller] = useState(window.innerWidth < 763)
    const overlayClasses = ["overlay"];

    useEffect(() => {
        setTimeout(() => {
            setIsOverlay(false);
        }, 500)
    }, [])

    useEffect(() => {
        window.addEventListener("resize", windowResizeHandler);
        return () => window.removeEventListener("resize", windowResizeHandler);
    });

    if (!isOverlay)
        overlayClasses.push("overlay-close");

    const windowResizeHandler = () => {
        setIsScreenSmaller(window.innerWidth < 763)
    }
    console.log(isScreenSmaller)




    return (
        <Fragment>

            <div className={overlayClasses.join(" ")}>
                <img src={HomeOverlay} className="overlay-image img-fluid" />
            </div>

            {!isOverlay &&
                <div class="home-div">

                    {setIsScreenSmaller && <img src={Profile} className="profile-image" alt="hero-image" />}

                    <div className="home-text">

                        <div className="home-text-name">
                            Shashank Mishra
                        </div>
                        <div className="home-profession " >
                            <span>&lt;</span> A Web Developer <span>&gt;</span>
                        </div>
                    </div>

                    {!setIsScreenSmaller && <img src={Profile} className="profile-image" alt="hero-image" />}

                </div>
            }

        </Fragment>

    );
}

export default Home;