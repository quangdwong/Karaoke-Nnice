import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        className={(navData) => (navData.isActive ? "active-nav" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/general"
        className={(navData) => (navData.isActive ? "active-nav" : "")}
      >
        General
      </NavLink>
      <NavLink
        to="/book"
        className={(navData) => (navData.isActive ? "active-nav" : "")}
      >
        Book
      </NavLink>
      <NavLink
        to="/history"
        className={(navData) => (navData.isActive ? "active-nav" : "")}
      >
        History
      </NavLink>
      <NavLink
        to="/news"
        className={(navData) => (navData.isActive ? "active-nav" : "")}
      >
        News
      </NavLink>

      <NavLink
        to="/contact"
        className={(navData) => (navData.isActive ? "active-nav" : "")}
      >
        Contact
      </NavLink>
      <NavLink
        to="/about"
        className={(navData) => (navData.isActive ? "active-nav" : "")}
      >
        About us
      </NavLink>
    </div>
  );
}
