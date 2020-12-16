import React from "react";
import { render } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("<TodoList/>", () => {
  const sampleTodos = [
    {
      id: 1,
      text: "TDD 배우기",
      done: true,
    },
    {
      id: 2,
      text: "react-testing-library 사용하기",
      done: true,
    },
  ];

  it("renders todos properly", () => {
    const { getByText } = render(<TodoList todos={sampleTodos} />);
    getByText(sampleTodos[0].text);
    getByText(sampleTodos[1].text);
  });
});
