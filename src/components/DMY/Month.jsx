import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Month({ setMonth }) {
  const [isActive, setIsActive] = useState(false);
  const options = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
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
