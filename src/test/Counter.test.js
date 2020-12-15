import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

describe("<Counter />", () => {
  it("matches snapshot", () => {
    const utils = render(<Counter />);
    expect(utils.container).toMatchSnapshot();
  });
});
