import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="min-h-screen flex items-center justify-center bg-slate-100"><p className="text-slate-400 text-lg">Loading To-Do App…</p></div>} />
      </Routes>
    </BrowserRouter>
  );
}
