import React from "react";
import "../../src/baseball.css";

const Display = ({ balls, strike }) => {
  return (
    <h3 className="title">
      Balls: <span>{balls}</span> | Strikes: <span>{strike}</span>
    </h3>
  );
};

export default Display;
