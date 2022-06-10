import "./Contact.css";
import React, { useState } from "react";
import FeedbackList from "./FeedbackList/FeedbackList.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [feedbackList, setFeedBackList] = useState(
    JSON.parse(localStorage.getItem("feedback")) ?? []
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showPreviousFeedbacks, setShowPreviousFeedbacks] = useState(false);
  const [trigger, setTrigger] = useState(false);

  function handleOnSubmit() {
    if (name !== "" && phone !== "" && email !== "" && feedback !== "") {
      setFeedBackList((prev) => {
        const list = {
          name: name,
          phone: phone,
          email: email,
          feedback: feedback,
          dateCreated: new Date().toLocaleDateString(),
          timeCreated: new Date().toLocaleTimeString(),
        };

        const updatedFeedbackList = [list, ...prev];

        localStorage.setItem("feedback", JSON.stringify(updatedFeedbackList));

        setName("");
        setPhone("");
        setEmail("");
        setFeedback("");
        setTrigger(true);

        return updatedFeedbackList;
      });
    } /* else {
      alert(
        "You have to fill out everything to send a feedback, unfortunately :("
      );
    } */
  }

  return (
    <div>
      <h1>Contact us</h1>
      <div className="contact-container">
        <div>
          <h2 className="outline">
            Please tell us how you feel, your compliments and even complains
            about our service, infrastructure... <br /> <br />
            That would help us a lot to grow our business. 🤍 <br />
          </h2>
          <a
            to="https://www.facebook.com/NniceKaraoke/"
            className="social-link"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} />
            <p>facebook</p>
          </a>
        </div>
        <div className="feedback_field">
          <form action="">
            <div className="feedback_component">
              <label className="lbl_ip_feedback" htmlFor="ip_feedback-name">
                Your name
              </label>
              <input
                id="ip_feedback-name"
                className="input"
                type="text"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>{" "}
            <div className="feedback_component">
              <label className="lbl_ip_feedback" htmlFor="ip_feedback-phone">
                Phone number
              </label>
              <input
                id="ip_feedback-phone"
                className="input"
                type="text"
                autoComplete="off"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>{" "}
            <div className="feedback_component">
              <label className="lbl_ip_feedback" htmlFor="ip_feedback-email">
                Email
              </label>
              <input
                id="ip_feedback-email"
                className="input"
                type="text"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>{" "}
            <div className="feedback_component">
              <label
                /* className="lbl_ip_feedback" */ className="lbl_ip_feedback lbl_ip_feedback-box"
                htmlFor="ta_feedback-box"
              >
                Your feedback
              </label>
              <textarea
                id="ip_feedback-box"
                className="input"
                type="text"
                autoComplete="off"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </div>{" "}
            <div className="d_feedback_submit-btn">
              <button
                type="button"
                className="btn"
                onClick={() => setShowPreviousFeedbacks(true)}
              >
                See previous feedbacks
              </button>
              <button
                type="button"
                className="main-btn feedback_submit-btn"
                onClick={() => {
                  if (
                    name !== "" &&
                    phone !== "" &&
                    email !== "" &&
                    feedback !== ""
                  ) {
                    alert("Your feedback was received! Thank you.");
                    handleOnSubmit();
                  } else {
                    alert(
                      "You have to fill out everything to send a feedback, unfortunately :("
                    );
                  }
                }}
              >
                OK
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <div> */}
      <FeedbackList
        info={feedbackList}
        trigger={showPreviousFeedbacks}
        setTrigger={setShowPreviousFeedbacks}
      />
      {/* </div> */}
    </div>
  );
}
