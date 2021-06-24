import './Contact.css';
import { useState, useEffect, Fragment } from 'react';
import { Form, Col } from 'react-bootstrap';
import ContactOverlay from '../../assets/svg/connect.svg';
import { Button } from 'react-bootstrap';
import '../../Overlay.css'

const Contact = () => {

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
                <img src={ContactOverlay} className="overlay-image" />
            </div>

            {!isOverlay &&
                <div className="contact-form-container">

                    <h2 className="sec-heading contact-main-heading">Lets Connect</h2>


                    <div className="contact-wrapper">


                        <div className="links-wrapper">
                            <a href="https://www.linkedin.com/in/shashank03210/" target="_blank"><i class="bi bi-linkedin" style={{ color: '#0a66c2' }}></i></a>
                            <a href="https://www.facebook.com/profile.php?id=100035680878054" target="_blank"><i class="bi bi-facebook" style={{ color: '#3b5998' }}></i></a>
                            <a href="https://twitter.com/imShashank___" target="_blank"><i class="bi bi-twitter" style={{ color: '#1da1f2' }}></i></a>
                            <a href="mailto:shashank032000@gmail.com" target="_blank"><i class="bi bi-google" style={{ color: '#ea4335' }}></i></a>
                            <a href="https://www.instagram.com/shashank0320/" target="_blank"><i class="bi bi-instagram" style={{ color: '#c32aa3' }}></i></a>

                        </div>
                        <div className="form-wrapper">
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} >
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter first name" />
                                    </Form.Group>

                                    <Form.Group as={Col} >
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter last name" />
                                    </Form.Group>

                                </Form.Row>

                                <Form.Group>
                                    <Form.Label>Your e-mail</Form.Label>
                                    <Form.Control type="email" placeholder="Your email here" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Your message</Form.Label>
                                    <Form.Control as="textarea" rows={5} />

                                </Form.Group>

                            </Form>
                            <div className="action-buttons-wrapper">
                                <Button variant="success" className="fifth-heading send-btn">Send Details</Button >
                                <Button variant="success" className="fifth-heading dcv-btn"><i className="bi bi-download"></i>  &nbsp; Download CV   </Button >
                            </div>
                        </div>

                    </div>
                </div >
            }
        </Fragment>
    );
}

export default Contact;