import "./Contact.css";
import emailjs from "emailjs-com";
import { config } from "dotenv";

import { useState, useEffect, Fragment } from "react";
import { Form, Col } from "react-bootstrap";
import ContactOverlay from "../../assets/svg/connect.svg";
import { Button, Spinner } from "react-bootstrap";
import "../../Overlay.css";
import EmailModal from "../EmailModal/EmailModal";

config();

const Contact = () => {
  const [isOverlay, setIsOverlay] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const overlayClasses = ["overlay"];

  const [details, setDetails] = useState({
    fName: "",
    lName: "",
    email: "",
    msg: "",
  });

  const [showModal, setShowModal] = useState({
    visible: false,
    state: "error",
  });

  const detailChangeHandler = (event) => {
    const comp = event.target;
    switch (comp.name) {
      case "fNameInput":
        setDetails({ ...details, fName: comp.value });
        break;
      case "lNameInput":
        setDetails({ ...details, lName: comp.value });
        break;
      case "emailInput":
        setDetails({ ...details, email: comp.value });
        break;
      case "msgInput":
        setDetails({ ...details, msg: comp.value });
        break;
      default:
        return;
    }
  };

  const modalCloseHandler = () => {
    setShowModal({ ...showModal, visible: false });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    setIsLoading(true);
    emailjs.sendForm(serviceId, templateId, e.target, userId).then(
      (result) => {
        setShowModal({ visible: true, state: "success" });
        setIsLoading(false);
      },
      (error) => {
        setShowModal({ visible: true, state: "error" });
        setIsLoading(false);
      }
    );
    setDetails({ fName: "", lName: "", email: "", msg: "" });
  };

  console.log(isLoading);
  useEffect(() => {
    setTimeout(() => {
      setIsOverlay(false);
    }, 500);
  }, []);

  if (!isOverlay) overlayClasses.push("overlay-close");

  const cvDownloadHandler = () => {
    const resumeLink = process.env.REACT_APP_RESUME_LINK;
    window.open(resumeLink);
  };

  const buttonLoadingComponent = (
    <Fragment>
      <span>Please wait </span>&nbsp;&nbsp;
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
    </Fragment>
  );

  return (
    <Fragment>
      <div className={overlayClasses.join(" ")}>
        <img src={ContactOverlay} className="overlay-image" />
      </div>

      {!isOverlay && (
        <div className="contact-form-container">
          <h1 className="sec-heading contact-main-heading">Lets Connect</h1>

          <div className="container contact-wrapper">
            <EmailModal
              showModal={showModal.visible}
              onClose={modalCloseHandler}
              success={showModal.state}
            />
            <div className="row d-flex justify-content-around links-wrapper">
              <a
                href="https://www.linkedin.com/in/shashank03210/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin" style={{ color: "#0a66c2" }}></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100035680878054"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-facebook" style={{ color: "#3b5998" }}></i>
              </a>
              <a
                href="https://twitter.com/imShashank___"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-twitter" style={{ color: "#1da1f2" }}></i>
              </a>
              <a
                href="mailto:shashank032000@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-google" style={{ color: "#ea4335" }}></i>
              </a>
              <a
                href="https://www.instagram.com/shashank0320/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-instagram" style={{ color: "#c32aa3" }}></i>
              </a>
            </div>
            <div className="form-wrapper">
              <Form onSubmit={formSubmitHandler} autoComplete="off">
                <Form.Row>
                  <Form.Group as={Col} md={12} lg={6}>
                    <Form.Label className="text-white">First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="fNameInput"
                      required
                      placeholder="Enter first name"
                      onChange={detailChangeHandler}
                      value={details.fName}
                      disabled={isLoading}
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={12} lg={6}>
                    <Form.Label className="text-white">Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lNameInput"
                      required
                      placeholder="Enter last name"
                      onChange={detailChangeHandler}
                      value={details.lName}
                      disabled={isLoading}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group>
                  <Form.Label className="text-white">Your e-mail</Form.Label>
                  <Form.Control
                    type="email"
                    required
                    name="emailInput"
                    placeholder="Your email here"
                    onChange={detailChangeHandler}
                    value={details.email}
                    disabled={isLoading}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label className="text-white">Your message</Form.Label>
                  <Form.Control
                    as="textarea"
                    required
                    name="msgInput"
                    rows={5}
                    onChange={detailChangeHandler}
                    value={details.msg}
                    disabled={isLoading}
                  />
                </Form.Group>

                <div className="row mt-4 justiy-content-between action-buttons-wrapper">
                  <div className="col-xs-12 col-sm-6 mb-3  d-flex justify-content-center ">
                    <Button
                      variant="success"
                      className="fifth-heading send-btn"
                      type="submit"
                      disabled={isLoading}
                    >
                      {!isLoading ? "Send Details" : buttonLoadingComponent}
                    </Button>
                  </div>
                  <div className="col-xs-12 col-sm-6 mb-3 d-flex justify-content-center">
                    <Button
                      variant="info"
                      className="fifth-heading dcv-btn"
                      onClick={cvDownloadHandler}
                    >
                      <i className="bi bi-download"></i> &nbsp; Download CV{" "}
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Contact;
