import { useMemo, useState } from "react";
import Dashboard from "./components/Dashboard.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import { initialTasks } from "./data/mockTasks.js";
import "./App.css";

function makeId() {
  return `t${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [editingId, setEditingId] = useState(null);
  const [formOpen, setFormOpen] = useState(false);

  const editingTask = useMemo(
    () => tasks.find((t) => t.id === editingId) ?? null,
    [tasks, editingId]
  );

  function addTask(data) {
    setTasks((prev) => [
      { ...data, id: makeId(), createdDate: todayISO() },
      ...prev,
    ]);
    setFormOpen(false);
  }

  function updateTask(id, data) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, ...data } : t)));
    setEditingId(null);
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    if (editingId === id) setEditingId(null);
  }

  function changeStatus(id, status) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
  }

  function startEdit(id) {
    setFormOpen(false);
    setEditingId(id);
  }

  return (
    <div className="page">
      <header className="page-header">
        <p className="eyebrow">Task Board</p>
        <h1>Keep today's work in view.</h1>
      </header>

      <Dashboard tasks={tasks} />

      <section className="board">
        <div className="board-toolbar">
          <h2>Tasks</h2>
          <button
            className="btn btn-primary"
            onClick={() => {
              setEditingId(null);
              setFormOpen((open) => !open);
            }}
          >
            {formOpen ? "Close" : "Add task"}
          </button>
        </div>

        {formOpen && (
          <TaskForm
            onSubmit={addTask}
            onCancel={() => setFormOpen(false)}
            submitLabel="Add task"
          />
        )}

        {editingTask && (
          <TaskForm
            key={editingTask.id}
            initialTask={editingTask}
            onSubmit={(data) => updateTask(editingTask.id, data)}
            onCancel={() => setEditingId(null)}
            submitLabel="Save changes"
          />
        )}

        <TaskList
          tasks={tasks}
          onEdit={startEdit}
          onDelete={deleteTask}
          onStatusChange={changeStatus}
        />
      </section>
    </div>
  );
}
