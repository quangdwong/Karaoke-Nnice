import React from "react";
import address from "./Address.json";

function Local() {
  return (
    <div className="general-list">
      {address.map((item, index) => (
        <div className="general-list_item" key={index}>
          <h3>{item.name} </h3>
          <div>{item.address}</div>
          {item.phone.map((item) => (
            <div>{item}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Local;
