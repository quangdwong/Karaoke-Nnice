import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome, from Nnice</h1>
      <div className="panel panel1">
        <div>
          <h2 className="text">
            Welcome to the world of karaoke. We’re here to let go with you and
            create moments that everyone enjoys and remembers forever. Show up.
            Sing the night away. And dance your way out.
          </h2>
        </div>
        <NavLink className="book__btn" to="/book">
          <button className="main-btn">Book Online Now</button>
        </NavLink>
      </div>
      {/* <div>
        <div>
          <div>
            <div className="headline">Just a touch of your love is enough</div>
            <div>
              Using our state of the art technology, select a song from one of
              our themed playlists, or browse our 10,000+ strong song catalogue
              – we’ve got everything from current chart hits to old school
              classics.
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
