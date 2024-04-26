import { Todo } from "../types/todos";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void
}

export default function TodoList({todos, onCompletedChange, onDelete}: TodoListProps){

    const todosSorted = todos.sort((a, b) => {
        // Ordena primeiro por completude (completed)
        if (a.completed !== b.completed) {
            return a.completed ? 1 : -1;
        }
        // Se a completude for a mesma, ordena por ID
        return b.id - a.id;
    });

    return(
        <>
        <div className="space-y-2">
        {todosSorted.map(todo =>(
          <TodoItem 
          key={todo.id}
          todo={todo}
          onCompletedChange={onCompletedChange}
          onDeleteTodo={onDelete}/>
        ))}
      </div>
      {todos.length === 0 && (
        <p className="text-center text-sm text-gray-500">
            No todos yet! Add a new one above.
        </p>
      )}
      </>
    );
}