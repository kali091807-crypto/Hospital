import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Calendar, 
  Award, 
  GraduationCap, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Star, 
  ArrowLeft, 
  ArrowRight,
  ShieldCheck, 
  Building,
  HeartPulse,
  Info
} from 'lucide-react';
import { doctors } from '../data/doctors';
import { specialties } from '../data/specialties';

export default function DoctorProfile() {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === id);

  // If doctor not found, fallback to doctors page
  if (!doctor) {
    return <Navigate to="/doctors" replace />;
  }

  const specialty = specialties.find((s) => s.id === doctor.specialtyId);
  const otherDoctors = doctors.filter((d) => d.id !== doctor.id && d.specialtyId === doctor.specialtyId);

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Back Navigation Bar */}
      <div className="bg-surface-light border-b border-slate-200/80 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/doctors"
            className="inline-flex items-center text-xs font-semibold text-slate-600 hover:text-teal-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            <span>Back to All Doctors</span>
          </Link>
        </div>
      </div>

      {/* Main Profile Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Portrait & Quick Meta */}
            <div className="lg:col-span-4 space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-soft-lg border-4 border-white bg-slate-100 aspect-[4/5]">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 right-4 bg-navy-900/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold flex items-center space-x-1">
                  <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                  <span>{doctor.rating}</span>
                  <span className="text-slate-400 text-[10px]">({doctor.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Consultation Quick Card */}
              <div className="bg-surface-light p-6 rounded-3xl border border-slate-200 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block">
                  Clinical Consultation Desk
                </span>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-start space-x-2.5">
                    <MapPin className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-navy-800 block">Location:</span>
                      <span className="text-slate-text">{doctor.officeLocation}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2.5">
                    <Clock className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-navy-800 block">Clinic Days:</span>
                      <span className="text-slate-text">{doctor.availableDays.join(', ')}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2.5">
                    <Calendar className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-navy-800 block">Demo Slots:</span>
                      <span className="text-slate-text">{doctor.consultationSlots.join(', ')}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to={`/appointment?doctor=${doctor.id}`}
                    className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-4 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-medium text-sm shadow-soft-sm transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book With {doctor.shortName}</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: In-Depth Biography & Credentials */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-mint-100 text-teal-800 text-xs font-semibold mb-3">
                  <span>{doctor.department}</span>
                </div>
                <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-800 leading-tight">
                  {doctor.name}
                </h1>
                <p className="text-sm sm:text-base font-semibold text-teal-700 mt-1">
                  {doctor.role} • {doctor.experienceYears} Years Clinical Experience (Demo)
                </p>
              </div>

              {/* Biography */}
              <div className="space-y-4">
                <h2 className="font-heading font-bold text-xl text-navy-800">
                  Physician Overview & Clinical Philosophy
                </h2>
                <p className="text-slate-text leading-relaxed text-sm sm:text-base">
                  {doctor.bio}
                </p>
              </div>

              {/* Demonstration Qualifications */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h2 className="font-heading font-bold text-xl text-navy-800 flex items-center">
                  <GraduationCap className="w-5 h-5 text-teal-600 mr-2" />
                  Education & Medical Training (Demonstration)
                </h2>
                <div className="space-y-2.5">
                  {doctor.education.map((edu, i) => (
                    <div key={i} className="flex items-start text-xs sm:text-sm text-slate-700 bg-surface-light p-3 rounded-xl border border-slate-200/80">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 mr-2.5 mt-0.5 flex-shrink-0" />
                      <span>{edu}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Board Certifications */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h2 className="font-heading font-bold text-xl text-navy-800 flex items-center">
                  <Award className="w-5 h-5 text-teal-600 mr-2" />
                  Board Certifications & Fellowships
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {doctor.certifications.map((cert, i) => (
                    <div key={i} className="flex items-center text-xs sm:text-sm text-slate-700 bg-mint-50/50 p-3 rounded-xl border border-teal-200/50">
                      <ShieldCheck className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Procedures */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h2 className="font-heading font-bold text-xl text-navy-800">
                  Specialized Procedures & Clinical Focus
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {doctor.procedures.map((proc, i) => (
                    <div key={i} className="flex items-center text-xs text-navy-800 bg-surface-light p-2.5 rounded-xl border border-slate-200">
                      <span className="w-2 h-2 rounded-full bg-teal-500 mr-2.5 flex-shrink-0" />
                      <span>{proc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fictional disclaimer notice */}
              <div className="p-4 rounded-2xl bg-surface-light border border-slate-200 text-xs text-slate-500 flex items-start space-x-2.5">
                <Info className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>
                  All qualifications, certifications, and hospital affiliations shown for {doctor.shortName} are simulated demonstration data.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Associated Department Link */}
      {specialty && (
        <section className="py-12 bg-surface-light border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-teal-700 block mb-1">
                  Primary Institute
                </span>
                <h3 className="font-heading font-bold text-xl text-navy-800">
                  {specialty.name}
                </h3>
                <p className="text-xs text-slate-text mt-1 max-w-xl">
                  {specialty.headline}
                </p>
              </div>

              <Link
                to={`/specialties?id=${specialty.id}`}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-slate-200 hover:border-teal-400 hover:bg-teal-50 text-navy-800 text-xs font-semibold transition-colors flex-shrink-0"
              >
                <span>Explore Department</span>
                <ArrowRight className="w-4 h-4 text-teal-600" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
