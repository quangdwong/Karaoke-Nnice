import "./FeedbackList.css";
import React, { useState } from "react";

export default function FeedbackList(props) {
  const info = props.info;
  const trigger = props.trigger;
  const setTrigger = props.setTrigger;
  const [toggle, setToggle] = useState(false);

  return trigger ? (
    <div className="feedback-list_background">
      <div
        className="overlay_ground"
        onClick={() => {
          setTrigger(false);
        }}
      ></div>
      <div className="feedback-list_container">
        <h2>Your previous feedbacks</h2>
        <div className="feedback-list_mainboard">
          {info.length === 0
            ? "You have not created any feedback."
            : info.map((item, index) => (
                <div
                  key={index}
                  className="feedback-list_block"
                  onClick={() => setToggle(!toggle)}
                >
                  <div className="feedback-list_content">
                    {item.name}, {item.dateCreated} - {item.timeCreated}
                    <div className="data">{item.feedback} </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
