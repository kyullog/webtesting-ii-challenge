import React, { Component } from "react";
import Display from "./Display";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      strikes: 0,
      balls: 0
    };
  }

  strike = () => {
    if (this.state.strikes === 2) {
      this.setState({ strikes: 0, balls: 0 });
    } else {
      this.setState({ strikes: this.state.strikes + 1 });
    }
  };

  ball = () => {
    if (this.state.balls === 3) {
      this.setState({ balls: 0, strikes: 0 });
    } else {
      this.setState({ balls: this.state.balls + 1 });
    }
  };

  hit = () => {
    this.setState({ strikes: 0, balls: 0 });
  };

  render() {
    return (
      <>
        <>
          <button onClick={this.strike}>Strike</button>
          <button onClick={this.ball}>Ball</button>
          <button>Foul</button>
          <button onClick={this.hit}>Hit</button>
        </>
        <Display strikes={this.state.strikes} balls={this.state.balls} />
      </>
    );
  }
}

export default Dashboard;
