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
  const [calc, setCalc] = useState("0");

  const handleButtonClick = (value) => {
    if (calc === "0") {
      setCalc(value.toString());
    } else {
      setCalc(calc + value);
    }
  };

  return (
    <div className="wrapper">
      <Screen value={calc} />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => (
          <Button value={btn} key={i} onClick={() => handleButtonClick(btn)} />
        ))}
      </ButtonBox>
    </div>
  );
}

export default App;

