import { Todo } from '@/types/todo';
import TodoItem from '@/components/TodoItem';

interface Props {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoList({ todos, onToggle, onDelete }: Props) {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center py-12 text-slate-400 gap-3">
        <svg className="w-12 h-12 opacity-40" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="10" width="32" height="34" rx="4" stroke="currentColor" strokeWidth="2.5" />
          <path d="M16 10V8a2 2 0 012-2h12a2 2 0 012 2v2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M18 24h12M18 31h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <p className="text-sm font-medium">No tasks yet — add one above!</p>
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-2">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
