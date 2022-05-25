import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Year({ setYear }) {
  const [isActive, setIsActive] = useState(false);
  const options = [2022, 2023];
  const [selectedItem, setSelectedItem] = useState("Choose year");

  return (
    <div>
      <div className="datefield year">
        <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
          {selectedItem}
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        {isActive && (
          <div className="dropdown-content">
            {options.map((option, index) => (
              <div
                onClick={() => {
                  setYear(option);
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
