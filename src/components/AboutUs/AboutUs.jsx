import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="content">
      <h1>Hi ;)</h1>
      <h2 className="text">
        This website is a product created to demonstrate the ideas for a karaoke
        website of our project group.
        <br />
        We hope you like our hard work.
      </h2>
      <ul className="members-list">
        Lecturer
        <li>Mr. Quoc Viet Nguyen</li>
        <br />
        Members
        <li>Nguyen Tu Quyen</li>
        <li>Nguyen To Duc Tai</li>
        <li>Nguyen Ngoc Thao</li>
        <li>Quan Huynh Quang Duong</li>
        <br />
        Subject
        <li>Information Technology Project Management</li>
      </ul>
    </div>
  );
}
