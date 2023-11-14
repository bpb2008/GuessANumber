import React, { useState } from "react";
import Result from "./Components/Result";
import "./App.css";

const App = () => {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  const [userNum, setUserNum] = useState("");

  return (
    <div className="container">
      <div className="header">
        <label htmlFor="userNum">Guess a number between 1 and 100!</label>
      </div>
      <input
        id="userNum"
        type="text"
        name="userNum"
        value={userNum}
        onChange={(e) => setUserNum(e.target.value)}
      />
      <Result userNum={userNum} computerNum={randomNum} />
    </div>
  );
};

export default App;
