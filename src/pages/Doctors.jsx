import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  SlidersHorizontal, 
  UserCheck, 
  Calendar, 
  Award, 
  Star, 
  ArrowRight,
  Clock,
  Sparkles,
  Info
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import DoctorCard from '../components/DoctorCard';
import { doctors } from '../data/doctors';
import { specialties } from '../data/specialties';

export default function Doctors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [sortBy, setSortBy] = useState('experience-desc');

  // Filter and Sort Doctors
  const filteredDoctors = useMemo(() => {
    let result = doctors.filter((doc) => {
      const matchesSearch = 
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.procedures.some((p) => p.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesSpecialty = 
        selectedSpecialty === 'All' || doc.specialtyId === selectedSpecialty;

      return matchesSearch && matchesSpecialty;
    });

    // Sorting
    result.sort((a, b) => {
      if (sortBy === 'experience-desc') {
        return b.experienceYears - a.experienceYears;
      }
      if (sortBy === 'rating-desc') {
        return b.rating - a.rating;
      }
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

    return result;
  }, [searchTerm, selectedSpecialty, sortBy]);

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Page Header */}
      <section className="py-12 md:py-16 bg-surface-light border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-mint-200/70 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wider uppercase mb-4">
              <span>Medical Faculty Directory</span>
            </div>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-navy-800 tracking-tight leading-tight">
              Our Medical Specialists
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-text leading-relaxed">
              Find our board-certified physicians, surgeon leaders, and department chairs. Explore credentials, procedures, and book an outpatient consultation.
            </p>
          </div>

          {/* Search, Filter & Sort Controls */}
          <div className="mt-10 bg-white p-5 rounded-3xl border border-slate-200 shadow-soft-sm grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by physician name or procedure..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 text-sm text-navy-900 placeholder-slate-400 focus:outline-none focus:border-teal-500"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-navy-800"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Specialty Dropdown */}
            <div className="md:col-span-4">
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm text-navy-900 bg-white focus:outline-none focus:border-teal-500"
              >
                <option value="All">All Specialties ({doctors.length})</option>
                {specialties.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <div className="md:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm text-navy-900 bg-white focus:outline-none focus:border-teal-500"
              >
                <option value="experience-desc">Sort: Most Experienced</option>
                <option value="rating-desc">Sort: Highest Rating</option>
                <option value="name-asc">Sort: Physician Name (A-Z)</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Cards Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading font-bold text-2xl text-navy-800">
              Specialist Physicians ({filteredDoctors.length})
            </h2>
            <div className="text-xs text-slate-muted">
              Click profile to review training, credentials & schedule
            </div>
          </div>

          {filteredDoctors.length === 0 ? (
            <div className="p-12 text-center bg-surface-light rounded-3xl border border-slate-200">
              <p className="text-base text-navy-800 font-semibold mb-2">
                No physicians matched your criteria
              </p>
              <p className="text-xs text-slate-muted mb-4">
                Try clearing your search or switching specialties.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedSpecialty('All');
                }}
                className="px-5 py-2.5 rounded-full bg-teal-500 text-white text-xs font-semibold"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          )}

          {/* Fictional Disclaimer */}
          <div className="mt-12 p-4 rounded-2xl bg-surface-light border border-slate-200 text-center text-xs text-slate-500 flex items-center justify-center space-x-2">
            <Info className="w-4 h-4 text-teal-600 flex-shrink-0" />
            <span>
              All physician biographies, experience years, and demonstration credentials are fictional mock profiles created for frontend display.
            </span>
          </div>
        </div>
      </section>

      {/* Book Consultation Banner */}
      <section className="py-12 bg-surface-light border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="font-heading font-bold text-2xl text-navy-800">
            Need assistance selecting the right doctor?
          </h3>
          <p className="text-sm text-slate-text max-w-lg mx-auto">
            Our outpatient intake coordinators can review your symptoms and recommend the appropriate specialist team.
          </p>
          <div className="pt-2">
            <Link
              to="/appointment"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-medium text-sm shadow-soft-sm transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule an Appointment</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
