import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JobBoard from './components/JobBoard';
import AssignmentModal from './components/AssignmentModal';
import Footer from './components/Footer';

export default function App() {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleOpenAssignment = (job) => setSelectedJob(job);
  const handleCloseAssignment = () => setSelectedJob(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-slate-900">
      <Navbar />
      <Hero />
      <JobBoard onOpenAssignment={handleOpenAssignment} />
      <Footer />

      <AssignmentModal open={!!selectedJob} job={selectedJob} onClose={handleCloseAssignment} />
    </div>
  );
}
