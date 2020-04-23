import React from "react";

function Titlescreen({ handleStartGame }) {
  return (
    <div className="title-container">
      <h1 className="title">
        NOUGHTS
        <br />
        AND
        <br />
        CROSSES
        <br />
      </h1>
      <button className="game-button" onClick={handleStartGame}>
        PLAY
      </button>
    </div>
  );
}

export default Titlescreen;
