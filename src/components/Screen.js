import React from "react";

// const Screen = () => {
//   return (<div className="screen">1234</div>);
// };
const Screen = ({ value }) => {
  return (
    <div className="screen">
      <span className="screen-span">(0)</span> {value || "0"}
    </div>
  );
};

export default Screen;
