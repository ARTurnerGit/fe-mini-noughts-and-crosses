import React from "react";
import Squares from "./Squares";

class Battlefield extends React.Component {
  state = {
    board: ["", "", "", "", "", "", "", "", ""],
    gameIsOver: false,
    isNoughtsTurn: true,
  };

  handleClick = (event) => {
    let indexToChange = parseInt(event.target.name);
    let valueToAdd = this.state.isNoughtsTurn ? "O" : "X";
    this.setState((currentState) => {
      let gameBoard = [...currentState.board];
      if (gameBoard[indexToChange] === "") {
        gameBoard[indexToChange] = valueToAdd;
        return { board: gameBoard, isNoughtsTurn: !currentState.isNoughtsTurn };
      }
    });
  };

  render() {
    console.log("rendering...");
    return (
      <div className="battlefield">
        <h1>BATTLEFIELD</h1>
        <Squares handleClick={this.handleClick} board={this.state.board} />
      </div>
    );
  }
}

export default Battlefield;
