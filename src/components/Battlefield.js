import React from "react";
import Squares from "./Squares";

class Battlefield extends React.Component {
  state = {
    board: ["", "", "", "", "", "", "", "", ""],
  };

  handleClick = (event) => {
    console.log(event.target);
  };

  render() {
    return (
      <div>
        <h1>BATTLEFIELD</h1>
        <Squares handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Battlefield;
