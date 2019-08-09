import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import Display from "./Display";

describe("<Display/>", () => {
  it("renders default state values", () => {
    let balls = 0;
    let strikes = 0;
    const display = render(<Display balls={balls} strikes={strikes} />);
    display.getByText(/Balls: 0 | Strikes: 0/);
  });
});
