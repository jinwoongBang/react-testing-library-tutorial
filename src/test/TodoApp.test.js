import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "../components/TodoApp";

describe("<TodoApp/>", () => {
  it("renders TodoForm and TodoList", () => {
    const { getByText, getByTestId } = render(<TodoApp />);
    getByText("등록"); // TodoForm 의 존재 여부
    getByTestId("TodoList"); // TodoList 의 존재 여부F
  });

  it("renders two defaults todos", () => {
    const { getByText } = render(<TodoApp />);
    getByText("TDD 배우기");
    getByText("react-testing-library 사용하기");
  });
});
