import React, { useState } from "react";
import "./App.css";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";

const btnValues = [
  ["C", "+/-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  const [displayValue, setDisplayValue] = useState("0");

  const handleButtonClick = (value) => {
    if (displayValue === "0") {
      setDisplayValue(value.toString());
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  return (
    <div className="wrapper">
      <Screen value={displayValue} />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => (
          <Button value={btn} key={i} onClick={() => handleButtonClick(btn)} />
        ))}
      </ButtonBox>
    </div>
  );
}

export default App;

