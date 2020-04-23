import React from "react";
import Squares from "./Squares";
import Resetbutton from "./Resetbutton";

class PlayingArea extends React.Component {
  state = {
    board: ["", "", "", "", "", "", "", "", ""],
    gameIsOver: false,
    isNoughtsTurn: true,
  };

  handleBoardClick = (event) => {
    let indexToChange = parseInt(event.target.name);
    let valueToAdd = this.state.isNoughtsTurn ? "O" : "X";

    this.setState((currentState) => {
      let gameBoard = [...currentState.board];
      if (gameBoard[indexToChange] === "") {
        gameBoard[indexToChange] = valueToAdd;
        return gameBoard.includes("")
          ? { board: gameBoard, isNoughtsTurn: !currentState.isNoughtsTurn }
          : {
              board: gameBoard,
              isNoughtsTurn: !currentState.isNoughtsTurn,
              gameIsOver: !currentState.gameIsOver,
            };
      }
    });
  };

  handleResetClick = () => {
    this.setState({
      board: ["", "", "", "", "", "", "", "", ""],
      gameIsOver: false,
    });
  };

  render() {
    console.log("rendering...");
    return (
      <div className="playing-area">
        <Squares
          handleBoardClick={this.handleBoardClick}
          board={this.state.board}
        />
        {this.state.gameIsOver && (
          <Resetbutton handleResetClick={this.handleResetClick} />
        )}
      </div>
    );
  }
}

export default PlayingArea;
