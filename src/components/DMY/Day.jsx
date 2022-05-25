import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Day({ month, setDay }) {
  const [isActive, setIsActive] = useState(false);
  let options;

  if (month === "February") {
    options = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28,
    ];
  } else if (
    month === "January" ||
    month === "March" ||
    month === "May" ||
    month === "July" ||
    month === "August" ||
    month === "October" ||
    month === "December"
  ) {
    options = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ];
  } else {
    options = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ];
  }

  const [seletedItem, setSelectedItem] = useState("Choose day");

  return (
    <div>
      <div className="datefield day">
        <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
          {seletedItem}
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        {isActive && (
          <div className="dropdown-content">
            {options.map((option, index) => (
              <div
                onClick={() => {
                  setDay(option);
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
