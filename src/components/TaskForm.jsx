import { useState } from "react";
import { STATUSES } from "../data/mockTasks.js";

const EMPTY = { title: "", description: "", status: "Pending" };

export default function TaskForm({ initialTask, onSubmit, onCancel, submitLabel }) {
  const [values, setValues] = useState(
    initialTask
      ? {
          title: initialTask.title,
          description: initialTask.description,
          status: initialTask.status,
        }
      : EMPTY
  );
  const [error, setError] = useState("");

  function handleChange(field, value) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.title.trim()) {
      setError("Give the task a title before saving.");
      return;
    }
    onSubmit(values);
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={values.title}
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="e.g. Draft the onboarding email"
        />
      </div>

      <div className="field">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          rows={3}
          value={values.description}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="What does this task involve?"
        />
      </div>

      <div className="field field-inline">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          value={values.status}
          onChange={(e) => handleChange("status", e.target.value)}
        >
          {STATUSES.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      {error && <p className="form-error">{error}</p>}

      <div className="form-actions">
        <button type="button" className="btn btn-text" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
