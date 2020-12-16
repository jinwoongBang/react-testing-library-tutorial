import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TodoForm from "../components/TodoForm";

describe("<TodoForm />", () => {
  const setup = (props = {}) => {
    const utils = render(<TodoForm {...props} />);
    const { getByText, getByPlaceholderText } = utils;
    const input = getByPlaceholderText("할 일을 입력하세요"); // input 이 있는지 확인
    const button = getByText("등록"); // button이 있는지 확인
    return {
      ...utils,
      input,
      button,
    };
  };

  it("has input and a button", () => {
    // [방법 1]
    // const { getByText, getByPlaceholderText } = setup();
    // getByPlaceholderText("할 일을 입력하세요"); // input 이 있는지 확인
    // getByText("등록"); // button 이 있는지 확인

    // [방법 2]
    const { input, button } = setup();
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it("changes input", () => {
    const { input } = setup();
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });
    expect(input).toHaveAttribute("value", "TDD 배우기");
  });

  it("calls onInsert and clears input", () => {
    /*
        여기서 사용한 jest.fn() 은 jest 에서 제공하는 mock 함수입니다. 
        이 함수를 사용하면 이 함수가 호출 된 다음 
        toBeCalled 또는 toBeCalledWith 같은 matcher 를 사용해서 함수가 호출됐는지, 
        호출 됐다면 어떤 파라미터로 호출 됐는지 
        이런 것들을 쉽게 확인 할 수 있습니다.
     */
    const onInsert = jest.fn();
    const { input, button } = setup({ onInsert });
    // 수정하고
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });
    // 버튼 클릭
    fireEvent.click(button);
    expect(onInsert).toBeCalledWith("TDD 배우기"); // onInsert 가 'TDD 배우기' 파라미터가 호출됐어야 함
    expect(input).toHaveAttribute("value", ""); // input 이 바뀜
  });
});
