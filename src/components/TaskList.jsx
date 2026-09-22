import TaskItem from "./TaskItem.jsx";

export default function TaskList({ tasks, onEdit, onDelete, onStatusChange }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks yet. Add one to get started.</p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={() => onEdit(task.id)}
          onDelete={() => onDelete(task.id)}
          onStatusChange={(status) => onStatusChange(task.id, status)}
        />
      ))}
    </ul>
  );
}
