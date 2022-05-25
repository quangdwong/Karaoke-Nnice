import React from "react";
import "./News.css";

export default function News() {
  return (
    <div>
      <h1>What is happening now</h1>
      <div className="news-content">
        <ul>
          <li>
            {/* <img
              src="https://static.muanhanh.com/images/2019/08/karaoke-nice-phan-thie/nice-3.png"
              alt=""
            /> */}
            <div className="news-text">
              <div>There is a new Nnice karaoke on your street!</div>
              <div className="news-text__description">
                Make sure to check it out.
              </div>
            </div>
          </li>
          <li>
            <div className="news-text">
              <div>Discount week is starting!</div>
              <div className="news-text__description">
                Hurry up and book for a reservation.
              </div>
            </div>
          </li>
          <li>
            <div className="news-text">
              <div>Our website is under maintenance</div>
              <div className="news-text__description">
                We are so sorry for the inconvenience.
              </div>
            </div>
          </li>
          <li>
            <div className="news-text">
              <div>Come to us for free drinks this Black Firday</div>
              <div className="news-text__description">
                Free drinks on Black Friday. Hurry, before we run out!
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
