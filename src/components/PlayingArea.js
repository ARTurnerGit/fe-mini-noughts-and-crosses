import React from "react";
import Squares from "./Squares";
import Resetbutton from "./Resetbutton";
import Winnermessage from "./Winnermessage";

class PlayingArea extends React.Component {
  state = {
    board: ["", "", "", "", "", "", "", "", ""],
    winningIndices: [],
    winnerIs: "",
    gameIsOver: false,
    isNoughtsTurn: true,
  };

  handleBoardClick = (event) => {
    let indexToChange = parseInt(event.target.name);
    let valueToAdd = this.state.isNoughtsTurn ? "O" : "X";

    !this.state.gameIsOver &&
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
      winningIndices: [],
      winnerIs: "",
      gameIsOver: false,
      isNoughtsTurn: true,
    });
  };

  checkForWinner = () => {
    let noughtsWins = false;
    let crossesWins = false;
    let boardCopy = [...this.state.board];
    let rows = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];
    let cols = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    let diags = [
      [0, 4, 8],
      [2, 4, 6],
    ];
    let possibleBoardCombinations = [...rows, ...cols, ...diags];
    let currentBoardCombinations = possibleBoardCombinations.map(
      (arrayOfIndices) => {
        return arrayOfIndices.map((index) => {
          return boardCopy[index];
        });
      }
    );

    noughtsWins = currentBoardCombinations.some((line) => {
      return line.every((square) => {
        return square === "O";
      });
    });
    crossesWins = currentBoardCombinations.some((line) => {
      return line.every((square) => {
        return square === "X";
      });
    });

    if (noughtsWins) {
      let winningIndex = currentBoardCombinations.findIndex((subArr) =>
        subArr.every((entry) => entry === "O")
      );
      this.setState({
        winnerIs: "noughts",
        gameIsOver: true,
        winningIndices: possibleBoardCombinations[winningIndex],
      });
    } else if (crossesWins) {
      let winningIndex = currentBoardCombinations.findIndex((subArr) =>
        subArr.every((entry) => entry === "X")
      );
      this.setState({
        winnerIs: "crosses",
        gameIsOver: true,
        winningIndices: possibleBoardCombinations[winningIndex],
      });
    }
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.board !== prevState.board) {
      this.checkForWinner();
    }
  }

  render() {
    console.log("rendering...");
    console.log(this.state.winningIndices);
    return (
      <div className="playing-area">
        {this.state.gameIsOver && (
          <Winnermessage winnerIs={this.state.winnerIs} />
        )}
        <Squares
          handleBoardClick={this.handleBoardClick}
          board={this.state.board}
          winningIndices={this.state.winningIndices}
        />
        {this.state.gameIsOver && (
          <Resetbutton handleResetClick={this.handleResetClick} />
        )}
      </div>
    );
  }
}

export default PlayingArea;
