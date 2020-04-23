import React from "react";

function Squares({ handleBoardClick, board }) {
  const namedSquares = [];
  for (let i = 0; i < 9; i++) {
    namedSquares.push(
      <button
        className="grid-element"
        onClick={handleBoardClick}
        name={[i]}
        key={[i]}
        value={board[i]}
      >
        {board[i].toUpperCase()}
      </button>
    );
  }

  return <div className="grid-container">{namedSquares}</div>;
}

export default Squares;
