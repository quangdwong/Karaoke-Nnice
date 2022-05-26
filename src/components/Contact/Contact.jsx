import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";
import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact us</h1>
      <div className="contact-container">
        <h2 className="outline">
          Please tell us how you feel, your compliments and even complains about
          our service, infrastructure. <br /> <br />
          That would help us a lot to grow our business. 🤍
        </h2>
        <div className="review_field">
          <form action="">
            <div className="review_component">
              <label className="lbl_ip_review" htmlFor="ip_review-name">
                Your name
              </label>
              <input id="ip_review-name" className="input" type="text" />
            </div>{" "}
            <div className="review_component">
              <label className="lbl_ip_review" htmlFor="ip_review-phone">
                Phone number
              </label>
              <input id="ip_review-phone" className="input" type="text" />
            </div>{" "}
            <div className="review_component">
              <label className="lbl_ip_review" htmlFor="ip_review-email">
                Email
              </label>
              <input id="ip_review-email" className="input" type="text" />
            </div>{" "}
            <div className="review_component">
              <label
                /* className="lbl_ip_review" */ className="lbl_ip_review lbl_ip_review-box"
                htmlFor="ta_review-box"
              >
                Your review
              </label>
              <textarea id="ip_review-box" className="input" type="text" />
            </div>{" "}
            <div className="d_review_submit-btn">
              <button className="btn">See previous feedbacks</button>
              <button className="main-btn review_submit-btn">OK</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
