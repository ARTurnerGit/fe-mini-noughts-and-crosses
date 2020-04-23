import React from "react";

function Squares({ handleClick }) {
  const namedSquares = [];
  for (let i = 0; i < 9; i++) {
    namedSquares.push(
      <button
        className="grid-element"
        onClick={handleClick}
        name={[i]}
        key={[i]}
      ></button>
    );
  }

  return <div className="grid-container">{namedSquares}</div>;
}

export default Squares;
