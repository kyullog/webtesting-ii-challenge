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
      cleanup();
    });
    it("should reset count when 4 balls is reached", () => {
      const { getByText } = render(<Dashboard />);
      const ballButton = getByText("Ball");
      const strikeButton = getByText("Strike");
      fireEvent.click(strikeButton);
      getByText("1");
      for (let i = 1; i <= 6; i++) {
        fireEvent.click(ballButton);
      }
      getByText("2");
      getByText("0");
      cleanup();
    });
  });
  describe("the hit button", () => {
    it("should reset the count when pressed", () => {
      const { getByText, getByTestId } = render(<Dashboard />);
      const strike = getByText("Strike");
      const ball = getByText("Ball");
      const hit = getByText("Hit");
      fireEvent.click(strike);
      const ballDisp = getByTestId("balls-display");
      const strikesDisp = getByTestId("strikes-display");
      expect(strikesDisp.textContent).toEqual("1");
      fireEvent.click(ball);
      fireEvent.click(ball);
      expect(ballDisp.textContent).toEqual("2");
      fireEvent.click(hit);
      expect(strikesDisp.textContent && ballDisp.textContent).toEqual("0");
      cleanup();
    });
  });
  describe("the foul button", () => {
    it("should should add stikes if there are 0 or 1 strike", () => {
      const { getByTestId, getByText } = render(<Dashboard />);
      const foul = getByText("Foul");
      const strikeDisp = getByTestId("strikes-display");
      expect(strikeDisp.textContent).toEqual("0");
      fireEvent.click(foul);
      expect(strikeDisp.textContent).toEqual("1");
      fireEvent.click(foul);
      expect(strikeDisp.textContent).toEqual("2");
      fireEvent.click(foul);
      expect(strikeDisp.textContent).toEqual("2");
    });
  });
});
