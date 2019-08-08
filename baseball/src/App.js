import React, { useState } from "react";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

function App() {
  const [balls, setBalls] = useState(0);
  const [strike, setStrike] = useState(0);
  return (
    <div className="App">
      <Display balls={balls} strike={strike} />
      <Dashboard />
    </div>
  );
}

export default App;
