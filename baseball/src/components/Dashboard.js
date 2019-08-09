import React from "react";
import "../../src/baseball.css";

const Dashboard = ({ updateBalls, updateStrikes, updateFouls, updateHit }) => {
  return (
    <div>
      <button onClick={updateStrikes}>Strike</button>
      <button onClick={updateBalls}>Ball</button>
      <button onClick={updateFouls}>Foul</button>
      <button onClick={updateHit}>Hit</button>
    </div>
  );
};

export default Dashboard;
