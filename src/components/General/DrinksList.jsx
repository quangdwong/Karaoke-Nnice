import React from "react";
import drinks from "./Drinks.json";

const DrinksList = () => {
  return (
    <div className="general-list">
      {drinks.map((item, index) => (
        <div className="general-list_item" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default DrinksList;
