import { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import { TodoList } from "./todo-list";
import { TodoListWithMemo } from "./todo-list-withMemo";


function Home() {
  const [name, setName] = useState("");

  const todoWithMemo = useMemo(() => [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a project" },
    { id: 3, text: "Have fun!" },
  ], []);

    const todoWithoutMemo = useMemo(() => [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a project" },
    { id: 3, text: "Have fun!" },
  ], []);

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TodoList todos={todoWithMemo} />
      <TodoListWithMemo todos={todoWithoutMemo} />
      <TodoListWithMemo todos={todoWithMemo} />
    </div>
  );
}



ReactDOM.createRoot(document.getElementById("root")!).render(<Home />);
