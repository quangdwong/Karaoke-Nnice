import React, { useState } from "react";
import DrinksList from "./DrinksList";
import "./General.css";
import Local from "./Local";
import SingersList from "./SingersList";
import SongsList from "./SongsList";

export default function General() {
  const songsPerPage = 10;
  const [page, setPage] = useState(1);
  const startIndex = (page - 1) * songsPerPage;
  // const selectedSongs = songs.slice(startIndex, startIndex + songsPerPage);
  const [menu, setMenu] = useState({
    activeObject: null,
    objects: [
      { id: 0, component: "Songs" },
      { id: 1, component: "Singers" },
      { id: 2, component: "Drinks" },
      { id: 3, component: "Local places" },
    ],
  });
  const [title, setTitle] = useState("");

  const activeClass = (index) => {
    setMenu({ ...menu, activeObject: menu.objects[index].id });
    setTitle(() => {
      let title = "";
      switch (index) {
        case 0:
          title = "We have all the songs you love";
          break;
        case 1:
          title = "We have songs from these singers";
          break;
        case 2:
          title = "Care for drinks?";
          break;
        case 3:
          title = "Find a Nnice karaoke near you";
          break;
      }

      return title;
    });
  };

  const toggleActive = (index) => {
    if (title === "") {
      activeClass(0);
    }

    if (menu.objects[index].id === menu.activeObject) {
      return "menu-component active-menu-component";
    } else {
      return "menu-component";
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <div className="general-container">
        <div className="general-menu">
          {menu.objects.map((item, index) => {
            return (
              <div
                key={index}
                className={toggleActive(index)}
                onClick={() => {
                  activeClass(index);
                }}
              >
                {item.component}
              </div>
            );
          })}
        </div>
        {menu.activeObject === 0 ? <SongsList /> : ""}
        {menu.activeObject === 1 ? <SingersList /> : ""}
        {menu.activeObject === 2 ? <DrinksList /> : ""}
        {menu.activeObject === 3 ? <Local /> : ""}
      </div>
    </div>
  );
}
