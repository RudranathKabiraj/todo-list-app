// src/components/ToDoItem.jsx
import { useState } from "react";

function ToDoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center gap-3 bg-white/60  p-4 rounded-xl shadow-md transition-transform hover:scale-[1.01]">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      {isEditing ? (
        <input
          className="border p-1 rounded w-full"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span className={`flex-1 ${todo.completed ? "line-through text-gray-400" : ""}`}>
          {todo.text}
        </span>
      )}
      <button onClick={handleEdit} className="text-sm bg-yellow-300 px-2 py-1 rounded">
        {isEditing ? "Save" : "Edit"}
      </button>
      <button onClick={() => onDelete(todo.id)} className="text-sm bg-red-400 px-2 py-1 rounded">
        Delete
      </button>
    </div>
  );
}

export default ToDoItem;
