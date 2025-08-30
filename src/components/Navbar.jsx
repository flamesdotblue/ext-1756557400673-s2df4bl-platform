import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-sky-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-700 grid place-items-center shadow-md shadow-sky-200">
            <Rocket className="h-4 w-4 text-white" />
          </div>
          <span className="font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-800 text-xl">bloq</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-600">
          <a href="#roles" className="hover:text-slate-900 transition-colors">Open Roles</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#roles" className="inline-flex items-center rounded-full border border-sky-200 bg-white px-3 py-1.5 text-sm font-medium text-sky-700 hover:border-sky-300 hover:bg-sky-50 transition">We're hiring</a>
        </div>
      </div>
    </header>
  );
}
