# Task Board

A simple task management web app built with React. Tasks are held in local
component state and seeded from mocked data — there is no backend.

## Features

- View all tasks with title, description, status, and created date
- Add a new task
- Edit an existing task
- Delete a task
- Change a task's status (Pending / In Progress / Completed)
- Dashboard with total, pending, in progress, and completed task counts
- Responsive layout, from mobile to desktop

## Tech stack

- React 18
- Vite

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

   Then open the URL Vite prints (usually `http://localhost:5173`).

3. Build for production (optional):

   ```bash
   npm run build
   npm run preview
   ```

## Project structure

```
src/
  components/
    Dashboard.jsx   # task statistics
    TaskForm.jsx     # add/edit form
    TaskItem.jsx      # a single task row
    TaskList.jsx      # renders the list of tasks
  data/
    mockTasks.js       # seed data and status options
  App.jsx               # app state and layout
  App.css
  index.css
  main.jsx
```

## Notes

- Data is in-memory only and resets on page reload, per the assignment brief
  (mocked/static data, no backend integration).
- Status changes, edits, and deletes all operate on local state via simple
  callback props passed down from `App`.
