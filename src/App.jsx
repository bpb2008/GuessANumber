import { useState } from "react";
import Result from "./Components/Result";
import "./App.css";

const App = () => {
  const [userNum, setUserNum] = useState(0);

  const handleOnChange = (e) => {
    const parsedInput = Number(e.target.value);

    if (isNaN(parsedInput)) {
      setUserNum(-1);
    } else {
      setUserNum(parsedInput);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <label htmlFor="userNum">Guess a number between 1 and 100!</label>
      </div>
      <input
        id="userNum"
        type="text"
        name="userNum"
        onChange={handleOnChange}
      />
      <Result userNum={userNum} />
    </div>
  );
};

export default App;
