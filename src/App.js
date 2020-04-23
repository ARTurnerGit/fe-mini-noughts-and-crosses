import React from "react";
import "./App.css";
import PlayingArea from "./components/PlayingArea";
import Titlescreen from "./components/Titlescreen";

class App extends React.Component {
  state = {
    gameNotStarted: true,
  };

  handleStartGame = () => {
    this.setState((currentState) => {
      return { gameNotStarted: !currentState.gameNotStarted };
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.gameNotStarted && (
          <Titlescreen handleStartGame={this.handleStartGame} />
        )}
        <PlayingArea />
      </div>
    );
  }
}

export default App;
