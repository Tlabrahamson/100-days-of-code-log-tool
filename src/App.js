import React from "react";
//Components
import Countdown from "./components/Countdown";
import Log from "./components/Log";
//CSS
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>100 Days of Code Log Tool</h1>
      <Countdown />
      <Log />
    </div>
  );
};

export default App;
