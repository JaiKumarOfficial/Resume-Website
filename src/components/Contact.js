import React from "react";
import { useState } from "react";
import image from "../images/shake.svg";
import emailjs from "emailjs-com";
import validator from "validator";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

function Contact() {
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [contactMessageError, setContactMessageError] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.name === "from_name") {
      setEmailInput(e.target.value);
    }
    if (e.target.name === "message") {
      setMessageInput(e.target.value);
      if (e.target.value.trim()) {
        setContactMessageError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setContactMessageError("");
    const email_from = e.target.from_name.value;
    const contact_message = e.target.message.value;
    if (!validator.isEmail(email_from)) {
      setEmailError("Invalid");
    }
    if (validator.isEmpty(contact_message)) {
      setContactMessageError("Required");
    }
    if (validator.isEmail(email_from) && contact_message) {
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
            setEmailInput("");
            setMessageInput("");
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
          <div className="contact-left-img-wrapper">
            <img src={image} alt="contact-image"></img>
          </div>
        </div>
        <div className="contact-child-right">
          <h2 className="title">CONTACT</h2>
          <form onSubmit={handleSubmit}>
            <div className="email-label-input">
              <TextField
                id="standard-basic"
                label="Email"
                name="from_name"
                value={emailInput}
                onChange={handleChange}
                error={emailError ? true : false}
                helperText={emailError ? emailError : ""}
                autoComplete="off"
              />
            </div>
            <div className="message-label-textarea">
              <TextField
                id="standard-multiline-static"
                name="message"
                label="Message"
                value={messageInput}
                onChange={handleChange}
                multiline={true}
                rows={4}
                error={contactMessageError ? true : false}
                helperText={contactMessageError ? contactMessageError : ""}
              />
            </div>
            {/* <div className="email-label-input">
              <label>
                Email*
                {emailError ? (
                  <span className="text-danger">{emailError}</span>
                ) : (
                  ""
                )}
              </label>
              <input
                name="from_name"
                type="text"
                placeholder="Email"
                value={emailInput}
                onChange={handleChange}
              />
            </div> */}
            {/* <div className="message-label-textarea">
              <label>
                Message*
                {contactMessageError ? (
                  <span className="text-danger">{contactMessageError}</span>
                ) : (
                  ""
                )}
              </label>
              <textarea
                name="message"
                placeholder="Message"
                value={messageInput}
                onChange={handleChange}
              ></textarea>
            </div> */}
            <div className="submit-form">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={emailInput && messageInput ? false : true}
              >
                send
              </Button>
              {message ? (
                <span
                  className={
                    error ? "submit text-danger" : "submit text-success"
                  }
                >
                  {message}
                </span>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
