import React, { useState } from "react";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

function App() {
  const [balls, setBalls] = useState(0);
  const [strike, setStrike] = useState(0);

  const updateBalls = () => {
    if (balls >= 4) {
      setBalls(0);
    } else {
      setBalls(balls + 1);
    }
  };

  const updateStrikes = () => {
    if (strike >= 3) {
      setStrike(0);
    } else {
      setStrike(strike + 1);
    }
  };

  const updateFouls = () => {
    if (strike === 0) {
      setStrike(1);
    } else if (strike === 1) {
      setStrike(2);
    } else if (strike === 2) {
      setStrike(2);
    }
  };

  const updateHit = () => {
    setStrike(0);
    setBalls(0);
  };

  return (
    <div className="App">
      <Display balls={balls} strike={strike} />
      <Dashboard
        updateBalls={updateBalls}
        updateStrikes={updateStrikes}
        updateFouls={updateFouls}
        updateHit={updateHit}
      />
    </div>
  );
}

export default App;
