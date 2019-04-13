import React, { Component } from "react";

class Dashboard extends Component {
  state = {
    strikes: 0,
    balls: 0
  };

  render() {
    return (
      <>
        <button>Strike</button>
        <button>Ball</button>
        <button>Foul</button>
        <button>Hit</button>
      </>
    );
  }
}

export default Dashboard;
