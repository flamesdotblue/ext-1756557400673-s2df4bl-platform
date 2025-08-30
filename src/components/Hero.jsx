import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[70vh] min-h-[520px] w-full">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/qw5pDw-Wh4PXvDw4/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />
        <div className="relative z-10 mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Build the future of quantum at <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-800">bloq</span>
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              We are a quantum computing company pushing the boundaries of algorithms, hardware control, and cloud software. Join a team where physics meets world-class engineering.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#roles" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-5 py-3 text-white font-medium shadow-lg shadow-sky-200 hover:opacity-95 transition">
                Explore roles <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-5 py-3 text-sky-700 font-medium hover:bg-sky-50 transition">
                About bloq
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
