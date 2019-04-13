import React from "react";
import { render, cleanup } from "react-testing-library";

import Dashboard from "./Dashboard";

describe("The Dashboard component", () => {
  it("should display four buttons: strike, ball, foul, hit", () => {
    const { getByText } = render(<Dashboard />);
    const buttons = ["Strike", "Ball", "Foul", "Hit"];
    buttons.forEach(button => getByText(button));
    cleanup();
  });
});
