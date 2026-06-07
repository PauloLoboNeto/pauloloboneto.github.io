import React from "react";

export const TodoListWithMemo = React.memo(function ({
  todos,
}: {
  todos: { id: number; text: string }[];
}) {
    console.log("Rendering TodoListWithMemo");
  return (
    <ul>
      {todos.map((todo: { id: number; text: string }) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
});
