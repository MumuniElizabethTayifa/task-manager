import { STATUSES } from "../data/mockTasks.js";

const STATUS_CLASS = {
  Pending: "status-pending",
  "In Progress": "status-progress",
  Completed: "status-completed",
};

function formatDate(iso) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function TaskItem({ task, onEdit, onDelete, onStatusChange }) {
  return (
    <li className="task-item">
      <div className="task-main">
        <div className="task-heading">
          <h3>{task.title}</h3>
          <span className={`status-tag ${STATUS_CLASS[task.status]}`}>
            {task.status}
          </span>
        </div>
        {task.description && <p className="task-description">{task.description}</p>}
        <p className="task-date">Created {formatDate(task.createdDate)}</p>
      </div>

      <div className="task-actions">
        <label className="status-select">
          <span className="sr-only">Change status for {task.title}</span>
          <select
            value={task.status}
            onChange={(e) => onStatusChange(e.target.value)}
          >
            {STATUSES.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>
        <button className="btn btn-text" onClick={onEdit}>
          Edit
        </button>
        <button className="btn btn-text btn-danger" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  );
}
