import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Month({ setMonth }) {
  const [isActive, setIsActive] = useState(false);
  const options = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [selectedItem, setSelectedItem] = useState("Choose month");

  return (
    <div>
      <div className="datefield month">
        <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
          {selectedItem}
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        {isActive && (
          <div className="dropdown-content">
            {options.map((option, index) => (
              <div
                onClick={() => {
                  setMonth(option);
                  setSelectedItem(option);
                  setIsActive(false);
                }}
                className="dropdown-item"
                key={index}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
