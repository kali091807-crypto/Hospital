import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Microscope, 
  Activity, 
  Info,
  Calendar
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { facilities } from '../data/facilities';

export default function Facilities() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Diagnostics', 'Surgical Suites', 'Patient Rooms', 'Emergency & Trauma', 'Pharmacy Services'];

  const filteredFacilities = selectedCategory === 'All'
    ? facilities
    : facilities.filter((f) => f.category === selectedCategory);

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Header */}
      <section className="py-12 md:py-16 bg-surface-light border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-mint-200/70 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wider uppercase mb-4">
              <span>Campus Infrastructure & Technology</span>
            </div>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-navy-800 tracking-tight leading-tight">
              Advanced Clinical Facilities
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-text leading-relaxed">
              Explore NovaCare’s state-of-the-art diagnostic imaging suites, robotic hybrid operating theatres, automated laboratories, and private inpatient recovery pavilions.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-teal-500 text-white shadow-soft-sm font-semibold'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-teal-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Showcase List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredFacilities.map((facility, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={facility.id}
                className="bg-surface-light rounded-4xl border border-slate-200/90 overflow-hidden shadow-soft-sm hover:shadow-soft-lg transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-center`}>
                  {/* Photo Column */}
                  <div className={`lg:col-span-6 h-full min-h-[320px] lg:min-h-[460px] relative overflow-hidden ${
                    isReversed ? 'lg:order-2' : ''
                  }`}>
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-navy-900/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                        {facility.badge}
                      </span>
                    </div>
                  </div>

                  {/* Details Column */}
                  <div className={`lg:col-span-6 p-8 sm:p-12 space-y-6 ${
                    isReversed ? 'lg:order-1' : ''
                  }`}>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-1">
                        {facility.category}
                      </span>
                      <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-800">
                        {facility.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-semibold text-teal-600 mt-1">
                        {facility.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-slate-text leading-relaxed">
                      {facility.description}
                    </p>

                    {/* Specifications List */}
                    <div className="space-y-2.5 pt-2 border-t border-slate-200">
                      <span className="text-xs font-bold uppercase tracking-wider text-navy-800 block mb-2">
                        Technical Specifications:
                      </span>
                      {facility.specs.map((spec, i) => (
                        <div key={i} className="flex items-start text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 mr-2.5 mt-0.5 flex-shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    {/* Hours & Location */}
                    <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-teal-600 flex-shrink-0" />
                        <span>{facility.operatingHours}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-teal-600 flex-shrink-0" />
                        <span>{facility.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="p-4 rounded-2xl bg-surface-light border border-slate-200 text-center text-xs text-slate-500 flex items-center justify-center space-x-2">
            <Info className="w-4 h-4 text-teal-600 flex-shrink-0" />
            <span>
              All equipment specifications, radiological ratings, and facility schedules are demonstration simulations for NovaCare Medical Center.
            </span>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-12 bg-surface-light border-t border-slate-200/80 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="font-heading font-bold text-2xl text-navy-800">
            Need diagnostic testing or a surgical consultation?
          </h3>
          <p className="text-sm text-slate-text">
            Our outpatient intake team will verify any physician referrals and assist with scheduling.
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
