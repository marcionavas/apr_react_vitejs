import { Trash2 } from "lucide-react";
import { Todo } from "../types/todos"

interface TodoItemProps {
    todo: Todo
    onCompletedChange: (id: number, completed: boolean) => void;
    onDeleteTodo: (id: number) => void;
}



export default function TodoItem({todo, onCompletedChange, onDeleteTodo}: TodoItemProps) {

    return(
        <div>
            <label className="flex items-center gap-2 border rounded-md  border-gray-400 bg-white hover:bg-slate-50">
                <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
                className="scale-125"
                />
                <span className={todo.completed ? "line-through text-gray-400" : ""}>
                    {todo.title}
                </span>   
                <button
                    type="submit"
                    className="flex items-center justify-center px-4 h-10 w-16 rounded-e-md bg-red-600 text-white hover:bg-red-500 ml-auto"
                    onClick={() => onDeleteTodo(todo.id)}>
                        <Trash2 size={20} className="text-white"/>                                   
                </button>             
            </label>            
        </div>
        
    )
}