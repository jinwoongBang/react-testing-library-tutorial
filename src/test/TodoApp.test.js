import React from "react";
import { fireEvent, render } from "@testing-library/react";
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

  it("creates new todo", () => {
    const { getByPlaceholderText, getByText } = render(<TodoApp />);
    fireEvent.change(getByPlaceholderText("할 일을 입력하세요"), {
      target: {
        value: "새 항목 추가하기",
      },
    });
    fireEvent.click(getByText("등록"));
    getByText("새 항목 추가하기");
  });

  it("toggles todo", () => {
    const { getByText } = render(<TodoApp />);
    // TDD 배우기 항목에 클릭 이벤트를 발생시키고 text-decoration 속성이 설정되는지 확인
    const todoText = getByText("TDD 배우기");
    expect(todoText).toHaveStyle("text-decoration: line-through;");
    fireEvent.click(todoText);
    expect(todoText).not.toHaveStyle("text-decoration: line-through;");
    fireEvent.click(TodoText);
    expect(todoText).toHaveStyle("text-decoration: line-through;");
    fireEvent.click(todoText);
  });
});
