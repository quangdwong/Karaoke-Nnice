import React from "react";
import songs from "./Songs.json";

const SongsList = () => {
  return (
    <div className="general-list">
      {songs.map((item, index) => (
        <div className="general-list_item" key={index}>
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default SongsList;
