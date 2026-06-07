export function TodoList({todos}: { todos: { id: number; text: string }[] }) {  
    console.log("Rendering TodoList");
    return <ul>
        {todos.map((todo: { id: number; text: string }) => <li key={todo.id}>{todo.text}</li>)}
    </ul>
 }