import React from "react";
import { render } from "react-testing-library";

import Display from "./Display";

describe("Display component tests", () => {
  it("renders w/out crashing", () => {
    render(<Display />);
  });
});
