import React from "react";
import { render, cleanup } from "react-testing-library";

import Display from "./Display";

describe("Display component tests", () => {
  it("renders w/out crashing", () => {
    render(<Display />);
  });
  it("should display a header to label counts", () => {
    const { getByText } = render(<Display />);
    getByText(/strikes/i, /balls/i);
    cleanup();
  });
  it("should render two numbers to represent the count, from props", () => {
    const { getByTestId } = render(<Display strikes={2} balls={3} />);
    const strikes = getByTestId("strikes-display");
    const balls = getByTestId("balls-display");
    expect(strikes.textContent).toEqual("2");
    expect(balls.textContent).toEqual("3");
  });
});
