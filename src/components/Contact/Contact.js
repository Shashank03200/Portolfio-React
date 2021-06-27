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

                    <h1 className="sec-heading contact-main-heading">Lets Connect</h1>


                    <div className="container contact-wrapper">


                        <div className="row d-flex justify-content-around links-wrapper">
                            <a href="https://www.linkedin.com/in/shashank03210/" target="_blank" rel="noreferrer"><i class="bi bi-linkedin" style={{ color: '#0a66c2' }}></i></a>
                            <a href="https://www.facebook.com/profile.php?id=100035680878054" target="_blank" rel="noreferrer"><i class="bi bi-facebook" style={{ color: '#3b5998' }}></i></a>
                            <a href="https://twitter.com/imShashank___" target="_blank" rel="noreferrer"><i class="bi bi-twitter" style={{ color: '#1da1f2' }}></i></a>
                            <a href="mailto:shashank032000@gmail.com" target="_blank" rel="noreferrer"><i class="bi bi-google" style={{ color: '#ea4335' }}></i></a>
                            <a href="https://www.instagram.com/shashank0320/" target="_blank" rel="noreferrer"><i class="bi bi-instagram" style={{ color: '#c32aa3' }}></i></a>

                        </div>
                        <div className="form-wrapper">
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} md={12} lg={6}>
                                        <Form.Label className="text-white">First Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter first name" />
                                    </Form.Group>

                                    <Form.Group as={Col} md={12} lg={6}>
                                        <Form.Label className="text-white">Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter last name" />
                                    </Form.Group>

                                </Form.Row>

                                <Form.Group>
                                    <Form.Label className="text-white">Your e-mail</Form.Label>
                                    <Form.Control type="email" placeholder="Your email here" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="text-white">Your message</Form.Label>
                                    <Form.Control as="textarea" rows={5} />

                                </Form.Group>

                            </Form>
                            <div className="row mt-4 justiy-content-between action-buttons-wrapper">
                                <div className="col-xs-12 col-sm-6 mb-3  d-flex justify-content-center ">
                                    <Button variant="success" className="fifth-heading send-btn">Send Details</Button >
                                </div>
                                <div className="col-xs-12 col-sm-6 mb-3 d-flex justify-content-center">
                                    <Button variant="info" className="fifth-heading dcv-btn"><i className="bi bi-download"></i>  &nbsp; Download CV   </Button >
                                </div>
                            </div>
                        </div>

                    </div>
                </div >
            }
        </Fragment>
    );
}

export default Contact;