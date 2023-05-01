import React, { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

const getStyleName = (btn) => {
   const className = {
    "=": "equals",
    x: "operation",
    "/": "operation",
    "-": "operation",
    "+": "operation",
    C: "upper-btn",
    "+/-": "upper-btn",
    "%": "upper-btn",
  };

  return className[btn];
};

const Button = ({ value }) => {
  const { calc,setCalc } = useContext(CalcContext);

  const commaClick = () => {
    setCalc({
      ...calc,
      num: 89,
      // num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
    })
  }

  const resetClick = () => {
    setCalc({sign: '', num: 0, res: 0})
  }

  const handleClickButton = () => {
    const numberString = value.toString()

    let numberValue;

    setCalc({
      ...calc,
      num: numberValue
    })
  }

  const handleBtnClick = () => {

    const results = {
      '.': commaClick,
      'C': resetClick
    }

    if(results[value]) {
      return results[value]()
    } else{
      return handleClickButton()
    }
  };

  return (
    <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>
      {value}
    </button>
  );
};

export default Button;
