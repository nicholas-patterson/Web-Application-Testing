import React from "react";
import "../../src/baseball.css";

const Display = ({ balls, strike }) => {
  return (
    <h3 className="title">
      Balls: {balls} | Strikes: {strike}
    </h3>
  );
};

export default Display;
