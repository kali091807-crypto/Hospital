import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  Sparkles,
  Stethoscope,
  HeartPulse,
  Brain,
  Activity,
  Baby,
  Dna,
  ShieldCheck,
  Info
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import FAQAccordion from '../components/FAQAccordion';
import { specialties } from '../data/specialties';
import { doctors } from '../data/doctors';
import { homeFaqs } from '../data/faqs';

const iconMap = {
  HeartPulse,
  Brain,
  Activity,
  Baby,
  Dna,
  Sparkles,
  ShieldHeart: ShieldCheck,
  Stethoscope
};

export default function Specialties() {
  const [searchParams] = useSearchParams();
  const initialId = searchParams.get('id');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState(initialId || specialties[0].id);

  // Set active specialty when URL query changes
  useEffect(() => {
    if (initialId) {
      setSelectedSpecialtyId(initialId);
      // Scroll to detailed section
      const el = document.getElementById('specialty-detail-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [initialId]);

  // Categories list
  const categories = ['All', 'Critical & Surgical', 'Family & Wellness', 'Precision Medicine', 'Outpatient & Specialty'];

  // Filtered specialties
  const filteredSpecialties = useMemo(() => {
    return specialties.filter((s) => {
      const matchesSearch = 
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.keyTreatments.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = 
        selectedCategory === 'All' || s.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Selected specialty details
  const activeSpecialty = specialties.find((s) => s.id === selectedSpecialtyId) || specialties[0];
  const relatedDoctors = doctors.filter((doc) => doc.specialtyId === activeSpecialty.id);

  const ActiveIcon = iconMap[activeSpecialty.iconName] || Stethoscope;

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Hero Header */}
      <section className="py-12 md:py-16 bg-surface-light border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-mint-200/70 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wider uppercase mb-4">
              <span>Specialty Clinical Directory</span>
            </div>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-navy-800 tracking-tight leading-tight">
              Medical Specialties & Centers
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-text leading-relaxed">
              Explore our multidisciplinary clinical departments. Search by specialty, condition, or treatment to find the expert care you need.
            </p>
          </div>

          {/* Search Bar & Filter Tabs */}
          <div className="mt-10 max-w-4xl space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by medical specialty, treatment, or condition (e.g. Cardiology, MRI, Joint)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-white text-navy-900 placeholder-slate-400 focus:outline-none focus:border-teal-500 shadow-soft-sm text-sm"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-navy-800"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-semibold text-slate-muted uppercase tracking-wider mr-2 flex items-center">
                <Filter className="w-3.5 h-3.5 mr-1" />
                Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-teal-500 text-white shadow-soft-sm font-semibold'
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-teal-300 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading font-bold text-2xl text-navy-800">
              Available Clinical Departments ({filteredSpecialties.length})
            </h2>
            <span className="text-xs text-slate-muted">Click any specialty to view clinical team</span>
          </div>

          {filteredSpecialties.length === 0 ? (
            <div className="p-12 text-center bg-surface-light rounded-3xl border border-slate-200">
              <p className="text-base text-navy-800 font-semibold mb-2">
                No specialties matched "{searchTerm}"
              </p>
              <p className="text-xs text-slate-muted mb-4">
                Try a different keyword or reset the category filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="px-5 py-2.5 rounded-full bg-teal-500 text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredSpecialties.map((spec) => {
                const isSelected = spec.id === activeSpecialty.id;
                const Icon = iconMap[spec.iconName] || Stethoscope;
                return (
                  <div
                    key={spec.id}
                    onClick={() => {
                      setSelectedSpecialtyId(spec.id);
                      const el = document.getElementById('specialty-detail-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`p-6 rounded-3xl border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                      isSelected
                        ? 'bg-mint-50/80 border-teal-500 shadow-soft-md ring-2 ring-teal-500/20'
                        : 'bg-surface-light hover:bg-white border-slate-200/90 hover:shadow-soft-md'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-2xl ${
                          isSelected ? 'bg-teal-500 text-white' : 'bg-white text-teal-700 shadow-soft-sm'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-teal-700 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                          {spec.category}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-lg text-navy-800 mb-2">
                        {spec.name}
                      </h3>
                      <p className="text-xs text-slate-text line-clamp-3 mb-4 leading-relaxed">
                        {spec.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs font-semibold text-teal-600">
                      <span>View Institute</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Specialty Detailed In-Depth Spotlight */}
      <section id="specialty-detail-section" className="py-16 md:py-24 bg-surface-light border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-4xl p-6 sm:p-12 border border-slate-200 shadow-soft-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Details & Key Procedures */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3.5 rounded-2xl bg-teal-500 text-white shadow-soft-sm">
                    <ActiveIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-teal-600">
                      {activeSpecialty.category}
                    </span>
                    <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-800">
                      {activeSpecialty.name}
                    </h2>
                  </div>
                </div>

                <p className="text-base sm:text-lg font-medium text-navy-800 leading-snug">
                  {activeSpecialty.headline}
                </p>

                <p className="text-sm text-slate-text leading-relaxed">
                  {activeSpecialty.detailedOverview}
                </p>

                {/* Key Treatments */}
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="font-heading font-bold text-navy-800 text-sm uppercase tracking-wider mb-3">
                    Highlighted Clinical Procedures & Therapies
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeSpecialty.keyTreatments.map((treatment, i) => (
                      <div key={i} className="flex items-center text-xs text-slate-700 bg-surface-light p-2.5 rounded-xl border border-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />
                        <span>{treatment}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Common Conditions */}
                <div className="pt-2">
                  <h4 className="font-heading font-bold text-navy-800 text-sm uppercase tracking-wider mb-2">
                    Conditions Frequently Evaluated
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeSpecialty.commonConditions.map((cond, i) => (
                      <span key={i} className="text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg">
                        {cond}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Booking CTA for this specialty */}
                <div className="pt-6 border-t border-slate-100 flex items-center space-x-4">
                  <Link
                    to={`/appointment?specialty=${activeSpecialty.id}`}
                    className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-medium text-sm shadow-soft-sm transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Consultation in {activeSpecialty.shortName}</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Related Doctors in this Department */}
              <div className="lg:col-span-5 bg-surface-light p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6">
                <div>
                  <h3 className="font-heading font-bold text-lg text-navy-800 mb-1">
                    Department Specialist Physicians
                  </h3>
                  <p className="text-xs text-slate-muted">
                    Attending doctors available for simulated consultation.
                  </p>
                </div>

                {relatedDoctors.length > 0 ? (
                  <div className="space-y-4">
                    {relatedDoctors.map((doc) => (
                      <div key={doc.id} className="bg-white p-4 rounded-2xl border border-slate-200/90 flex items-center space-x-4">
                        <img
                          src={doc.image}
                          alt={doc.name}
                          className="w-14 h-14 rounded-xl object-cover ring-2 ring-teal-500/20"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-heading font-bold text-sm text-navy-800 truncate">
                            {doc.name}
                          </h4>
                          <span className="text-xs text-teal-700 block truncate">{doc.role}</span>
                          <span className="text-[11px] text-slate-400 block mt-0.5">
                            {doc.experienceYears} Years Exp • {doc.officeLocation}
                          </span>
                        </div>
                        <Link
                          to={`/doctors/${doc.id}`}
                          className="p-2 rounded-xl text-teal-600 hover:bg-teal-50"
                          aria-label={`View profile for ${doc.name}`}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-500">
                    Faculty details for this demonstration specialty are available via the main doctor directory.
                  </p>
                )}

                <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200/60 text-xs text-teal-900 flex items-start space-x-2.5">
                  <Info className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Need a multidisciplinary assessment involving multiple departments? Contact our care coordinator desk.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties FAQs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Specialty Guidance"
            title="Questions About Specialty Care"
            subtitle="Understand how referrals, second opinions, and diagnostic pathways operate at NovaCare."
            centered={true}
          />

          <FAQAccordion items={homeFaqs.slice(0, 4)} />
        </div>
      </section>
    </div>
  );
}
