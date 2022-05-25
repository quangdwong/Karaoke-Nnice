import React, { useState } from "react";
import "./History.css";
import Details from "./Popup/Details";

export default function History() {
  // const [isActive, setIsActive] = useState(false);
  const info = JSON.parse(localStorage.getItem("history")) ?? [];
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <h1>Look into your recent payments</h1>
      <div className="payment-list">
        <div className="newest-payment">
          <h2 className="title-h2">Newest payment</h2>
          <div className="payment-info" onClick={() => setToggle(true)}>
            Name: {info[0].name} <br />
            Phone numbmer: {info[0].phone} <br />
            Date of reservation: {info[0].date.month}-{info[0].date.day}-
            {info[0].date.year}
          </div>
          <Details trigger={toggle} index={0} />
        </div>
        <div>
          <h2 className="title-h2">Older payments</h2>
          <div className="older-payments">
            {info.slice(1).map((item, index) => (
              <div className="payment-info" key={index}>
                <div>Name: {item.name}</div>
                <div>Phone number: {item.phone}</div>
                <div>
                  Date of reservation: {item.date.month}-{item.date.day}-
                  {item.date.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
