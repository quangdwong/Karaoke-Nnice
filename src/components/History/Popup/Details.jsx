import React, { useState } from "react";
import "./Popup.css";

export default function Details(props) {
  const info = JSON.parse(localStorage.getItem("history")) ?? [];
  const trigger = props.trigger;
  const index = props.index;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return trigger ? (
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
          {info[index].date.month}-{info[index].date.day}-
          {info[index].date.year}
        </div>
      </div>
      <br />
      <div>
        Created on: <div className="data">{info[index].dateCreated}</div>
      </div>
      <div className="btn-section">
        <button className="btn">Delete</button>
        <button className="main-btn">OK</button>
      </div>
    </div>
  ) : (
    ""
  );
}
