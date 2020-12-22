import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    // querySelector 를 사용해서 찾을 수도있는데,
    // 공식문서에서는 DOM API 로 선택하는 것 대신에 
    // data-testid 를 사용 할 것을 권장
    <ul data-testid="TodoList">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};

export default TodoList;
