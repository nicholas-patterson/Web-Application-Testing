import React from "react";

const Display = ({ balls, strike }) => {
  return (
    <h3>
      Balls: {balls} | Strikes: {strike}
    </h3>
  );
};

export default Display;
