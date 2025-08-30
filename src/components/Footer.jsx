export default function Footer() {
  return (
    <footer id="about" className="border-t border-sky-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-extrabold text-slate-900 text-xl">bloq</h4>
          <p className="mt-2 text-slate-600 max-w-sm">bloq is a quantum computing company advancing algorithms, compilers, and control systems to unlock practical quantum advantage.</p>
        </div>
        <div>
          <h5 className="text-sm font-semibold text-sky-800 uppercase tracking-wider">Locations</h5>
          <ul className="mt-2 text-slate-700 space-y-1">
            <li>San Francisco, CA</li>
            <li>Boston, MA</li>
            <li>New York, NY</li>
            <li>Remote — Global</li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold text-sky-800 uppercase tracking-wider">Contact</h5>
          <ul className="mt-2 text-slate-700 space-y-1">
            <li>careers@bloq.com</li>
            <li>press@bloq.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-sky-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between text-xs text-slate-500">
          <span>© {new Date().getFullYear()} bloq, Inc. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#faq" className="hover:text-slate-700">FAQ</a>
            <a href="#roles" className="hover:text-slate-700">Careers</a>
            <a href="#" className="hover:text-slate-700">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
