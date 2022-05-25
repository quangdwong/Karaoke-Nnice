import React, { useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import "./Book.css";
import Day from "../DMY/Day.jsx";
import Month from "../DMY/Month.jsx";
import Year from "../DMY/Year.jsx";

export default function Book() {
  let navigate = useNavigate("");
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("history")) ?? []
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [toggle, setToggle] = useState(false);

  function handleOnSubmit() {
    if (month !== "" && day !== "" && year !== "") {
      setList((prev) => {
        const receipt = {
          name: name,
          phone: phone,
          date: { day: day, month: month, year: year },
          dateCreated: new Date().toLocaleDateString(),
        };
        const updatedHistory = [receipt, ...prev];

        localStorage.setItem("history", JSON.stringify(updatedHistory));

        navigate("/history");

        setName("");
        setPhone("");
        setMonth("");
        setDay("");
        setYear("");
        return updatedHistory;
      });
    } else {
      alert("You have to choose a value!");
    }
  }

  function alertWhenFilled() {
    if (month !== "" && day !== "" && year !== "") {
      alert("You have booked for a reservation");
    }
  }

  return (
    <div>
      <h1>Book in advance online</h1>
      {!toggle ? (
        <div action="" className="book-form">
          <div className="field name">
            <label htmlFor="name__input">Your name</label>
            <input
              autoComplete="off"
              type="text"
              className="input name__input"
              id="name__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field phone">
            <label htmlFor="phone__input">Phone number</label>
            <input
              autoComplete="off"
              type="text"
              className="input phone__input"
              id="phone__input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          {}
          <button
            className="main-btn"
            onClick={() => {
              const isFilledPage1 = (() => {
                if (name === "" || phone === "") {
                  alert("Please fill in every input");
                  return false;
                } else {
                  setToggle(!toggle);
                }
              })();
            }}
          >
            Next
          </button>
        </div>
      ) : (
        <div className="page2">
          <Month className="select" setMonth={setMonth} />
          <Day className="select" month={month} setDay={setDay} />{" "}
          <Year className="select" setYear={setYear} />
          <div className="btn__div">
            <button className="btn" onClick={() => setToggle(!toggle)}>
              Back
            </button>
            <button
              className="main-btn"
              onClick={() => {
                handleOnSubmit();
                alertWhenFilled();
              }}
            >
              Finish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
