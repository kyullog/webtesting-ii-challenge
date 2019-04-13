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

  render() {
    return (
      <>
        <>
          <button onClick={this.strike}>Strike</button>
          <button>Ball</button>
          <button>Foul</button>
          <button>Hit</button>
        </>
        <Display strikes={this.state.strikes} balls={this.state.balls} />
      </>
    );
  }
}

export default Dashboard;
