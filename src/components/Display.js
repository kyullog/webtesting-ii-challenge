import React from "react";

const Display = props => {
  return (
    <>
      <h2>Count</h2>
      <div className="wrapper">
        <>
          <h3>Balls</h3>
          <p>{props.balls}</p>
        </>
        <>
          <h3>Strikes</h3>
          <p>{props.strikes}</p>
        </>
      </div>
    </>
  );
};

export default Display;
