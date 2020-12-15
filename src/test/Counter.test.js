import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

describe("<Counter />", () => {
  it("matches snapshot", () => {
    const utils = render(<Counter />);
    expect(utils.container).toMatchSnapshot();
  });
  it("has a number and two buttons", () => {
    const utils = render(<Counter />);
    // 버튼과 숫자가 있는지 확인
    utils.getByText("0");
    utils.getByText("+1");
    utils.getByText("-1");
  });
});
