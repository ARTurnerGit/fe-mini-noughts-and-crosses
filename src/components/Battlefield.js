import React from "react";
import Squares from "./Squares";

class Battlefield extends React.Component {
  state = {
    board: ["", "", "", "", "", "", "", "", ""],
    gameIsOver: false,
    isNoughtsGo: true,
  };

  handleClick = (event) => {
    let indexToChange = parseInt(event.target.name);
    let valueToAdd = this.state.isNoughtsGo ? "O" : "X";
    this.setState((currentState) => {
      let gameBoard = [...currentState.board];
      gameBoard[indexToChange] = valueToAdd;

      return { board: gameBoard, isNoughtsGo: !currentState.isNoughtsGo };
    });
  };

  render() {
    console.log(this.state.board);
    return (
      <div>
        <h1>BATTLEFIELD</h1>
        <Squares handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Battlefield;
