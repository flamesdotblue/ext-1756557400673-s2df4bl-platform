import { useMemo } from 'react';
import { Briefcase, MapPin, FileText, ArrowRight } from 'lucide-react';

const jobs = [
  {
    id: 'qae',
    title: 'Quantum Algorithms Engineer',
    location: 'Remote (Global)',
    type: 'Full-time',
    team: 'Research',
    highlights: [
      'Design and analyze NISQ and fault-tolerant algorithms',
      'Prototype with Python, Qiskit/Cirq/PennyLane',
      'Collaborate with hardware and compiler teams',
    ],
    assignment: {
      overview:
        'Select a computational problem relevant to near-term quantum devices. Propose and prototype a quantum/classical hybrid approach, justify its value, and evaluate scaling.',
      tasks: [
        'Pick a problem such as VQE, QAOA, or a data re-uploading model, and explain why it fits your expertise.',
        'Implement a minimal working prototype (Python + any quantum SDK). Keep it simple and readable.',
        'Devise 2–3 metrics (e.g., fidelity proxy, energy convergence, cost landscape) and report results.',
        'Discuss noise sensitivity and resource estimates (qubits, depth) for near-term hardware.',
      ],
      deliverables: [
        'A GitHub repo or Colab notebook with runnable code and README',
        'A 1–2 page PDF summarizing method, assumptions, and results',
      ],
      submitLink: 'https://forms.bloq.jobs/algorithms-assignment',
    },
  },
  {
    id: 'qce',
    title: 'Quantum Compiler Engineer',
    location: 'Hybrid — San Francisco, CA',
    type: 'Full-time',
    team: 'Systems',
    highlights: [
      'Optimize circuits via rewriting, mapping, and scheduling',
      'Work across IR design and hardware-aware passes',
      'Contribute to open-source compiler components',
    ],
    assignment: {
      overview:
        'Implement a simple circuit optimization pass and evaluate its impact on depth and 2Q gate count across a small benchmark suite.',
      tasks: [
        'Choose a pass (e.g., commutation-based reordering, peephole cancellation, or routing to a given coupling map).',
        'Apply it to 3–5 circuits from known benchmarks (e.g., qft, adder, vqe-ansatz).',
        'Report depth, 2Q count, and critical path improvements pre/post pass.',
        'Discuss trade-offs and potential interactions with scheduling/noise.',
      ],
      deliverables: [
        'Code (Python/C++) with clear instructions to reproduce',
        'Short report with tables/plots comparing metrics',
      ],
      submitLink: 'https://forms.bloq.jobs/compiler-assignment',
    },
  },
  {
    id: 'qhce',
    title: 'Quantum Hardware Control Engineer',
    location: 'Onsite — Boston, MA',
    type: 'Full-time',
    team: 'Hardware',
    highlights: [
      'Develop pulse sequences and calibration routines',
      'Automate experiments and data pipelines',
      'Collaborate with device and packaging teams',
    ],
    assignment: {
      overview:
        'Design a calibration workflow for a two-qubit cross-resonance (or platform of your choice) gate that achieves stable performance over time.',
      tasks: [
        'Describe the calibration parameters, measurement signals, and optimization strategy.',
        'Provide a simulation or pseudo-experiment script that demonstrates parameter search loops.',
        'Define monitoring metrics and triggers for re-calibration.',
        'Address hardware constraints and safety interlocks.',
      ],
      deliverables: [
        'Script/notebook and a block diagram of the control stack',
        '1–2 page document describing methodology and assumptions',
      ],
      submitLink: 'https://forms.bloq.jobs/hardware-control-assignment',
    },
  },
  {
    id: 'qse',
    title: 'Quantum Software Engineer (Cloud)',
    location: 'Remote (US timezones)',
    type: 'Full-time',
    team: 'Platform',
    highlights: [
      'Design APIs for jobs, results, and experiment management',
      'Build observability and secure multi-tenant systems',
      'Ship delightful developer experiences',
    ],
    assignment: {
      overview:
        'Design a minimal service that accepts a quantum job spec, runs a mock backend, and streams results to clients.',
      tasks: [
        'Define a JSON job schema with validation rules and examples.',
        'Implement a REST or gRPC service with a /jobs endpoint and a streaming results endpoint.',
        'Add basic auth and rate limiting; include unit tests.',
        'Provide a small React client that submits a job and displays live results.',
      ],
      deliverables: [
        'Repo with backend + client and a README with one-command run',
        'Diagram of system components and sequence of calls',
      ],
      submitLink: 'https://forms.bloq.jobs/cloud-assignment',
    },
  },
  {
    id: 'tpm',
    title: 'Technical Program Manager — Quantum',
    location: 'Hybrid — New York, NY',
    type: 'Full-time',
    team: 'Operations',
    highlights: [
      'Own cross-team roadmaps and delivery',
      'Define metrics and risk mitigation plans',
      'Coordinate releases across research and engineering',
    ],
    assignment: {
      overview:
        'Create a 90-day execution plan for launching a new quantum service beta with dependencies across research, compiler, hardware, and platform teams.',
      tasks: [
        'Draft a milestone plan with critical path and RACI.',
        'Define success metrics and weekly reporting cadence.',
        'Identify top 5 risks and mitigation strategies.',
        'Provide a status dashboard mock and comms plan template.',
      ],
      deliverables: [
        'One-page plan (Gantt or table) and risk register',
        'Dashboard mock (Figma, slides, or markdown acceptable)',
      ],
      submitLink: 'https://forms.bloq.jobs/tpm-assignment',
    },
  },
];

export default function JobBoard({ onOpenAssignment }) {
  const grouped = useMemo(() => {
    const map = new Map();
    for (const job of jobs) {
      if (!map.has(job.team)) map.set(job.team, []);
      map.get(job.team).push(job);
    }
    return Array.from(map.entries());
  }, []);

  return (
    <section id="roles" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Open roles</h2>
            <p className="mt-2 text-slate-600">Each posting includes a short, practical assignment. We value clarity over complexity.</p>
          </div>
          <a href="#about" className="hidden md:inline-flex items-center gap-2 text-sky-700 font-medium hover:text-sky-900">
            Learn about our process <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="space-y-14">
          {grouped.map(([team, items]) => (
            <div key={team}>
              <h3 className="mb-6 text-sm uppercase tracking-widest text-sky-700/80">{team}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {items.map((job) => (
                  <article key={job.id} className="group relative rounded-2xl bg-white/80 border border-sky-100 hover:border-sky-200 shadow-sm hover:shadow-md transition">
                    <div className="p-6 flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl font-semibold text-slate-900">{job.title}</h4>
                        <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 border border-sky-100"><Briefcase className="h-3.5 w-3.5 mr-1" /> {job.type}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <span className="inline-flex items-center"><MapPin className="h-4 w-4 mr-1 text-sky-600" /> {job.location}</span>
                      </div>
                      <ul className="mt-1 list-disc ml-5 text-slate-700 space-y-1">
                        {job.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                      <div className="mt-2 flex flex-wrap gap-3">
                        <button onClick={() => onOpenAssignment(job)} className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sky-700 font-medium hover:bg-sky-50 transition">
                          <FileText className="h-4 w-4" /> View assignment
                        </button>
                        <a href="#apply" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-2 text-white font-medium hover:opacity-95 transition">
                          Apply now <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
