import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";

import Dashboard from "./Dashboard";

describe("The Dashboard component", () => {
  it("should display four buttons: strike, ball, foul, hit", () => {
    const { getByText } = render(<Dashboard />);
    const buttons = ["Strike", "Ball", "Foul", "Hit"];
    buttons.forEach(button => getByText(button));
    cleanup();
  });
  describe("the strike button", () => {
    it("should add 1 to strike when Strike button is pressed", () => {
      const { getByText } = render(<Dashboard />);
      const strikeButton = getByText("Strike");
      fireEvent.click(strikeButton);
      getByText("1");
      cleanup();
    });
    it("should reset balls and strikes when strikes reach 3", () => {
      const { getByText } = render(<Dashboard />);
      const strikeButton = getByText("Strike");
      fireEvent.click(strikeButton);
      fireEvent.click(strikeButton);
      fireEvent.click(strikeButton);
      fireEvent.click(strikeButton);
      getByText("1");
      cleanup();
    });
  });
  describe("the ball button", () => {
    it("should add 1 to the ball count on each press", () => {
      const { getByText } = render(<Dashboard />);
      const ballButton = getByText("Ball");
      fireEvent.click(ballButton);
      fireEvent.click(ballButton);
      getByText("2");
    });
  });
});
