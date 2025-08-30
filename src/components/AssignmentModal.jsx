import { X, FileText, ExternalLink } from 'lucide-react';

export default function AssignmentModal({ open, job, onClose }) {
  if (!open || !job) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-slate-900/60" onClick={onClose} />
      <div className="relative w-full sm:max-w-2xl sm:rounded-2xl bg-white shadow-xl border border-sky-100 sm:mx-0 mx-2 max-h-[85vh] overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-sky-100">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-sky-500 to-blue-700 grid place-items-center text-white shadow-sm">
              <FileText className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900">Assignment — {job.title}</h4>
              <p className="text-xs text-slate-600">Team: {job.team} • Type: {job.type}</p>
            </div>
          </div>
          <button onClick={onClose} className="rounded-full p-2 hover:bg-slate-100 active:bg-slate-200 transition" aria-label="Close assignment">
            <X className="h-5 w-5 text-slate-600" />
          </button>
        </div>
        <div className="px-5 py-5 overflow-y-auto space-y-6">
          <section>
            <h5 className="text-sm font-semibold text-sky-800 uppercase tracking-wider">Overview</h5>
            <p className="mt-2 text-slate-700 leading-relaxed">{job.assignment.overview}</p>
          </section>

          <section>
            <h5 className="text-sm font-semibold text-sky-800 uppercase tracking-wider">Tasks</h5>
            <ul className="mt-2 list-disc ml-5 text-slate-700 space-y-2">
              {job.assignment.tasks.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </section>

          <section>
            <h5 className="text-sm font-semibold text-sky-800 uppercase tracking-wider">Deliverables</h5>
            <ul className="mt-2 list-disc ml-5 text-slate-700 space-y-2">
              {job.assignment.deliverables.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </section>
        </div>
        <div className="px-5 py-4 border-t border-sky-100 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="text-xs text-slate-600">We value practical, readable work. Feel free to share past work if it addresses the prompt.</p>
          <a href={job.assignment.submitLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-2 text-white font-medium hover:opacity-95 transition">
            Submit assignment <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
