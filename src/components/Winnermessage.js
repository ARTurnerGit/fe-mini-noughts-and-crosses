import React from "react";

function Winnermessage({ winnerIs }) {
  return (
    <button className="winner-button">{winnerIs.toUpperCase()} WINS</button>
  );
}

export default Winnermessage;
