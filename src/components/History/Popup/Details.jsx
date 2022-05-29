import { faL } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./Popup.css";

export default function Details(props) {
  const info = JSON.parse(localStorage.getItem("history")) ?? [];
  const trigger = props.trigger;
  const setTrigger = props.setTrigger;
  const index = props.index;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // const handleOnClick_Delete = () => {
  //   const text = "Do you want to delete?";
  //   if (window.confirm(text) == true) {
  //   } else {
  //   }
  // };

  return trigger ? (
    <div className="background">
      <div className="overlay" onClick={() => setTrigger(false)}></div>
      <div className="popup">
        <h2>Details</h2>
        <div>
          Name: <div className="data">{info[index].name}</div>
        </div>
        <br />
        <div>
          Phone number: <div className="data">{info[index].phone}</div>
        </div>
        <br />
        <div>
          Date:{" "}
          <div className="data">
            {info[index].date.month}/{info[index].date.day}/
            {info[index].date.year}
          </div>
        </div>
        <br />
        <div>
          Created on:{" "}
          <div className="data">
            {info[index].dateCreated} - {info[index].timeCreated}
          </div>
        </div>
        <div className="btn-section">
          {/* <button className="btn" onClick={handleOnClick_Delete}>
              Delete
            </button> */}
          {/* <button className="main-btn" onClick={() => setTrigger(false)}>
            OK
          </button> */}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
