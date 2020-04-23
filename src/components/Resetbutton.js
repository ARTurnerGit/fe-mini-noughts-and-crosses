import React from "react";

function Resetbutton({ handleResetClick }) {
  return (
    <button className="game-button" onClick={handleResetClick}>
      RESET
    </button>
  );
}

export default Resetbutton;
