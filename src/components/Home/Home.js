import './Home.css';
import Profile from '../../assets/image/robert.png';
import { Fragment, useState, useEffect } from 'react';
import HomeOverlay from '../../assets/svg/home.svg'
import '../../Overlay.css'

const Home = () => {


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
                <img src={HomeOverlay} className="overlay-image" />
            </div>

            {!isOverlay &&
                <div class="home-div">
                    <div class="home-text">

                        <div className="home-text-name">
                            Shashank Mishra
                        </div>
                        <div className="home-profession " >
                            <span>&lt;</span> A Web Developer <span>&gt;</span>
                        </div>
                    </div>

                    <img src={Profile} className="profile-image" alt="hero-image" />

                </div>
            }

        </Fragment>

    );
}

export default Home;