import React, { useEffect, useState } from "react";
import "./History.css";
import Details from "./Popup/Details";
import { Block_Newest, Block_Older } from "./Block/Block";

export default function History() {
  const info = JSON.parse(localStorage.getItem("history")) ?? [];
  const [toggle, setToggle] = useState(false);
  const [index, setIndex] = useState("");

  return (
    <div>
      <h1>Look into your recent payments</h1>
      <div className="payment-list">
        <div className="newest-payment">
          <h2 className="title-h2">Newest payment</h2>
          {info.length === 0 ? (
            "Looks like there is nothing here yet!"
          ) : (
            <Block_Newest
              info={info}
              setToggle={setToggle}
              setIndex={setIndex}
            />
          )}
        </div>
        <div>
          <h2 className="title-h2">Older payments</h2>
          <div className="older-payments">
            {info.length === 0 ? (
              "No older payments"
            ) : (
              <Block_Older
                info={info}
                setToggle={setToggle}
                setIndex={setIndex}
              />
            )}
          </div>
        </div>
        <Details trigger={toggle} setTrigger={setToggle} index={index} />
      </div>
    </div>
  );
}
