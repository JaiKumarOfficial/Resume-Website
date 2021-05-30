import React from "react";
import { useState } from "react";
import image from "../images/shake.svg";
import emailjs from "emailjs-com";
import validator from "validator";

function Contact() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [contactMessageError, setContactMessageError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setContactMessageError("");
    const email_from = e.target.from_name.value;
    const contact_message = e.target.message.value;
    if (!validator.isEmail(email_from)) {
      setEmailError("*Invalid");
    }
    if (validator.isEmpty(contact_message)) {
      setContactMessageError("*Required");
    }
    if (email_from && contact_message) {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_USER_ID
        )
        .then(
          (result) => {
            setMessage("Thanks, I'll reply ASAP!");
          },
          (error) => {
            setError(true);
            setMessage("Something went wrong");
          }
        );
    }
  };

  return (
    <>
      <div id="contact" className="contact">
        <div className="left">
          <img src={image} alt="contact-image"></img>
        </div>
        <div className="right">
          <h2>Contact</h2>
          <form onSubmit={handleSubmit}>
            <input name="from_name" type="text" placeholder="Email" />
            {emailError ? (
              <span className="text-danger">{emailError}</span>
            ) : (
              ""
            )}
            <textarea name="message" placeholder="Message"></textarea>
            {contactMessageError ? (
              <span className="text-danger">{contactMessageError}</span>
            ) : (
              ""
            )}
            <button type="submit">Submit</button>
            {message ? (
              <span className={error ? "text-danger" : "text-success"}>
                {message}
              </span>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
