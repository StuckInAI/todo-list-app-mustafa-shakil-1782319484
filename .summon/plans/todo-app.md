---
status: pending
title: To-Do App
---

1. Set up the project foundation in /app/src/main.tsx — import the global stylesheet and render the root App component.

2. Create /app/src/styles/global.css — start with `@import "tailwindcss";` to enable Tailwind styling across the app.

3. Create /app/src/types/todo.ts — define a shared TypeScript type for a to-do item, including an id, text label, and completed status.

4. Create /app/src/hooks/useTodos.ts — a custom hook that manages the full list of to-do items in local state. It exposes functions to add a new task, toggle a task's completed status, and delete a task.

5. Create /app/src/components/TodoInput.tsx — a text input with an "Add" button. When the user types a task and submits, it calls the add function from the hook. The input clears after submission.

6. Create /app/src/components/TodoItem.tsx — displays a single to-do item as a row with a checkbox (to toggle completion), the task label (struck through when done), and a delete button.

7. Create /app/src/components/TodoList.tsx — renders the full list of TodoItem components. When the list is empty, it shows a friendly "No tasks yet" message.

8. Create /app/src/pages/TodoPage.tsx — the main page that composes TodoInput and TodoList together using the useTodos hook, displayed in a clean centred card layout.

9. Update /app/src/App.tsx — render the TodoPage as the sole view of the app.

10. Update /app/vite.config.ts — ensure the @tailwindcss/vite plugin is registered so Tailwind v4 works correctly.
