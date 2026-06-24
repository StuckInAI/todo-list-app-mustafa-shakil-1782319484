import { useTodos } from '@/hooks/useTodos';
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';

export default function TodoPage() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  const completed = todos.filter(t => t.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 flex items-start justify-center px-4 py-16">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-800 tracking-tight">My Tasks</h1>
          {todos.length > 0 && (
            <p className="mt-2 text-slate-500 text-sm">
              {completed} of {todos.length} completed
            </p>
          )}
        </div>

        {/* Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-6">
          <TodoInput onAdd={addTodo} />
          <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </div>

        {/* Footer hint */}
        {todos.length > 0 && (
          <p className="text-center text-xs text-slate-400 mt-5">
            Hover a task to reveal the delete button
          </p>
        )}
      </div>
    </div>
  );
}
