import React from "react";
const getStyleName = (btn) => {
  const className = {
    "=": "equals",
    "x": "operation",
    "/": "operation",
    "-": "operation",
    "+": "operation",
    "C": "upper-btn",
    "+/-": "upper-btn",
    "%": "upper-btn"
  };

  return className[btn];
};

const Button = ({ value }) => {
  return <button className={`${getStyleName(value)} button`}>{value}</button>;
};

export default Button;
