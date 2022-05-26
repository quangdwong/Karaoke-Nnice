import React from "react";

export function Block_Newest(props) {
  const info = props.info;
  const setToggle = props.setToggle;
  const setIndex = props.setIndex;

  return (
    <div>
      <div
        className="payment-info"
        onClick={() => {
          setToggle(true);
          setIndex(0);
        }}
      >
        Name: {info[0].name} <br />
        Phone numbmer: {info[0].phone} <br />
        Date of reservation: {info[0].date.month}-{info[0].date.day}-
        {info[0].date.year}
      </div>
    </div>
  );
}

export function Block_Older(props) {
  const info = props.info;
  const setToggle = props.setToggle;
  const setIndex = props.setIndex;

  return info.slice(1).map((item, i) => (
    <div
      className="payment-info"
      key={i}
      onClick={() => {
        setToggle(true);
        setIndex(i + 1);
      }}
    >
      <div>Name: {item.name}</div>
      <div>Phone number: {item.phone}</div>
      <div>
        Date of reservation: {item.date.month}-{item.date.day}-{item.date.year}
      </div>
    </div>
  ));
}
