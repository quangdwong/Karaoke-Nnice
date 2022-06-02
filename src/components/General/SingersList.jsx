import React from "react";
import songs from "./Songs.json";

const SingersList = () => {
  return (
    <div className="general-list">
      {songs.map((item, index) => (
        <div className="general-list_item" key={index}>
          {item.artist}
        </div>
      ))}
    </div>
  );
};

export default SingersList;
